"use client";
import React, { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import { Button } from "@nextui-org/react";
import { Scale, User, Phone, Mail, Calendar, Lock } from "lucide-react";
import { motion } from "framer-motion";

const FreeEvaluationCard = ({ className = "" }) => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "Free Consultation Request from Largo Wrongful Death Lawyer SEO Page",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

    if (!values.name.trim()) {
      errors.name = "Full name is required!";
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone number is required!";
    } else if (!phoneRegex.test(values.phone.trim())) {
      errors.phone = "This is not a valid phone number!";
    }

    if (!values.email.trim()) {
      errors.email = "Email address is required!";
    } else if (!emailRegex.test(values.email.trim())) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_du7590l",
        "template_gkqbvb9",
        emailForm,
        "igJ5_f7vinFq47loI"
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Submission Successful",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
            confirmButtonColor: "#1E2538",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              message: "Free Consultation Request from Largo Wrongful Death Lawyer SEO Page",
            });
          });
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: "Something went wrong! Please try again later or call us directly.",
            confirmButtonColor: "#CE2523",
          });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      className={`bg-white rounded-[24px] shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-5 sm:p-6 lg:p-10 ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
        
        {/* Left Side: Case Evaluation Info */}
        <div className="flex-1 flex flex-col justify-between space-y-4 lg:max-w-[42%]">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <h3
                className="text-xl md:text-[25px] font-extrabold text-secondary leading-tight pt-1"
              >
                Schedule Your Free, Confidential <br />
                <span className="text-primary">Largo Wrongful Death Case Evaluation Today</span>
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
              Taking swift action today is the only way to protect your family's future after this tragedy. We provide a clear path forward for your case during our free and confidential consultation session.
            </p>
          </div>

          {/* Phone CTA */}
          <a
            href="tel:+18139220228"
            className="flex items-center gap-3 group w-fit hover:scale-105 transition-transform duration-300"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200 mt-4">
              <Phone className="w-4 h-4 text-primary" strokeWidth={2} />
            </div>
            
            <div className="mt-4">
              <p className="text-black text-[15px] font-bold">Call Our Team</p>
              <p className="text-primary font-extrabold text-base md:text-2xl leading-tight group-hover:underline">
                (813) 922-0228
              </p>
            </div>
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-px bg-gray-200 self-stretch my-1" />

        {/* Right Side: Consultation Form */}
        <div className="flex-[1.3] flex flex-col justify-center w-full">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              
              {/* Full Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={emailForm.name}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, name: e.target.value })
                  }
                  className={`w-full pl-10 pr-3 py-2.5 bg-white border ${
                    formErrors.name ? "border-primary" : "border-gray-200"
                  } rounded-xl text-secondary text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200`}
                />
                {formErrors.name && (
                  <p className="text-primary text-[10px] mt-0.5 font-medium">
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={emailForm.phone}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, phone: e.target.value })
                  }
                  className={`w-full pl-10 pr-3 py-2.5 bg-white border ${
                    formErrors.phone ? "border-primary" : "border-gray-200"
                  } rounded-xl text-secondary text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200`}
                />
                {formErrors.phone && (
                  <p className="text-primary text-[10px] mt-0.5 font-medium">
                    {formErrors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={emailForm.email}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, email: e.target.value })
                }
                className={`w-full pl-10 pr-3 py-2.5 bg-white border ${
                  formErrors.email ? "border-primary" : "border-gray-200"
                } rounded-xl text-secondary text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200`}
              />
              {formErrors.email && (
                <p className="text-primary text-[10px] mt-0.5 font-medium">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              {loading ? (
                <Button
                  isLoading
                  className="w-full bg-primary hover:bg-primary/95 text-white font-extrabold tracking-wide uppercase py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  size="md"
                >
                  Sending Request...
                </Button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/95 text-white font-extrabold tracking-wider uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs sm:text-sm font-bold">GET MY FREE CONSULTATION</span>
                </button>
              )}
            </div>

            {/* Confidential footer text */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 pt-0.5">
              <Lock className="w-3 h-3 text-gray-400" />
              <span>100% Confidential. No Obligation.</span>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default FreeEvaluationCard;
