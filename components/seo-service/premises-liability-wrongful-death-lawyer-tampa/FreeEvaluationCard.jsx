"use client";
import React, { useState } from "react";
import { Send, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const FreeEvaluationCard = ({
  title = "Schedule Your Free, Confidential Tampa Premises Liability Wrongful Death Case Evaluation Today",
  subtitle = "Every day your family waits is a day the other side uses to build their defense, and some of that evidence cannot be recovered once it's gone.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your case evaluation request has been submitted.");
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  return (
    <div className="w-full bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Column: Headline and Call outs */}
        <div className="w-full lg:w-1/2 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-primary font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Free & Confidential Legal Consultation</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary tracking-tight leading-tight">
            {title}
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
            {subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>No Fee Unless We Win</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Direct Attorney Access</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-secondary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-secondary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-secondary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              />
            </div>

            <div>
              <textarea
                name="notes"
                rows={3}
                placeholder="Briefly describe what happened..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-secondary placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-red-700 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get Free Case Evaluation</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeEvaluationCard;
