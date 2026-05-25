import CompanyVehicleAccidentsInFlorida, {
  companyVehicleAccidentsInFlorida,
} from "./blogs/company-vehicle-accidents-in-florida";
import FloridaComparativeFaultAccidentCompensation, {
  floridaComparativeFaultAccidentCompensation,
} from "./blogs/florida-comparative-fault-accident-compensation";
import IntersectionCarAccidentsInTampa, {
  intersectionCarAccidentsInTampa,
} from "./blogs/intersection-car-accidents-in-tampa";
import WhatHappensAfterANighttimeCarAccidetInFlorida, {
  whatHappensAfterANighttimeCarAccidetInFlorida,
} from "./blogs/what-happens-after-a-nighttime-car-accidet-in-florida";

const staticBlogPostsUnsorted = [
  whatHappensAfterANighttimeCarAccidetInFlorida,
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
  [whatHappensAfterANighttimeCarAccidetInFlorida.slug]:
    WhatHappensAfterANighttimeCarAccidetInFlorida,
};

export function getStaticBlogBySlug(slug: string) {
  return staticBlogPosts.find((post) => post.slug === slug) || null;
}
