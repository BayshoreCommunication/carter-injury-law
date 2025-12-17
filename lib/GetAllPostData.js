import { cache } from "react";
import "server-only";

const getAllPostDataCached = cache(async (page = 1, limit = 9) => {
  try {
    const response = await fetch(
      `https://backend-carter-injury.vercel.app/site/blog?page=${page}&limit=${limit}`,
      {
        next: { revalidate: 60, tags: ["blog"] },
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch blog data: ${response.status} ${response.statusText}`
      );
      throw new Error(`Failed to fetch blog data: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching blog data:", error.message);
    throw error;
  }
});

export default async function GetAllPostData(page = 1, limit = 9) {
  return getAllPostDataCached(page, limit);
}
