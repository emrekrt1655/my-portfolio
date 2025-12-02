"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EmailBox = () => {
  const t = useTranslations("ContactPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error("EmailJS Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-3xl font-bold text-black mb-6">
        {t("formTitle") || "Send a Message"}
      </h2>

      {isSubmitted && (
        <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="text-green-600" size={24} />
          <p className="text-green-800 font-medium">
            {t("successMessage") ||
              "Thank you! Your message has been sent successfully."}
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700  mb-2"
          >
            {t("nameLabel") || "Your Name"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder={t("namePlaceholder") || "John Doe"}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            {t("emailLabel") || "Your Email"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder={t("emailPlaceholder") || "john@example.com"}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            {t("subjectLabel") || "Subject"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder={t("subjectPlaceholder") || "Project Inquiry"}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            {t("messageLabel") || "Message"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
            placeholder={
              t("messagePlaceholder") || "Tell me about your project..."
            }
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              {t("sendingButton") || "Sending..."}
            </>
          ) : (
            <>
              <Send size={20} />
              {t("sendButton") || "Send Message"}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EmailBox;
