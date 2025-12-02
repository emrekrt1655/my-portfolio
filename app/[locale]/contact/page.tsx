"use client";

import { useTranslations } from "next-intl";
import ContactInfo from "@/app/components/ContactInfo";
import EmailBox from "@/app/components/EmailBox";

const ContactPage = () => {
  const t = useTranslations("ContactPage");

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-12 px-6">
      <div className="max-w-6xl mt-10 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {t("title") || "Get In Touch"}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle") ||
              "Have a project in mind or just want to say hello? Feel free to reach out!"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo />

            <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {t("availabilityTitle") || "Current Status"}
              </h3>
              <p className="text-gray-700">
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
