import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "@/components/Common/BackButton";
import ProjectContent from "@/components/Projects/ProjectContent";
import { client } from "@/lib/sanity";
import { projectBySlugQuery, projectSlugsQuery } from "@/lib/sanity.queries";
import { PortableTextBlock } from "@portabletext/types";

interface Project {
  _id: string;
  title: string;
  description: string | null;
  software: string[] | null;
  date: string;
  slug: {
    current: string;
    _type: "slug";
  };
  content: PortableTextBlock[];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(projectSlugsQuery);
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await client.fetch<Project | null>(projectBySlugQuery, {
    slug,
  });

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Project`,
    description: project.description || `A detailed look at ${project.title}`,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await client.fetch<Project | null>(projectBySlugQuery, {
    slug,
  });

  if (!project) {
    notFound();
  }

  // Format the date
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="max-w-4xl mx-auto px-12 py-8">
      <BackButton href="/" />
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        {project.date && (
          <div className="text-gray-600">
            <time dateTime={project.date}>{formatDate(project.date)}</time>
          </div>
        )}
      </header>

      {project.content && project.content.length > 0 && (
        <ProjectContent content={project.content} />
      )}

      {(!project.content || project.content.length === 0) && (
        <div className="prose prose-lg font-mono">
          <p className="text-gray-500">No content available for this project.</p>
        </div>
      )}
    </article>
  );
}

