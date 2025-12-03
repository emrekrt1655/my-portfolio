"use client";

import { useTranslations } from "next-intl";
import ContactInfo from "@/app/components/ContactInfo";
import EmailBox from "@/app/components/EmailBox";
import { useTheme } from "@/app/context/ThemeContext";

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const { state } = useTheme();
  const isDark = state.theme === "dark";

  return (
    <div
      className={`min-h-screen py-12 px-6 transition-colors duration-300 ${
        isDark
          ? "bg-linear-to-b from-gray-900 to-gray-950"
          : "bg-linear-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-6xl mt-10 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {t("title") || "Get In Touch"}
          </h1>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("subtitle") ||
              "Have a project in mind or just want to say hello? Feel free to reach out!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />

            <div
              className={`rounded-xl p-6 border transition-colors duration-300 ${
                isDark
                  ? "bg-linear-to-r from-gray-800 to-gray-750 border-gray-700"
                  : "bg-linear-to-r from-indigo-50 to-purple-50 border-indigo-100"
              }`}
            >
              <h3
                className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {t("availabilityTitle") || "Current Status"}
              </h3>
              <p
                className={`transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {t("availabilityText") ||
                  "Open to new opportunities and collaborations"}
              </p>
            </div>
          </div>

          <EmailBox />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;