import CompanyVehicleAccidentsInFlorida, {
  companyVehicleAccidentsInFlorida,
} from "./blogs/company-vehicle-accidents-in-florida";
import FloridaComparativeFaultAccidentCompensation, {
  floridaComparativeFaultAccidentCompensation,
} from "./blogs/florida-comparative-fault-accident-compensation";
import IntersectionCarAccidentsInTampa, {
  intersectionCarAccidentsInTampa,
} from "./blogs/intersection-car-accidents-in-tampa";

const staticBlogPostsUnsorted = [
  floridaComparativeFaultAccidentCompensation,
  companyVehicleAccidentsInFlorida,
  intersectionCarAccidentsInTampa,
];

export const staticBlogPosts = [...staticBlogPostsUnsorted].sort(
  (a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
);

export const staticBlogComponents = {
  [floridaComparativeFaultAccidentCompensation.slug]:
    FloridaComparativeFaultAccidentCompensation,
  [companyVehicleAccidentsInFlorida.slug]: CompanyVehicleAccidentsInFlorida,
  [intersectionCarAccidentsInTampa.slug]: IntersectionCarAccidentsInTampa,
};

export function getStaticBlogBySlug(slug: string) {
  return staticBlogPosts.find((post) => post.slug === slug) || null;
}
