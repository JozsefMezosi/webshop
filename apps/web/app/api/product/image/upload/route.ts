import { HTTP_STATUS_CODES } from "@common/http-status-codes";
import { PutBlobResult, put, del } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const formData = await request.formData();
  const images = formData.getAll("images");

  if (!images?.length) {
    return NextResponse.json("Please provide the image(s) of the product!", {
      status: HTTP_STATUS_CODES["Bad Request"],
    });
  }

  const productName = searchParams.get("productName");
  if (!productName) {
    return NextResponse.json("Please provide the name of the product!", {
      status: HTTP_STATUS_CODES["Bad Request"],
    });
  }

  const imageUrlPromises: Array<Promise<PutBlobResult>> = [];

  images.forEach((image) => {
    const blobPromise = put(`${productName}-img`, image, {
      access: "public",
    });
    imageUrlPromises.push(blobPromise);
  });

  const urls = await Promise.allSettled(imageUrlPromises);

  if (!anyUploadFailed(urls)) {
    for (const url of urls) {
      if (url.status === "fulfilled") {
        await del(url.value.url);
      }
    }

    return NextResponse.json("Something went wrong please try again later!", {
      status: HTTP_STATUS_CODES["Bad Request"],
    });
  }

  return NextResponse.json(urls.map((el) => el.value.url));
}

const anyUploadFailed = (
  urls: Array<PromiseSettledResult<PutBlobResult>>
): urls is Array<PromiseFulfilledResult<PutBlobResult>> =>
  urls.every((el) => el.status === "fulfilled");
