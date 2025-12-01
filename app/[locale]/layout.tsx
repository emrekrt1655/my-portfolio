import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import RootLayout from "../layout";
import Navbar from "../components/Navbar";

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "tr" }, { locale: "en" }];
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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RootLayout>
            <Navbar />
            {children}
          </RootLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
