"use client";

import { useTranslations } from "next-intl";
import ContactInfo from "@/app/components/ContactInfo";
import EmailBox from "@/app/components/EmailBox";

const ContactPage = () => {
  const t = useTranslations("ContactPage");

  return (
    <div className="min-h-screen py-12 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mt-10 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {t("title") || "Get In Touch"}
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400 transition-colors duration-300">
            {t("subtitle") ||
              "Have a project in mind or just want to say hello? Feel free to reach out!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />

            <div className="rounded-xl p-6 border bg-white border-indigo-100 dark:bg-gray-800 dark:to-gray-750 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                {t("availabilityTitle") || "Current Status"}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
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
