import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

export default function SocialShareLinks({ blogUrl, blogTitle }) {
  return (
    <div className="my-8">
      <p className="font-semibold text-gray-800 mb-2">Share this blog</p>
      <div className="flex gap-3">
        {/* Facebook */}
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 p-2 rounded hover:bg-primary text-gray-700 hover:text-white"
        >
          <FaFacebookF className="size-5" />
        </Link>

        {/* Twitter (now X) */}
        <Link
          href={`https://twitter.com/intent/tweet?url=${blogUrl}&text=${blogTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 p-2 rounded hover:bg-primary text-gray-700 hover:text-white"
        >
          <RiTwitterXLine className="size-5" />
        </Link>

        {/* LinkedIn */}
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 p-2 rounded hover:bg-primary text-gray-700 hover:text-white"
        >
          <FaLinkedinIn className="size-5 " />
        </Link>

        {/* Email */}
        <Link
          href={`mailto:?subject=${blogTitle}&body=${blogUrl}`}
          className="bg-gray-200 p-2 rounded hover:bg-primary text-gray-700 hover:text-white"
        >
          <MdAlternateEmail className="size-5 " />
        </Link>
      </div>
    </div>
  );
}
