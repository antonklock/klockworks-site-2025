import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable. Please set it in your .env.local file or deployment environment."
  );
}

if (!dataset) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_DATASET environment variable. Please set it in your .env.local file or deployment environment."
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
