import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import Navbar from "@/app/components/Navbar";
import { Footer } from "../components/Footer";

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: any }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as string;

  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}