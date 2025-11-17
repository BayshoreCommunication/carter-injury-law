import { cache } from "react";
import "server-only";

const getAllPostDataCached = cache(async (page = 1, limit = 9) => {
  const response = await fetch(
    `https://backend-carter-injury.vercel.app/site/blog?page=${page}&limit=${limit}`,
    {
      // Cache on the server with tag-based revalidation for faster loads
      next: { revalidate: 60, tags: ["blog"] },
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blog data");
  }

  return response.json();
});

export default async function GetAllPostData(page = 1, limit = 9) {
  return getAllPostDataCached(page, limit);
}
