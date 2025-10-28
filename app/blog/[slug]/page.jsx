import BlogHeroSectionforDetails from "@/components/blog/BlogHeroSectionforDetails";
import CardMotion from "@/components/motion/CardMotion";
import CallToAction from "@/components/shared/CallToAction";
import SectionLayout from "@/components/shared/SectionLayout";
import SocialShareLinks from "@/components/shared/SocialShareLinks";
import GetAllPostData from "@/lib/GetAllPostData";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const css = `
 h1, h2, p, br, nav {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: normal;
}

h1, h2 {
  font-style: blog;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 25px;
}

p {
  font-size: 17px;
  padding-top: 6px;
  padding-bottom: 6px;
}

ul {
  list-style-type: disc;
}

`;

export async function generateMetadata({ params }) {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    return {
      title: "Blog not found",
      description: "No blog post available.",
    };
  }

  let description = parse(blogDetails?.body);
  // console.log(
  //   description[0]?.props?.children.props?.children == undefined
  //     ? description[0]?.props?.children[0].props?.children
  //     : description[0]?.props?.children.props?.children
  // );
  return {
    title: blogDetails?.title,
    description:
      description[0]?.props?.children.props?.children == undefined
        ? description[0]?.props?.children[0].props?.children
        : description[0]?.props?.children.props?.children,
    openGraph: {
      title: blogDetails?.title,
      description:
        description[0]?.props?.children.props?.children == undefined
          ? description[0]?.props?.children[0].props?.children
          : description[0]?.props?.children.props?.children,
      images: blogDetails?.featuredImage?.image?.url,
      url: `https://www.carterinjurylaw.com/blog/${blogDetails?.slug}`,
      type: "article",
      site_name: "carterinjurylaw.com",
    },
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  const blogPostData = await GetAllPostData();
  const slugs = blogPostData?.data
    ?.filter((post) => post?.published === true && !!post?.slug)
    ?.map((post) => ({ slug: post.slug }));
  return slugs || [];
}

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData();

  const blogDetails = blogPostData?.data?.find(
    (blogs) => blogs.slug === params.slug
  );

  if (!blogDetails) {
    notFound();
  }

  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <style>{css}</style>
      <BlogHeroSectionforDetails />

      <SectionLayout bg="bg-white">
        <CardMotion
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.1,
            },
          }}
          initial={{
            opacity: 0,
            y: 100,
          }}
        >
          <div className="grid gap-12 mb-10 grid-cols-3">
            <div className="col-span-3 lg:col-span-2">
              <div className="flex items-center justify-between">
                <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                  {/* {blogDetails?.author} */}
                </p>
                <p className="text-[.9rem] md:text-[1rem] text-black text-left italic mt-4 ">
                  {postDate(blogDetails?.createdAt)}
                </p>
              </div>
              <h2
                className={`mb-0 md:mb-4 text-2xl md:text-4xl font-bold tracking-normal text-left text-[#1B2639]`}
              >
                {blogDetails?.title}
              </h2>
              <Image
                width={1200}
                height={675}
                src={blogDetails?.featuredImage?.image?.url}
                alt={
                  blogDetails?.featuredImage?.altText ||
                  blogDetails?.title ||
                  "Blog image"
                }
                className="w-full h-auto bg-center bg-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              />

              <div className="mt-2 text-md">{parse(blogDetails?.body)}</div>

              <div className="flex mt-1  lg:mt-5">
                <Link
                  href={"/contact"}
                  className="text-white bg-[#EC1D21]   font-semibold rounded-lg text-sm lg:text-lg  px-4 lg:px-6 xl:px-10  py-3 text-center shadow-[rgba(14,30,37,0.12)_0px_2px_4px_0px,_rgba(14,30,37,0.32)_0px_2px_16px_0px] hover:scale-105  transition duration-300"
                >
                  CLICK FOR FREE CASE EVALUATION
                </Link>
              </div>
              <SocialShareLinks
                blogUrl={`https://www.carterinjurylaw.com/blog/${blogDetails?.slug}`}
                blogTitle={blogDetails?.title}
              />
            </div>

            <div className="hidden lg:block col-span-1 h-[100%] md:h-[1000px] overflow-y-scroll overflow-x-hidden  p-3 rounded-lg">
              <h2 className="font-medium text-4xl text-black border-b-2 border-gray-500 pb-4 mb-6">
                Recent posts
              </h2>
              {blogPostData?.data
                ?.filter(
                  (pub) =>
                    pub.published === true && pub.slug !== blogDetails?.slug
                )
                ?.slice(0, 10)
                ?.map((blogs, index) => (
                  <Link
                    className="flex items-start gap-2 ps-3 py-3 drop-shadow-lg bg-white my-3"
                    key={`${blogs?.slug}-${index}`}
                    href={`/blog/${blogs?.slug}`}
                  >
                    <Image
                      width={120}
                      height={120}
                      src={blogs?.featuredImage?.image?.url}
                      alt={
                        blogs?.featuredImage?.altText ||
                        blogs?.title ||
                        "Blog thumbnail"
                      }
                      className="w-[100px] h-auto bg-center bg-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100px, 120px"
                    />
                    <div>
                      <div className="text-md font-bold text-black text-left line-clamp-2">
                        {blogs?.title}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </CardMotion>
      </SectionLayout>

      <CallToAction />
    </>
  );
};

export default page;
