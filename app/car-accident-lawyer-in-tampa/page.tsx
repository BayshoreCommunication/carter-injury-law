import HeroSection from "@/components/car-accident-lawyer-in-tampa/HeroSection";
import LeftSide from "@/components/car-accident-lawyer-in-tampa/LeftSide";
import ContactSection from "@/components/service/car-injury-attorney/ContactSection";
import RightSidebar from "@/components/service/car-injury-attorney/RightSidebar";
import { allServiceData } from "@/config/serviceData";
import GetAllPostData from "@/lib/GetAllPostData";

const page = async () => {
  // 🔥 Fetch ALL blogs (increase limit)
  const blogPostData = await GetAllPostData(1, 50);

  const relatedBlogs =
    blogPostData?.data
      ?.filter((post) => post?.published === true)
      ?.map((post) => ({
        title: post.title,
        slug: post.slug,
        featuredImage: post?.featuredImage?.image?.url,
      })) || [];

  return (
    <div>
      <HeroSection />
      <div className="max-w-[1620px] mx-auto px-8 flex flex-col lg:flex-row gap-12">
        <LeftSide />

        <RightSidebar
          practiceAreas={allServiceData}
          relatedBlogs={relatedBlogs}
          testimonials={[
            {
              text: "Carter Injury Law provided excellent legal support during my car accident. They remained clear, communicative, and professional throughout. They promptly answered all my questions. David was aggressive and committed during negotiation, securing a much better settlement than expected. I highly recommend Carter Injury Law for their professionalism and strong advocacy.",
              author: "RAY",
            },
            {
              text: "After a frustrating two-year experience with a large law firm that showed minimal communication or progress, switching to Carter Injury Law made an immediate difference. David and his team were responsive, compassionate, and actually cared about my case. Within just a few months, they accomplished more than the previous firm had in years. I highly recommend Carter Injury Law for anyone seeking a dedicated and effective legal team.",
              author: "CHRISTINA",
            },
            {
              text: "Choosing David Carter at Carter Injury Law was truly the best decision I made after my car accident. The situation became complicated because the other driver did not have proper insurance, but David guided me through everything with confidence and care. He explained each step clearly, fought hard against the insurance company, and came to trial completely prepared. His professionalism and attention to detail helped secure a strong settlement that covered all my medical bills and more.",
              author: "Steve",
            },
            {
              text: "After being hit by a large RV, I was confused and did not know what to do next. English is not my first language, and I needed a patient and understanding attorney. David Carter at Carter Injury Law went above and beyond to help me. He explained everything clearly, prepared me for court, and made sure I always understood what was happening. Thanks to his dedication and expertise, we won a $400,000 settlement that covered all my medical expenses.",
              author: "Judith",
            },
            {
              text: "Dealing with a rear-end collision was overwhelming until Carter Injury Law stepped in to help. David Carter and his team went above and beyond; explaining everything clearly, staying in constant communication, and making sure I felt supported the entire time. Their hard work resulted in a policy-limit settlement that fully covered my medical costs. It’s rare to find a Largo car accident attorney who combines skill, empathy, and results, but Carter Injury Law does exactly that. I’m truly grateful for everything they did to help me recover.",
              author: "Amanda",
            },
          ]}
        />
      </div>
      <ContactSection />
    </div>
  );
};

export default page;
