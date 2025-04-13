// src/app/api/link-preview/route.ts

import { NextResponse } from "next/server";
import metadata from "./article-metadata.json";

export async function GET() {
  return NextResponse.json(metadata);
}