import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          name: "videoEmbed",
          title: "Video Embed",
          type: "object",
          fields: [
            {
              name: "url",
              type: "url",
              title: "Video URL (e.g., YouTube, Vimeo)",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          name: "gallery",
          title: "Image Gallery",
          type: "object",
          fields: [
            {
              name: "images",
              title: "Images",
              type: "array",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "caption",
                      type: "string",
                      title: "Caption",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "software",
      title: "Software Used",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Next.js", value: "nextjs" },
              { title: "Supabase", value: "supabase" },
              { title: "PixiJS", value: "pixijs" },
              { title: "After Effects", value: "ae" },
              { title: "Blender", value: "blender" },
              { title: "Premiere Pro", value: "premiere" },
              { title: "Unity", value: "unity" },
            ],
          },
        },
      ],
    }),
  ],
});
