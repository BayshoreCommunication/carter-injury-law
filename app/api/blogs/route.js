import { NextResponse } from "next/server";
import GetAllPostData from "@/lib/GetAllPostData";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const blogData = await GetAllPostData(1, 100);
    return NextResponse.json(blogData);
  } catch (error) {
    console.error("Error in /api/blogs:", error);
    return NextResponse.json(
      { data: [], error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
