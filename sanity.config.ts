import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectType } from "./schemas/project";

export default defineConfig({
  name: "default",
  title: "klockworks-site",

  projectId: "07hxafwr",
  dataset: "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [projectType],
  },
});
