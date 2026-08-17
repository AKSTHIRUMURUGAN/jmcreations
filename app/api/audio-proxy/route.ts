import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing audio file id", { status: 400 });
  }

  // Google Drive download endpoints
  const driveUrl = `https://drive.google.com/uc?export=download&id=${id}&confirm=t`;

  try {
    const res = await fetch(driveUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      return new NextResponse(`Failed to fetch audio from Google Drive: ${res.statusText}`, {
        status: res.status,
      });
    }

    const contentType = res.headers.get("content-type") || "audio/mpeg";
    const body = res.body;

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": contentType.includes("audio") ? contentType : "audio/mpeg",
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (error: any) {
    return new NextResponse(`Error streaming audio: ${error.message}`, { status: 500 });
  }
}
