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

const ContactInfo = () => {
  const t = useTranslations("ContactPage");

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
    <>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t("contactInfoTitle") || "Contact Information"}
        </h2>
        <p className="text-gray-600 mb-8">
          {t("contactInfoDescription") ||
            "Feel free to contact me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities."}
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-indigo-50 p-3 rounded-lg">{info.icon}</div>
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {info.label}
                </p>
                {info.href ? (
                  <Link
                    href={info.href}
                    className="text-gray-900 font-semibold hover:text-indigo-600 transition-colors"
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
              className={`bg-gray-100 p-4 rounded-lg text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
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
