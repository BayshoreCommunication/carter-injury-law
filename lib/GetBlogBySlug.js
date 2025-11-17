import { cache } from "react";
import "server-only";

const getBlogBySlugCached = cache(async (slug) => {
  const response = await fetch(
    `https://backend-carter-injury.vercel.app/site/blog/${slug}`,
    {
      next: { revalidate: 60, tags: ["blog"] },
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog details");
  }

  const result = await response.json();
  return result.data; // Extract the data object
});

export default async function GetBlogBySlug(slug) {
  return getBlogBySlugCached(slug);
}
