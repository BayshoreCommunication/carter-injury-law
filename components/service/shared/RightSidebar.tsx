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

export default function ContactForm({
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

  // const LocationCard = () => (
  //   <div className="bg-gray-100 rounded-lg p-6 text-center">
  //     <h3 className="text-xl font-bold mb-4">Our Location</h3>

  //     <div className="h-40 rounded mb-4 overflow-hidden">
  //       <iframe
  //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.5693099386745!2d-82.7995663239731!3d27.915187216292992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fa72fe14cedf%3A0x6af59f2dc2dfe3b4!2s801%20W%20Bay%20Dr%20Ste.%20229%2C%20Largo%2C%20FL%2033770%2C%20USA!5e0!3m2!1sen!2sbd!4v1771997309287!5m2!1sen!2sbd"
  //         className="w-full h-full border-0"
  //         loading="lazy"
  //       ></iframe>
  //     </div>

  //     <p className="font-semibold uppercase">Carter Injury Law</p>

  //     <p className="text-sm text-gray-600 mt-1">
  //       801 W. Bay Dr., Suite 229, Largo, FL 33770
  //     </p>

  //     <p className="text-blue-600 font-bold mt-3">(813) 922-0228</p>

  //     <a
  //       href="https://maps.app.goo.gl/VKjps1YL2a4ryiwH6"
  //       target="_blank"
  //       className="mt-3 inline-block bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700"
  //     >
  //       GET DIRECTIONS
  //     </a>
  //   </div>
  // );

  return (
    <aside className="w-full max-w-[350px] space-y-8 pt-0 md:pt-16 mb-8">
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
      {/* Location Card */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Our Tampa Office</h3>

        <div className="h-40 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=3114+N+Boulevard+Tampa+FL+33603&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">Carter Injury Law</p>

        <p className="text-sm text-gray-600 mt-1">
          3114 N. Boulevard Tampa, FL 33603
        </p>

        <p className="text-blue-600 font-bold mt-3">(813) 922-0228</p>

        <a
          href="https://maps.app.goo.gl/g5PwkLU7NnJqz2zq8"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GET DIRECTIONS
        </a>
      </div>

      {/* CONTACT FORM */}
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
          <span className="text-[#CE2523] text-sm">{formErrors.firstName}</span>

          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 rounded border"
            value={emailForm.lastName}
            onChange={(e) =>
              setEmailForm({ ...emailForm, lastName: e.target.value })
            }
          />
          <span className="text-[#CE2523] text-sm">{formErrors.lastName}</span>

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded border"
            value={emailForm.phone}
            onChange={(e) =>
              setEmailForm({ ...emailForm, phone: e.target.value })
            }
          />
          <span className="text-[#CE2523] text-sm">{formErrors.phone}</span>

          <input
            type="text"
            placeholder="Zip Code"
            className="w-full p-3 rounded border"
            value={emailForm.zipCode}
            onChange={(e) =>
              setEmailForm({ ...emailForm, zipCode: e.target.value })
            }
          />
          <span className="text-[#CE2523] text-sm">{formErrors.zipCode}</span>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border"
            value={emailForm.email}
            onChange={(e) =>
              setEmailForm({ ...emailForm, email: e.target.value })
            }
          />
          <span className="text-[#CE2523] text-sm">{formErrors.email}</span>

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
            className="w-full bg-[#CE2523] text-white py-3 rounded font-semibold flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Submit Form"}
            <MdArrowOutward size={18} />
          </button>
        </form>
      </div>

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
                  className="hover:text-[#ED1B24]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Location Card  */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Our Largo Office</h3>

        <div className="h-40 rounded mb-4 overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=801+W+Bay+Dr+Suite+229+Largo+FL+33770&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        <p className="font-semibold uppercase">Carter Injury Law</p>

        <p className="text-sm text-gray-600 mt-1">
          801 W. Bay Dr., Suite 229, Largo, FL 33770
        </p>

        <p className="text-blue-600 font-bold mt-3">(813) 922-0228</p>

        <a
          href="https://maps.app.goo.gl/VKjps1YL2a4ryiwH6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block bg-[#043666] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          GET DIRECTIONS
        </a>
      </div>

      {testimonials.length > 0 && (
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
                      <Star
                        key={i}
                        size={22}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>

                  <p className="text-lg leading-8 text-gray-200">{item.text}</p>

                  <div className="w-12 h-[3px] bg-[#ED1B24] mx-auto my-6"></div>

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
