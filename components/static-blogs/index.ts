import CompanyVehicleAccidentsInFlorida, {
  companyVehicleAccidentsInFlorida,
} from "./blogs/company-vehicle-accidents-in-florida";
import IntersectionCarAccidentsInTampa, {
  intersectionCarAccidentsInTampa,
} from "./blogs/intersection-car-accidents-in-tampa";

const staticBlogPostsUnsorted = [
  companyVehicleAccidentsInFlorida,
  intersectionCarAccidentsInTampa,
];

export const staticBlogPosts = [...staticBlogPostsUnsorted].sort(
  (a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
);

export const staticBlogComponents = {
  [companyVehicleAccidentsInFlorida.slug]: CompanyVehicleAccidentsInFlorida,
  [intersectionCarAccidentsInTampa.slug]: IntersectionCarAccidentsInTampa,
};

export function getStaticBlogBySlug(slug: string) {
  return staticBlogPosts.find((post) => post.slug === slug) || null;
}
