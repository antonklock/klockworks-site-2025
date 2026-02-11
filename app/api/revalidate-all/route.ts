import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

const SECRET = process.env.SANITY_REVALIDATE_SECRET;

export async function POST(req: NextRequest) {
  const auth =
    req.headers.get("x-revalidate-secret") ??
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (!SECRET || auth !== SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    revalidatePath("/", "layout");
    return NextResponse.json({
      revalidated: true,
      scope: "all",
      now: Date.now(),
    });
  } catch (error) {
    console.error("Error revalidating:", error);
    return new NextResponse("Error revalidating", { status: 500 });
  }
}
