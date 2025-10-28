import { cache } from "react";
import "server-only";

const getAllPostDataCached = cache(async () => {
  const response = await fetch(
    "https://backend-carter-injury.vercel.app/site/blog",
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

export default async function GetAllPostData() {
  return getAllPostDataCached();
}
