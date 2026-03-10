"use client";

import { FiPhoneCall } from "react-icons/fi";
import { type ChangeEvent, type FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const validateForm = (values: FormData) => {
  const errors: Partial<FormData> = {};

  if (!values.name) errors.name = "Name is required!";
  if (!values.phone) errors.phone = "Phone number is required!";

  if (!values.email) {
    errors.email = "Email is required!";
  } else {
    const emailParts = values.email.split("@");
    if (emailParts.length !== 2 || !emailParts[1].includes(".")) {
      errors.email = "Invalid email format!";
    }
  }

  if (!values.message) errors.message = "Message is required!";

  return errors;
};

export default function HeroSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  const handleChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;

      setFormData((current) => ({
        ...current,
        [field]: value,
      }));

      setErrors((current) => ({
        ...current,
        [field]: "",
      }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    setLoading(true);

    emailjs
      .send(
        "service_vmukhcv",
        "template_4gr5fkm",
        formData,
        "i8FqedtCuwiwnAayK",
      )
      .then(() => {
        setLoading(false);

        Swal.fire({
          icon: "success",
          text: "Thank you for reaching out. Our team will contact you shortly.",
          confirmButtonColor: "#131b2a",
        });

        setFormData({
          name: "",
          phone: "",
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
    <section className="relative w-full min-h-[700px] flex items-center bg-[url('/assets/car-accident/bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative w-full max-w-[1320px] mx-auto px-12 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:pr-8">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#CE2523] leading-tight">
              Car Accident <br /> Lawyer in Tampa
            </h1>

            <p className="mt-6 text-gray-700 text-lg max-w-xl">
              If you were injured in a crash, a Tampa car accident lawyer can
              guide you through the legal process, deal with insurance
              companies, and build a strong case for your claim.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 tracking-wide">
                FREE CONFIDENTIAL CASE EVALUATION
              </p>

              <a
                href="tel:8139220228"
                className="mt-3 inline-flex items-center gap-2 text-[#CE2523] text-xl font-bold hover:underline"
              >
                <FiPhoneCall size={30} />
                <span className="text-[#CE2523] text-[32px]">
                  (813) 922-0228
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="w-full max-w-[450px] lg:ml-auto lg:pl-8 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-[#1E2538] text-white text-center py-5 text-2xl font-bold">
                FREE CASE REVIEW
              </div>

              <form className="p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange("name")}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    />
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    />
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                  />
                  <p className="text-red-500 text-sm">{errors.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How may we help you?"
                    value={formData.message}
                    onChange={handleChange("message")}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-none transition"
                  />
                  <p className="text-red-500 text-sm">{errors.message}</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#CE2523] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
                >
                  {loading ? "Sending..." : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
