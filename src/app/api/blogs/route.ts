import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "app", "api", "link-preview", "article-metadata.json");
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const metadata = JSON.parse(fileData);
    return NextResponse.json(metadata);
  } catch (error) {
    console.error("Error reading metadata file:", error);
    return NextResponse.json({ error: "Failed to fetch metadata" }, { status: 500 });
  }
}