import fs from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // video file ka path
    const videoPath = path.join(process.cwd(), "public/NavoVideo.mp4");

    // file ka size nikal lo
    const stats = fs.statSync(videoPath);
    const fileSize = stats.size;

    // range header (partial load ke liye)
    const range = req.headers.get("range");

    if (range) {
      // agar range di hui hai to partial response bhejna hai
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      const file = fs.createReadStream(videoPath, { start, end });

      const headers = new Headers({
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Type": "video/mp4",
      });

      return new Response(file as any, { status: 206, headers });
    } else {
      // agar range nahi hai to full video bhej do
      const file = fs.createReadStream(videoPath);

      const headers = new Headers({
        "Content-Length": fileSize.toString(),
        "Content-Type": "NavoVideo/mp4",
      });

      return new Response(file as any, { status: 200, headers });
    }
  } catch (error) {
    console.error("Video stream error:", error);
    return new Response("Error streaming video", { status: 500 });
  }
}
