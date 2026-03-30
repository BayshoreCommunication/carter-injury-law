"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import emailjs from "@emailjs/browser";
import "swiper/css";

interface RightSidebarProps {
  practiceAreas?: { title: string; slug: string }[];
  relatedBlogs?: {
    title: string;
    slug: string;
    featuredImage?: string;
  }[];
  testimonials?: {
    text: string;
    author: string;
  }[];
}

/* ---------------- VALIDATION ---------------- */

const validateForm = (values: any) => {
  const errors: any = {};

  if (!values.firstName) errors.firstName = "First name is required";
  if (!values.lastName) errors.lastName = "Last name is required";
  if (!values.phone) errors.phone = "Phone number is required";
  if (!values.zipCode) errors.zipCode = "Zip code is required";

  if (!values.email) {
    errors.email = "Email is required";
  } else {
    const emailParts = values.email.split("@");
    if (emailParts.length !== 2 || !emailParts[1].includes(".")) {
      errors.email = "Invalid email format";
    }
  }

  if (!values.message) errors.message = "Message is required";

  return errors;
};

export default function RightSidebar({
  practiceAreas = [],
  relatedBlogs = [],
  testimonials = [],
}: RightSidebarProps) {
  const pathname = usePathname();

  const [emailForm, setEmailForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const errors = validateForm(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    setLoading(true);

    emailjs
      .send(
        "service_vmukhcv",
        "template_slenem9",
        emailForm,
        "i8FqedtCuwiwnAayK",
      )
      .then(() => {
        setLoading(false);

        Swal.fire({
          icon: "success",
          text: "Thank you for reaching out. Our team will contact you shortly.",
          confirmButtonColor: "#CE2523",
        });

        setEmailForm({
          firstName: "",
          lastName: "",
          phone: "",
          zipCode: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);

        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <aside className="w-full max-w-[350px] space-y-8 md:pt-16 mb-8 self-start">
      {/* PROFILE */}
      <div className="shadow-lg rounded-md p-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-[130px] h-[130px] rounded-md overflow-hidden">
            <Image
              src="/assets/service/carter-img.png"
              alt="Attorney"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-black">WE FIGHT</h2>
        <p className="text-2xl text-gray-700 mt-2">FOR YOUR RIGHTS</p>

        <div className="mt-6">
          <span className="bg-[#CE2523] text-white px-6 py-2 font-semibold">
            CARTER INJURY LAW, PA
          </span>
        </div>
      </div>

      {/* PRACTICE AREAS */}
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
                    className={`flex items-center gap-2 ${
                      active
                        ? "text-[#ED1B24] font-semibold"
                        : "hover:text-[#ec000c]"
                    }`}
                  >
                    <span className="w-2 h-2 bg-[#ED1B24]"></span>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* CONTACT FORM */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6 text-center">
          FREE CASE EVALUATION
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "firstName", placeholder: "First Name" },
            { name: "lastName", placeholder: "Last Name" },
            { name: "phone", placeholder: "Phone Number" },
            { name: "zipCode", placeholder: "Zip Code" },
            { name: "email", placeholder: "Email", type: "email" },
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                className="w-full p-3 rounded border"
                value={(emailForm as any)[field.name]}
                onChange={(e) =>
                  setEmailForm({
                    ...emailForm,
                    [field.name]: e.target.value,
                  })
                }
              />
              <span className="text-[#CE2523] text-sm">
                {formErrors[field.name]}
              </span>
            </div>
          ))}

          <div>
            <textarea
              rows={4}
              placeholder="Describe what happened"
              className="w-full p-3 rounded border"
              value={emailForm.message}
              onChange={(e) =>
                setEmailForm({ ...emailForm, message: e.target.value })
              }
            />
            <span className="text-red-600 text-sm">{formErrors.message}</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#CE2523] text-white py-3 rounded font-semibold flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Submit Form"}
            <MdArrowOutward size={18} />
          </button>
        </form>
      </div>

      {/* RECENT POSTS */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6 uppercase border-b pb-2">
            Recent Posts
          </h3>

          <ul className="space-y-4">
            {relatedBlogs.slice(0, 10).map((item, index) => (
              <li key={index}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="flex gap-3 items-start group"
                >
                  <div className="w-[80px] h-[60px] relative flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={item.featuredImage || "/placeholder.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  <p className="text-sm font-medium leading-snug line-clamp-2 group-hover:text-[#ED1B24] transition">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔥 STICKY TESTIMONIALS */}
      {testimonials.length > 0 && (
        <div className="sticky top-24">
          <div className="bg-[#1f2a44] text-white rounded-2xl px-8 py-12 text-center shadow-xl">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4000 }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="flex justify-center gap-2 mb-6 text-blue-600">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={22} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-lg leading-8 text-gray-200">
                      {item.text}
                    </p>

                    <div className="w-12 h-[3px] bg-[#ED1B24] mx-auto my-6"></div>

                    <p className="text-lg text-gray-300 font-medium">
                      {item.author}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </aside>
  );
}
