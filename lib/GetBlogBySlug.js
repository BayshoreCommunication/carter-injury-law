import { cache } from "react";
import "server-only";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://backend-carter-injuryvercel.vercel.app";

const getBlogBySlugCached = cache(async (slug) => {
  if (!slug) return null;
  try {
    const response = await fetch(
      `${BACKEND_URL}/site/blog/${encodeURIComponent(slug)}`,
      {
        next: { revalidate: 60, tags: ["blog", `blog-${slug}`] },
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch blog details for slug "${slug}": ${response.status} ${response.statusText}`
      );
      return null;
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching blog details:", error.message);
    return null;
  }
});

export default async function GetBlogBySlug(slug) {
  return getBlogBySlugCached(slug);
}

