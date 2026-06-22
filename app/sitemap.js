import GetAllPostData from "@/lib/GetAllPostData";
import { staticBlogPosts } from "@/components/static-blogs";
import { allServiceData } from "@/config/serviceData";

export default async function sitemap() {
  const baseUrl = "https://www.carterinjurylaw.com";

  // 1. Static Pages
  const staticPages = [
    "",
    "/30-day-no-fee-satisfaction-guarantee",
    "/about-our-firm",
    "/airline-and-aviation-injuries-in-tampa",
    "/appointment",
    "/auto-accident-attorney-in-largo",
    "/blog",
    "/boat-accident-tampa",
    "/bus-accident-lawyer-in-tampa",
    "/car-accident-lawyer-in-tampa",
    "/car-injury-attorney",
    "/career",
    "/contact",
    "/cookie-policy",
    "/core-values",
    "/david-j-carter",
    "/disclaimers-and-terms-of-use",
    "/experienced-tampa-and-largo-delivery",
    "/faq",
    "/florida-motorcycle-accident",
    "/florida-truck-accident",
    "/how-we-handle-cases",
    "/jet-ski-accident-law-in-tampa",
    "/largo-car-accident-attorney",
    "/mission-statement",
    "/our-team",
    "/pedestrian-accident-lawyer",
    "/privacy-policy",
    "/robert-johnson",
    "/rv-accident-florida",
    "/scooter-accident-lawyer",
    "/tampa-pedestrian-accident",
    "/tampa-pedestrian-accident-lawyer",
    "/terms-of-service",
    "/testimonials",
    "/the-carter-difference",
    "/wrongful-death-Lawyer-in-tampa",
  ];

  const staticEntries = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Practice Area Pages (Dynamic from config)
  const practiceAreaEntries = (allServiceData || []).map((service) => ({
    url: `${baseUrl}/areas-of-practice/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // 3. Static Blog Posts
  const staticBlogEntries = (staticBlogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // 4. API Blog Posts
  let apiBlogEntries = [];
  try {
    const blogPostData = await GetAllPostData(1, 100);
    apiBlogEntries = (blogPostData?.data || [])
      .filter((post) => post?.published === true && !!post?.slug)
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.createdAt || new Date()),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
  } catch (error) {
    console.error("Error fetching blog data for sitemap:", error.message);
  }

  // Combine and deduplicate blogs if any overlap
  const allBlogEntries = [...staticBlogEntries];
  apiBlogEntries.forEach((apiEntry) => {
    if (!allBlogEntries.some((entry) => entry.url === apiEntry.url)) {
      allBlogEntries.push(apiEntry);
    }
  });

  return [...staticEntries, ...practiceAreaEntries, ...allBlogEntries];
}
