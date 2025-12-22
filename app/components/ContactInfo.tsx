"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageSquareText,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const t = useTranslations("ContactPage");

  const contactInfo = [
    {
      icon: (
        <Mail
          className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          size={24}
        />
      ),
      label: "Email",
      value: "emrekurtt1655@gmail.com",
      href: "mailto:emrekurtt1655@gmail.com",
    },
    {
      icon: (
        <Phone
          className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          size={24}
        />
      ),
      label: "Phone",
      value: "+49 176 83186764",
      href: "tel:+4917683186764",
    },
    {
      icon: (
        <MapPin
          className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          size={24}
        />
      ),
      label: "Location",
      value: "Ingolstadt 85053, Germany",
      href: null,
    },
    {
      icon: (
        <Calendar
          size={24}
          className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
        />
      ),
      label: "Calendy",
      value: `${t("bookTime")}`,
      href: "https://calendly.com/emrekurtt1655/30min",
      color: "hover:text-blue-600",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={28} />,
      label: "GitHub",
      href: "https://github.com/emrekrt1655",
      color: "text-indigo-600 dark:text-indigo-400 transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-300",
    },
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emrekrt16/",
      color: "text-indigo-600 dark:text-indigo-400 transition-colors duration-300 hover:text-blue-500",
    },
    {
      icon: <MessageSquareText size={28} />,
      label: "Medium",
      href: "https://medium.com/@emrekurtt1655",
      color: "text-indigo-600 dark:text-indigo-400 transition-colors duration-300 hover:text-green-500",
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {t("contactInfoTitle") || "Contact Information"}
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400 transition-colors duration-300">
          {t("contactInfoDescription") ||
            "Feel free to contact me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities."}
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-lg p-6 border bg-white border-gray-100 hover:shadow-xl hover:border-gray-200 
              dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-2xl dark:hover:border-indigo-500 
              transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-50 dark:bg-gray-700 transition-colors duration-300">
                {info.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  {info.label}
                </p>
                {info.href ? (
                  <Link
                    href={info.href}
                    className="font-semibold text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <p className="font-semibold text-gray-900 dark:text-gray-200 transition-colors duration-300">
                    {info.value}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl shadow-lg p-6 border bg-white border-gray-100 
        dark:bg-gray-800 dark:border-gray-700 
        transition-colors duration-300 mt-6"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {t("socialLinksTitle") || "Follow Me"}
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              className={`p-4 rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 
                hover:scale-110 transition-all duration-300 ${social.color}`}
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
