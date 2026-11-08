"use client";
import React, { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";

const FreeEvaluationCard = ({
  title = "Schedule Your Free, Confidential North Tampa Truck Accident Case Evaluation Today",
  subtitle = "Our comprehensive case evaluation identifies exactly which negligent parties might be held financially liable for your damages. We always act extremely quickly to legally preserve driver logs and crucial commercial vehicle maintenance records.",
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
        <div className="w-full lg:w-1/2 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-primary font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Free &amp; Confidential Legal Consultation</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary tracking-tight leading-tight">
            {title}
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
            {subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-bold text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-50/80 p-6 sm:p-8 rounded-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-secondary text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(813) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-secondary text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-secondary text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Brief Details of Your Truck Accident
              </label>
              <textarea
                name="notes"
                rows="3"
                placeholder="Tell us what happened..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-secondary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-primary hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all duration-300 active:scale-[0.99]"
            >
              <span>Get Your Free Case Evaluation</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeEvaluationCard;

