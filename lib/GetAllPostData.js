import { cache } from "react";
import "server-only";

function createEmptyBlogResponse(page, limit) {
  return {
    data: [],
    pagination: {
      currentPage: page,
      limit,
      total: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
    },
  };
}

const getAllPostDataCached = cache(async (page = 1, limit = 9) => {
  try {
    const response = await fetch(
      `https://backend-carter-injury.vercel.app/site/blog?page=${page}&limit=${limit}`,
      {
        next: { revalidate: 60, tags: ["blog"] },
      }
    );

    if (!response.ok) {
      console.warn(
        `Failed to fetch blog data: ${response.status} ${response.statusText}`
      );
      return createEmptyBlogResponse(page, limit);
    }

    return response.json();
  } catch (error) {
    console.warn("Error fetching blog data:", error.message);
    return createEmptyBlogResponse(page, limit);
  }
});

export default async function GetAllPostData(page = 1, limit = 9) {
  return getAllPostDataCached(page, limit);
}
