import BlogHeroSectionforDetails from "@/components/blog/BlogHeroSectionforDetails";
import SidebarBlogCard from "@/components/blog/SidebarBlogCard";
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
/* Scope all styles to blog content only */
.blog-content * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Headings */
.blog-content h1,
.blog-content h2,
.blog-content h3,
.blog-content h4,
.blog-content h5,
.blog-content h6 {
  font-weight: 700;
  color: #1B2639;
  line-height: 1.3;
  margin: 1.25em 0 0.5em 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.blog-content h1 {
  font-size: 2.25rem;
  margin-top: 0;
}

.blog-content h2 {
  font-size: 1.875rem;
}

.blog-content h3 {
  font-size: 1.5rem;
}

.blog-content h4 {
  font-size: 1.25rem;
}

.blog-content h5 {
  font-size: 1.125rem;
}

.blog-content h6 {
  font-size: 1rem;
}

/* Paragraphs */
.blog-content p {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #374151;
  margin: 0.65em 0;
  word-wrap: break-word;
  word-spacing: normal;
}

/* First paragraph after heading - reduce top margin */
.blog-content h1 + p,
.blog-content h2 + p,
.blog-content h3 + p,
.blog-content h4 + p,
.blog-content h5 + p,
.blog-content h6 + p {
  margin-top: 0.4em;
}

/* Lists */
.blog-content ul,
.blog-content ol {
  margin: 1em 0;
  padding-left: 2rem;
  line-height: 1.7;
}

.blog-content ul {
  list-style-type: disc;
}

.blog-content ol {
  list-style-type: decimal;
}

.blog-content li {
  font-size: 1.0625rem;
  color: #374151;
  margin: 0.25em 0;
  word-spacing: normal;
}

/* Links */
.blog-content a {
  color: #EC1D21;
  text-decoration: underline;
  word-wrap: break-word;
}

.blog-content a:hover {
  color: #B91C1C;
}

/* Text formatting */
.blog-content strong,
.blog-content b {
  font-weight: 700;
  color: #1B2639;
}

.blog-content em,
.blog-content i {
  font-style: italic;
}

/* Blockquotes */
.blog-content blockquote {
  border-left: 4px solid #EC1D21;
  padding: 1em 0 1em 1.25rem;
  margin: 1.25em 0;
  font-style: italic;
  color: #4B5563;
  background: #F9FAFB;
}

/* Images */
.blog-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.25em 0;
  border-radius: 0.5rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .blog-content h1 {
    font-size: 1.75rem;
    margin: 0.85em 0 0.4em 0;
    line-height: 1.25;
  }
  
  .blog-content h2 {
    font-size: 1.5rem;
    margin: 0.85em 0 0.4em 0;
    line-height: 1.25;
  }
  
  .blog-content h3 {
    font-size: 1.25rem;
    margin: 0.75em 0 0.35em 0;
    line-height: 1.25;
  }
  
  .blog-content h4 {
    font-size: 1.125rem;
    margin: 0.75em 0 0.35em 0;
    line-height: 1.25;
  }
  
  .blog-content h5,
  .blog-content h6 {
    font-size: 1rem;
    margin: 0.75em 0 0.35em 0;
    line-height: 1.25;
  }
  
  .blog-content p {
    font-size: 1rem;
    margin: 0.5em 0;
    line-height: 1.65;
    word-spacing: 0.05em;
  }
  
  .blog-content h1 + p,
  .blog-content h2 + p,
  .blog-content h3 + p,
  .blog-content h4 + p,
  .blog-content h5 + p,
  .blog-content h6 + p {
    margin-top: 0.3em;
  }
  
  .blog-content ul,
  .blog-content ol {
    padding-left: 1.5rem;
    margin: 0.75em 0;
  }
  
  .blog-content li {
    font-size: 1rem;
    margin: 0.2em 0;
    word-spacing: 0.05em;
  }
  
  .blog-content blockquote {
    padding: 0.75em 0 0.75em 1rem;
    margin: 1em 0;
  }
  
  .blog-content img {
    margin: 1em 0;
  }
}

/* Extra small devices - fix word spacing issues */
@media (max-width: 480px) {
  .blog-content h1 {
    font-size: 1.5rem;
  }
  
  .blog-content h2 {
    font-size: 1.375rem;
  }
  
  .blog-content h3 {
    font-size: 1.125rem;
  }
  
  .blog-content p,
  .blog-content li {
    font-size: 0.9375rem;
    word-spacing: normal;
    letter-spacing: normal;
  }
}
`;

export async function generateMetadata({ params }) {
  const blogPostData = await GetAllPostData(1, 100);

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
  const blogPostData = await GetAllPostData(1, 100);
  const slugs = blogPostData?.data
    ?.filter((post) => post?.published === true && !!post?.slug)
    ?.map((post) => ({ slug: post.slug }));
  return slugs || [];
}

const page = async ({ params }) => {
  const blogPostData = await GetAllPostData(1, 100);

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

              <div className="mt-2 text-md blog-content">
                {parse(blogDetails?.body)}
              </div>

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
                  <SidebarBlogCard
                    key={`${blogs?.slug}-${index}`}
                    blogs={blogs}
                  />
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
