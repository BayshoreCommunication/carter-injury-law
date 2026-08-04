const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/seo-service-images.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Page render order (top to bottom) based on page.tsx component order:
// 1. HeroHeader          -> carter-attorney, hero-bg
// 2. CommonCausesSection -> distraction, impaired, weather, traffic-congestion, driver-fatigue, negligent-motorists
// 3. WhyRightLawyerSection -> review
// 4. MistakesSection     -> communication-mistakes, evidence-timing
// 5. DedicatedCounselSection / WhyChooseUsSection / TestimonialsSection -> dedicated-counsel
// 6. JusticeSecuredSection -> justice-family
// 7. FinalCTASection     -> carter-team-cta

const PAGE_ORDER = [
  "carter-attorney",       // 1 - HeroHeader
  "hero-bg",               // 2 - HeroHeader (Background)
  "distraction",           // 3 - CommonCausesSection Cause 01
  "impaired",              // 4 - CommonCausesSection Cause 02
  "weather",               // 5 - CommonCausesSection Cause 03
  "traffic-congestion",    // 6 - CommonCausesSection Cause 04
  "driver-fatigue",        // 7 - CommonCausesSection Cause 05
  "negligent-motorists",   // 8 - CommonCausesSection Cause 06
  "review",                // 9 - WhyRightLawyerSection
  "communication-mistakes",// 10 - MistakesSection
  "evidence-timing",       // 11 - MistakesSection
  "dedicated-counsel",     // 12 - DedicatedCounselSection / WhyChooseUsSection / TestimonialsSection
  "justice-family",        // 13 - JusticeSecuredSection
  "carter-team-cta",       // 14 - FinalCTASection
];

for (const serviceKey of Object.keys(data.services)) {
  const images = data.services[serviceKey].images;
  const imgMap = {};
  for (const img of images) {
    imgMap[img.id] = img;
  }

  const reordered = PAGE_ORDER.map((id, index) => {
    if (!imgMap[id]) {
      console.warn(`Missing id "${id}" in service "${serviceKey}"`);
      return null;
    }
    const { sequence, ...rest } = imgMap[id]; // remove old sequence
    return { sequence: index + 1, ...rest };
  }).filter(Boolean);

  data.services[serviceKey].images = reordered;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Done! Images reordered by page render order (top to bottom).');
