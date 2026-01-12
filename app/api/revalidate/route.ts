import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

interface WebhookBody {
  _type: string;
  slug?: {
    current: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookBody>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    // Only revalidate project documents
    if (body._type !== "project") {
      return NextResponse.json({
        message: `Ignoring document type: ${body._type}`,
        revalidated: false,
      });
    }

    // Ensure we have a slug
    const slug = body.slug?.current;
    if (!slug) {
      return new NextResponse("No slug found in document", { status: 400 });
    }

    // Revalidate the specific project page
    revalidatePath(`/projects/${slug}`);

    console.log(`Revalidated path: /projects/${slug}`);

    return NextResponse.json({
      revalidated: true,
      path: `/projects/${slug}`,
      now: Date.now(),
    });
  } catch (error) {
    console.error("Error revalidating:", error);
    return new NextResponse(
      error instanceof Error ? error.message : "Error revalidating",
      { status: 500 }
    );
  }
}
