import ContactSection from '@/components/service/car-injury-attorney/ContactSection'
import LeftSide from '@/components/service/car-injury-attorney/LeftSide'
import RightSidebar from '@/components/service/car-injury-attorney/RightSidebar'
import { allServiceData } from '@/config/serviceData'
import GetAllPostData from "@/lib/GetAllPostData"

const page = async () => {

  // 🔥 Fetch ALL blogs (increase limit)
  const blogPostData = await GetAllPostData(1, 50)

  const relatedBlogs =
    blogPostData?.data
      ?.filter((post) => post?.published === true)
      ?.map((post) => ({
        title: post.title,
        slug: post.slug,
        featuredImage: post?.featuredImage?.image?.url,
      })) || []

  return (
    <div>
      <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-12">

        <LeftSide />

        <RightSidebar
          practiceAreas={allServiceData}
          areasWeServe={[
            { name: "Tampa", slug: "tampa" },
            { name: "Bradenton", slug: "bradenton" },
            { name: "St. Petersburg", slug: "st-petersburg" },
            { name: "Sarasota", slug: "sarasota" },
          ]}
          relatedBlogs={relatedBlogs}
          testimonial={{
            text: "",
            author: "",
          }}
        />

      </div>

      <ContactSection />
    </div>
  )
}

export default page