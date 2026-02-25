import ContactSection from "@/components/service/car-injury-attorney/ContactSection";
import LeftSide from "@/components/service/car-injury-attorney/LeftSide";
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
      <div className="max-w-[1620px] mx-auto px-8 flex flex-col lg:flex-row gap-12">
        <LeftSide />

        <RightSidebar
          practiceAreas={allServiceData}
          relatedBlogs={relatedBlogs}
          testimonial={{
            text: "Dealing with a rear-end collision was overwhelming until Carter Injury Law stepped in to help. David Carter and his team went above and beyond; explaining everything clearly, staying in constant communication, and making sure I felt supported the entire time. Their hard work resulted in a policy-limit settlement that fully covered my medical costs. It’s rare to find a Largo car accident attorney who combines skill, empathy, and results, but Carter Injury Law does exactly that. I’m truly grateful for everything they did to help me recover.",
            author: "Amanda",
          }}
        />
      </div>

      <ContactSection />
    </div>
  );
};

export default page;
