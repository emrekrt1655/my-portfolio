"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageSquareText,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "@/app/context/ThemeContext";

const ContactInfo = () => {
  const t = useTranslations("ContactPage");
  const { state } = useTheme();
  const isDark = state.theme === "dark";

  const contactInfo = [
    {
      icon: <Mail className={`transition-colors duration-300 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} size={24} />,
      label: "Email",
      value: "emrekurtt1655@gmail.com",
      href: "mailto:emrekurtt1655@gmail.com",
    },
    {
      icon: <Phone className={`transition-colors duration-300 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} size={24} />,
      label: "Phone",
      value: "+49 176 83186764",
      href: "tel:+4917683186764",
    },
    {
      icon: <MapPin className={`transition-colors duration-300 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} size={24} />,
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
      color: isDark ? "hover:text-gray-300" : "hover:text-gray-900",
    },
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emrekrt16/",
      color: "hover:text-blue-500",
    },
    {
      icon: <MessageSquareText size={28} />,
      label: "Medium",
      href: "https://medium.com/@emrekrt16",
      color: "hover:text-green-500",
    },
  ];

  return (
    <>
      <div>
        <h2
          className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {t("contactInfoTitle") || "Contact Information"}
        </h2>
        <p
          className={`mb-8 transition-colors duration-300 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("contactInfoDescription") ||
            "Feel free to contact me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities."}
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-lg p-6 border transition-all duration-300 ${
              isDark
                ? "bg-gray-800 border-gray-700 hover:shadow-2xl hover:border-indigo-500"
                : "bg-white border-gray-100 hover:shadow-xl hover:border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-gray-700" : "bg-indigo-50"
                }`}
              >
                {info.icon}
              </div>
              <div>
                <p
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {info.label}
                </p>
                {info.href ? (
                  <Link
                    href={info.href}
                    className={`font-semibold transition-colors duration-300 ${
                      isDark
                        ? "text-gray-200 hover:text-indigo-400"
                        : "text-gray-900 hover:text-indigo-600"
                    }`}
                  >
                    {info.value}
                  </Link>
                ) : (
                  <p
                    className={`font-semibold transition-colors duration-300 ${
                      isDark ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`rounded-xl shadow-lg p-6 border transition-colors duration-300 ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {t("socialLinksTitle") || "Follow Me"}
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className={`p-4 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              } ${social.color}`}
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;