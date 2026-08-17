import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Missing video file id", { status: 400 });
  }

  // Google Drive download streaming endpoint
  const driveUrl = `https://drive.google.com/uc?export=download&id=${id}&confirm=t`;

  try {
    const range = request.headers.get("range");
    const fetchHeaders: Record<string, string> = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    };

    if (range) {
      fetchHeaders["Range"] = range;
    }

    const res = await fetch(driveUrl, {
      headers: fetchHeaders,
      redirect: "follow",
    });

    if (!res.ok && res.status !== 206) {
      return new NextResponse(`Failed to fetch video: ${res.statusText}`, {
        status: res.status,
      });
    }

    const contentType = res.headers.get("content-type") || "video/mp4";
    const contentRange = res.headers.get("content-range");
    const contentLength = res.headers.get("content-length");
    const acceptRanges = res.headers.get("accept-ranges") || "bytes";

    const responseHeaders: Record<string, string> = {
      "Content-Type": contentType.includes("video") || contentType.includes("octet") ? "video/mp4" : contentType,
      "Accept-Ranges": acceptRanges,
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    };

    if (contentRange) {
      responseHeaders["Content-Range"] = contentRange;
    }
    if (contentLength) {
      responseHeaders["Content-Length"] = contentLength;
    }

    return new NextResponse(res.body, {
      status: res.status === 206 ? 206 : 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    return new NextResponse(`Error streaming video: ${error.message}`, { status: 500 });
  }
}
