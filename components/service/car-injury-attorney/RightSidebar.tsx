"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
/* ---------------- TYPES ---------------- */

interface RightSidebarProps {
  practiceAreas?: { title: string; slug: string }[];
  relatedBlogs: {
    title: string;
    slug: string;
    featuredImage?: string;
  }[];
  testimonials?: {
    text: string;
    author: string;
  }[];
}

/* ---------------- FORM VALIDATION ---------------- */

const validateForm = (values: any) => {
  const errors: any = {};

  if (!values.firstName) errors.firstName = "First Name is required!";
  if (!values.lastName) errors.lastName = "Last Name is required!";

  if (!values.email) {
    errors.email = "Email is required!";
  } else {
    const emailParts = values.email.split("@");
    if (emailParts.length !== 2 || !emailParts[1].includes(".")) {
      errors.email = "This is not a valid email format!";
    }
  }

  if (!values.phone) errors.phone = "Phone number is required!";
  if (!values.zipCode) errors.zipCode = "Zipcode is required!";
  if (!values.caseType) errors.caseType = "Case Type is required!";
  if (!values.flag)
    errors.flag = "Accept Terms & acknowledge our Privacy Policy.";

  if (!values.message) {
    errors.message = "Message is required!";
  } else {
    const words = values.message.trim().split(/\s+/);
    if (words.length < 10) {
      errors.message =
        "Message must be at least 10 words. Current count: " + words.length;
    }
  }

  return errors;
};

export default function RightSidebar({
  practiceAreas = [],
  relatedBlogs,
  testimonials,
}: RightSidebarProps) {
  const pathname = usePathname();

  /* ---------------- FORM STATE ---------------- */

  const [emailForm, setEmailForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    email: "",
    caseType: "",
    message: "",
    flag: false,
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const errors = validateForm(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_du7590l",
        "template_9ql7ubi",
        emailForm,
        "igJ5_f7vinFq47loI",
      )
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Our team will respond shortly.",
            confirmButtonColor: "#131b2a",
          });
          setEmailForm({
            firstName: "",
            lastName: "",
            phone: "",
            zipCode: "",
            email: "",
            caseType: "",
            message: "",
            flag: false,
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          });
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  return (
    <aside className="w-full max-w-[750px] space-y-8 pt-0 md:pt-16">
      {/* PROFILE SECTION */}
      <div className="shadow-lg rounded-md p-8 text-center">
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
          <span className="bg-[#ED1B24] text-white px-6 py-2 font-semibold">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5693099386745!2d-82.7995663239731!3d27.915187216292992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fa72fe14cedf%3A0x6af59f2dc2dfe3b4!2s801%20W%20Bay%20Dr%20Ste.%20229%2C%20Largo%2C%20FL%2033770%2C%20USA!5e0!3m2!1sen!2sbd!4v1771997309287!5m2!1sen!2sbd"
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

      {/* CONTACT FORM (EXACT SAME) */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6 text-center">
          FREE CASE EVALUATION
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 rounded border"
            value={emailForm.firstName}
            onChange={(e) =>
              setEmailForm({ ...emailForm, firstName: e.target.value })
            }
          />
          <span className="text-red-600 text-sm">{formErrors.firstName}</span>

          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 rounded border"
            value={emailForm.lastName}
            onChange={(e) =>
              setEmailForm({ ...emailForm, lastName: e.target.value })
            }
          />
          <span className="text-red-600 text-sm">{formErrors.lastName}</span>

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded border"
            value={emailForm.phone}
            onChange={(e) =>
              setEmailForm({ ...emailForm, phone: e.target.value })
            }
          />
          <span className="text-red-600 text-sm">{formErrors.phone}</span>

          <input
            type="text"
            placeholder="Zip Code"
            className="w-full p-3 rounded border"
            value={emailForm.zipCode}
            onChange={(e) =>
              setEmailForm({ ...emailForm, zipCode: e.target.value })
            }
          />
          <span className="text-red-600 text-sm">{formErrors.zipCode}</span>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border"
            value={emailForm.email}
            onChange={(e) =>
              setEmailForm({ ...emailForm, email: e.target.value })
            }
          />
          <span className="text-red-600 text-sm">{formErrors.email}</span>

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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#EC1D21] text-white py-3 rounded font-semibold flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Submit Form"}
            <MdArrowOutward size={18} />
          </button>
        </form>
      </div>

      {/* BLOG SECTION */}
      {relatedBlogs.length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-6 uppercase border-b pb-2">
            Recent Posts
          </h3>
          <ul className="space-y-5">
            {relatedBlogs.slice(0, 10).map((item, index) => (
              <li key={index}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="hover:text-red-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

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
          801 W. Bay Dr., Suite 229, Largo, FL 33770
        </p>

        <p className="text-blue-600 font-bold mt-3">(813) 922-0228</p>

        <button className="mt-3 bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          GET DIRECTIONS
        </button>
      </div>

      {/* TESTIMONIAL SLIDER */}

      {testimonials && testimonials.length > 0 && (
        <div className="w-full max-w-[450px] bg-[#1f2a44] text-white rounded-2xl px-8 py-12 text-center shadow-xl overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="w-full !max-w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!w-full">
                <div className="w-full">
                  <div className="flex justify-center gap-2 mb-6 text-blue-600">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={22}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>

                  <p className="text-lg leading-8 text-gray-200">{item.text}</p>

                  <div className="w-12 h-[3px] bg-red-600 mx-auto my-6"></div>

                  <p className="text-lg text-gray-300 font-medium">
                    {item.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </aside>
  );
}
