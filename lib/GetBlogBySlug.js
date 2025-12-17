import { cache } from "react";
import "server-only";

const getBlogBySlugCached = cache(async (slug) => {
  try {
    const response = await fetch(
      `https://backend-carter-injury.vercel.app/site/blog/${slug}`,
      {
        next: { revalidate: 60, tags: ["blog"] },
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch blog details: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const result = await response.json();
    return result.data; // Extract the data object
  } catch (error) {
    console.error("Error fetching blog details:", error.message);
    return null;
  }
});

export default async function GetBlogBySlug(slug) {
  return getBlogBySlugCached(slug);
}
