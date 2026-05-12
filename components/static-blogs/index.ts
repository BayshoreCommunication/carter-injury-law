import CompanyVehicleAccidentsInFlorida, {
  companyVehicleAccidentsInFlorida,
} from "./blogs/company-vehicle-accidents-in-florida";

export const staticBlogPosts = [companyVehicleAccidentsInFlorida];

export const staticBlogComponents = {
  [companyVehicleAccidentsInFlorida.slug]: CompanyVehicleAccidentsInFlorida,
};

export function getStaticBlogBySlug(slug: string) {
  return staticBlogPosts.find((post) => post.slug === slug) || null;
}
