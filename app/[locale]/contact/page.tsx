"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquareText, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-indigo-600" size={24} />,
      label: "Email",
      value: "emrekurtt1655@gmail.com",
      href: "mailto:emrekurtt1655@gmail.com",
    },
    {
      icon: <Phone className="text-indigo-600" size={24} />,
      label: "Phone",
      value: "+49 176 83186764",
      href: "tel:+4917683186764",
    },
    {
      icon: <MapPin className="text-indigo-600" size={24} />,
      label: "Location",
      value: "Ingolstadt 85053, Germany",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={28} />,
      label: "GitHub",
      href: "https://github.com/emrekrt1655",
      color: "hover:text-gray-900",
    },
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emrekrt16/",
      color: "hover:text-blue-600",
    },
    {
      icon: <MessageSquareText size={28} />,
      label: "Medium",
      href: "https://medium.com/@emrekrt16",
      color: "hover:text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12 px-6">
      <div className="max-w-6xl mt-10 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {t("title") || "Get In Touch"}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle") || "Have a project in mind or just want to say hello? Feel free to reach out!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("contactInfoTitle") || "Contact Information"}
              </h2>
              <p className="text-gray-600 mb-8">
                {t("contactInfoDescription") || "Feel free to contact me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities."}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      {info.href ? (
                        <Link
                          href={info.href}
                          className="text-gray-900 font-semibold hover:text-indigo-600 transition-colors cursor-pointer"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-gray-900 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("socialLinksTitle") || "Follow Me"}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className={`bg-gray-100 p-4 rounded-lg text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 cursor-pointer`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t("availabilityTitle") || "Current Status"}
              </h3>
              <p className="text-gray-700">
                {t("availabilityText") || "Open to new opportunities and collaborations"}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("formTitle") || "Send a Message"}
            </h2>

            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle className="text-green-600" size={24} />
                <p className="text-green-800 font-medium">
                  {t("successMessage") || "Thank you! Your message has been sent successfully."}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("nameLabel") || "Your Name"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder={t("namePlaceholder") || "John Doe"}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("emailLabel") || "Your Email"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder={t("emailPlaceholder") || "john@example.com"}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("subjectLabel") || "Subject"} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder={t("subjectPlaceholder") || "Project Inquiry"}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("messageLabel") || "Message"} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                  placeholder={t("messagePlaceholder") || "Tell me about your project..."}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default ContactPage;