import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E9C7C7",
};

export const metadata: Metadata = {
  title: "Tea - AI Chatbot | Your Personal AI Companion",
  description: "Tea is a beautifully designed AI chatbot that's always there for you. Experience meaningful conversations, image generation, and more in a stunning aesthetic interface.",
  keywords: ["AI chatbot", "AI companion", "conversational AI", "image generation", "aesthetic app"],
  authors: [{ name: "Tribe Industries Inc" }],
  openGraph: {
    title: "Tea - AI Chatbot",
    description: "Your personal AI companion, beautifully designed.",
    type: "website",
    locale: "en_US",
    siteName: "Tea - AI Chatbot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tea - AI Chatbot",
    description: "Your personal AI companion, beautifully designed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
