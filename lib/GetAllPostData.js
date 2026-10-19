import { cache } from "react";
import "server-only";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://backend-carter-injuryvercel.vercel.app";

function createEmptyBlogResponse(page = 1, limit = 9) {
  return {
    data: [],
    pagination: {
      currentPage: page,
      limit,
      total: 0,
      totalBlogs: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
    },
  };
}

async function fetchPage(page, limit) {
  const safeLimit = Math.min(Math.max(Number(limit) || 10, 1), 100);
  const response = await fetch(
    `${BACKEND_URL}/site/blog?page=${page}&limit=${safeLimit}`,
    {
      next: { revalidate: 60, tags: ["blog"] },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch blog data: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

const getAllPostDataCached = cache(
  async (page = 1, limit = 9, fetchAll = false) => {
    try {
      const shouldFetchAll =
        fetchAll || limit === "all" || (page === 1 && Number(limit) >= 100);

      if (shouldFetchAll) {
        // Fetch page 1 with max allowed limit (100)
        const firstPage = await fetchPage(1, 100);
        const totalPages = firstPage?.pagination?.totalPages || 1;
        const totalBlogs =
          firstPage?.pagination?.totalBlogs ?? firstPage?.data?.length ?? 0;
        let allData = Array.isArray(firstPage?.data)
          ? [...firstPage.data]
          : [];

        // If multiple pages exist, fetch remaining pages in parallel
        if (totalPages > 1) {
          const remainingPromises = [];
          for (let p = 2; p <= totalPages; p++) {
            remainingPromises.push(
              fetchPage(p, 100).catch((err) => {
                console.warn(`Error fetching blog page ${p}:`, err.message);
                return { data: [] };
              })
            );
          }
          const remainingResults = await Promise.all(remainingPromises);
          for (const res of remainingResults) {
            if (Array.isArray(res?.data)) {
              allData.push(...res.data);
            }
          }
        }

        return {
          data: allData,
          pagination: {
            currentPage: 1,
            limit: allData.length,
            total: totalBlogs,
            totalBlogs,
            totalPages: 1,
            hasNextPage: false,
            hasPrevPage: false,
          },
        };
      }

      // Single page fetch
      const result = await fetchPage(page, limit);
      return {
        data: result?.data || [],
        pagination: {
          currentPage: result?.pagination?.currentPage || page,
          limit: result?.pagination?.limit || limit,
          total:
            result?.pagination?.totalBlogs ??
            result?.pagination?.total ??
            (result?.data?.length || 0),
          totalBlogs:
            result?.pagination?.totalBlogs ??
            result?.pagination?.total ??
            (result?.data?.length || 0),
          totalPages: result?.pagination?.totalPages || 1,
          hasNextPage: result?.pagination?.hasNextPage || false,
          hasPrevPage: result?.pagination?.hasPrevPage || false,
        },
      };
    } catch (error) {
      console.warn("Error fetching blog data:", error.message);
      return createEmptyBlogResponse(page, limit);
    }
  }
);

export default async function GetAllPostData(
  page = 1,
  limit = 9,
  fetchAll = false
) {
  return getAllPostDataCached(page, limit, fetchAll);
}

