import { HTTP_STATUS_CODES } from "@common/http-status-codes";
import { del } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const productUrl = (await request.json()).url;

  if (!productUrl) {
    return NextResponse.json("Please provide the name of the product!", {
      status: HTTP_STATUS_CODES["Bad Request"],
    });
  }

  await del(productUrl);
  return NextResponse.json("Image deleted");
}
