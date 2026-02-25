"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

interface RightSidebarProps {
  practiceAreas?: { title: string; slug: string }[];
  relatedBlogs: { title: string; slug: string; featuredImage?: string }[];
  testimonial?: { text: string; author: string };
}

interface FormValues {
  firstName: string;
  message: string;
}

export default function RightSidebar({
  practiceAreas = [],
  relatedBlogs,
  testimonial,
}: RightSidebarProps) {
  const pathname = usePathname();

  /* ---------------- SIMPLE FORM STATE ---------------- */

  const [formData, setFormData] = useState<FormValues>({
    firstName: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormValues> = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name required";
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ firstName: "", message: "" });
    }
  };

  return (
    <aside className="w-full max-w-[750px] mx-auto space-y-8 md:pt-16">
      {/* PROFILE CARD */}
      <div className="shadow-lg rounded-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-[130px] h-[130px] rounded-md overflow-hidden">
            <Image
              src="/assets/service/carter-img.png"
              alt="Attorney"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h2 className="text-4xl font-extrabold">WE FIGHT</h2>
        <p className="text-2xl text-gray-700 mt-2">FOR YOUR RIGHTS</p>
        <div className="mt-6">
          <span className="bg-[#ED1B24] text-white px-6 py-2 font-semibold">
            CARTER INJURY LAW, PA
          </span>
        </div>
      </div>

      {/* ---------------- PRACTICE AREAS ---------------- */}
      {practiceAreas.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 uppercase border-b pb-2">
            Practice Areas
          </h3>

          <ul className="space-y-3 text-sm">
            {practiceAreas.slice(0, 10).map((item, index) => {
              const active = pathname === `/areas-of-practice/${item.slug}`;

              return (
                <li key={index}>
                  <Link
                    href={`/areas-of-practice/${item.slug}`}
                    className={`flex items-center gap-2 transition ${
                      active
                        ? "text-red-600 font-semibold"
                        : "hover:text-red-600"
                    }`}
                  >
                    <span className="w-2 h-2 bg-red-600"></span>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* ---------------- LOCATION CARD ---------------- */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Our Location</h3>

        <div className="h-40 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.705238086085!2d-82.47275531347553!3d27.972312151968936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3b1208be12d%3A0x4cce7467aad41864!2sCarter%20Injury%20Law!5e0!3m2!1sen!2sbd!4v1771754150422!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">Carter Injury Law</p>

        <p className="text-sm text-gray-600 mt-1">
          3114 N. BOULEVARD TAMPA, FL 33603
        </p>

        <p className="text-blue-600 font-bold mt-3">(813) 922-0228</p>

        <button className="mt-3 bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          GET DIRECTIONS
        </button>
      </div>

      {/* SIMPLE CONTACT FORM */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6 text-center">
          FREE CASE EVALUATION
        </h3>

        {submitted && (
          <p className="text-green-600 text-center mb-4">
            Thank you! Your message has been received.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 rounded border"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <p className="text-red-500 text-sm">{errors.firstName}</p>

          <textarea
            rows={4}
            placeholder="Describe your case"
            className="w-full p-3 rounded border"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <p className="text-red-500 text-sm">{errors.message}</p>

          <button
            type="submit"
            className="w-full bg-[#EC1D21] text-white py-3 rounded font-semibold flex items-center justify-center gap-2"
          >
            Submit Form
            <MdArrowOutward size={18} />
          </button>
        </form>
      </div>
      {/* ---------------- LOCATION CARD ---------------- */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Our Location</h3>

        <div className="h-40 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5693099386745!2d-82.7995663239731!3d27.915187216292992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fa72fe14cedf%3A0x6af59f2dc2dfe3b4!2s801%20W%20Bay%20Dr%20Ste.%20229%2C%20Largo%2C%20FL%2033770%2C%20USA!5e0!3m2!1sen!2sbd!4v1771997309287!5m2!1sen!2sbd"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">Carter Injury Law</p>

        <p className="text-sm text-gray-600 mt-1">
          801 W. Bay Dr., Suite 229, Largo, FL 33770 (Satellite Office - By
          Appointment)
        </p>

        <p className="text-blue-600 font-bold mt-3">(813) 922-0228</p>

        <button className="mt-3 bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          GET DIRECTIONS
        </button>
      </div>
      {/* ---------------- RELATED BLOG POSTS ---------------- */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6 uppercase border-b pb-2">
            Recent Posts
          </h3>

          <ul className="space-y-5">
            {relatedBlogs.slice(0, 10).map((item, index) => {
              const active = pathname === `/blog/${item.slug}`;

              return (
                <li key={index}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="flex gap-3 group"
                  >
                    {item.featuredImage && (
                      <div className="w-16 h-16 relative shrink-0 rounded overflow-hidden">
                        <Image
                          src={item.featuredImage}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}

                    <p
                      className={`text-sm leading-5 transition ${
                        active
                          ? "text-red-600 font-semibold"
                          : "group-hover:text-red-600"
                      }`}
                    >
                      {item.title}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* TESTIMONIAL */}
      {testimonial && (
        <div className="bg-[#1f2a44] text-white rounded-2xl px-8 py-12 text-center shadow-xl">
          <div className="flex justify-center gap-2 text-teal-400 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="currentColor" stroke="none" />
            ))}
          </div>
          <p className="text-lg text-gray-200">{testimonial.text}</p>
          <div className="w-12 h-[3px] bg-red-600 mx-auto my-6 rounded"></div>
          <p className="text-lg text-gray-300">{testimonial.author}</p>
        </div>
      )}
    </aside>
  );
}
