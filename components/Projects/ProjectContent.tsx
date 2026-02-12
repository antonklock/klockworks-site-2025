"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/lib/sanity";
import MultiPhotoViewer from "../PhotoView/MultiPhotoViewer";
import SinglePhotoViewer from "../PhotoView/SinglePhotoViewer";
import { SanityImageSource } from "@sanity/image-url";

interface ProjectContentProps {
  content: PortableTextBlock[];
}

const ProjectContent = ({ content }: ProjectContentProps) => {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        const imageUrl = urlFor(value).width(1200).url();
        return (
          <div className="my-6">
            <SinglePhotoViewer image={imageUrl} />
            {value.caption && (
              <p className="text-sm text-gray-500 mt-2 text-center">
                {value.caption}
              </p>
            )}
          </div>
        );
      },
      videoEmbed: ({ value }) => {
        if (!value?.url) return null;
        
        // Check if it's a YouTube or Vimeo URL
        const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
        const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/;
        
        const youtubeMatch = value.url.match(youtubeRegex);
        const vimeoMatch = value.url.match(vimeoRegex);
        
        if (youtubeMatch) {
          const videoId = youtubeMatch[1];
          return (
            <div className="my-6">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {value.caption && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {value.caption}
                </p>
              )}
            </div>
          );
        }
        
        if (vimeoMatch) {
          const videoId = vimeoMatch[1];
          return (
            <div className="my-6">
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://player.vimeo.com/video/${videoId}`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {value.caption && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {value.caption}
                </p>
              )}
            </div>
          );
        }
        
        // For direct video URLs, use HTML5 video element
        return (
          <div className="my-6 overflow-hidden rounded-lg">
            <video
              autoPlay={false}
              controls
              className="w-full h-auto"
            >
              <source src={value.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {value.caption && (
              <p className="text-sm text-gray-500 mt-2 text-center">
                {value.caption}
              </p>
            )}
          </div>
        );
      },
      gallery: ({ value }) => {
        if (!value?.images || !Array.isArray(value.images)) return null;
        
        const imageUrls = value.images
          .map((img: { asset?: SanityImageSource }) => 
            img?.asset ? urlFor(img.asset).width(1000).url() : null
          )
          .filter((url: string | null): url is string => typeof url === "string");
        
        if (imageUrls.length === 0) return null;
        
        return (
          <div className="my-6">
            <MultiPhotoViewer images={imageUrls} />
          </div>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className="font-bold text-4xl mt-8 mb-2">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="font-bold text-4xl mt-8 mb-2">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="font-bold text-xl mt-6 mb-2">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="font-bold text-lg mt-4 mb-2">{children}</h4>
      ),
      normal: ({ children }) => (
        <p className="mb-6 mt-6">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-outside ml-6 my-6 space-y-2">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-outside ml-6 my-6 space-y-2">
          {children}
        </ol>
      ),
    },
    listItem: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ value, children }) => {
        const target = value?.blank ? "_blank" : undefined;
        const rel = value?.blank ? "noopener noreferrer" : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={rel}
            className="text-kwRed hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="prose prose-lg font-mono max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
};

export default ProjectContent;

