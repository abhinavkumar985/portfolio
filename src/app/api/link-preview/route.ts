// src/app/api/link-preview/route.ts

import { NextRequest, NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const getMeta = (name: string) =>
      doc.querySelector(`meta[property="${name}"]`)?.getAttribute("content") ||
      doc.querySelector(`meta[name="${name}"]`)?.getAttribute("content");

    const data = {
      title: getMeta("og:title") || doc.title,
      description: getMeta("og:description") || "",
      image: getMeta("og:image") || "",
      hostname: new URL(url).hostname,
    };

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch preview" }, { status: 500 });
  }
}