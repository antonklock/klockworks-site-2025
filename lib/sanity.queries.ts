import { groq } from "next-sanity";

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    software,
    date,
    thumbnail,
    slug,
    content[] {
      ...,
      _type == "image" => {
        ...,
        asset-> {
          _id,
          url,
          metadata {
            dimensions
          }
        }
      },
      _type == "videoEmbed" => {
        ...
      },
      _type == "gallery" => {
        ...,
        images[] {
          ...,
          asset-> {
            _id,
            url,
            metadata {
              dimensions
            }
          }
        }
      }
    }
  }
`;
