"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get access to Tea?",
      answer:
        "Tea is coming soon! Join our waitlist on the homepage and we'll notify you as soon as it launches on the App Store.",
    },
    {
      question: "Is Tea free to use?",
      answer:
        "Tea offers a free trial so you can experience the app before subscribing. After the trial, a subscription is required to continue using all of Tea's features including conversations, image generation, and more.",
    },
    {
      question: "How do I generate images with Tea?",
      answer:
        "Simply describe the image you want to create in your conversation. Tea will generate a unique image based on your description. Subscribers enjoy unlimited image generation.",
    },
    {
      question: "Are my conversations private?",
      answer:
        "Yes, your privacy is our priority. Conversations are encrypted and we don't sell or share your personal data. See our Privacy Policy for full details.",
    },
    {
      question: "How do I pin or search conversations?",
      answer:
        "To pin a conversation, tap the pin icon at the top of any chat. To search, use the search bar in your conversation list to find specific messages or topics.",
    },
    {
      question: "Can I use Tea on multiple devices?",
      answer:
        "Currently Tea is available on iOS devices. Your account syncs across all your iOS devices when signed in with the same account.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "Subscriptions are managed through your Apple ID. Go to Settings > Apple ID > Subscriptions on your iOS device to manage or cancel your Tea subscription.",
    },
    {
      question: "I'm having technical issues. What should I do?",
      answer:
        "First, try closing and reopening the app, or restarting your device. If issues persist, contact us through the Contact page with details about the problem.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--rose-light)] text-[var(--rose-dark)] text-sm font-medium mb-6">
              Support
            </span>
            <h1 className="text-5xl md:text-6xl font-medium mb-6">
              How can we <span className="gradient-text">help</span>?
            </h1>
            <p className="text-xl text-[var(--soft-gray)] leading-relaxed">
              Find answers to common questions or reach out to our team directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card text-center group cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--rose-light)] flex items-center justify-center text-[var(--rose-dark)] group-hover:bg-[var(--rose)] transition-colors">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">FAQ</h3>
              <p className="text-sm text-[var(--soft-gray)]">
                Find quick answers below
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/contact" className="card text-center group block">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--rose-light)] flex items-center justify-center text-[var(--rose-dark)] group-hover:bg-[var(--rose)] transition-colors">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Contact Us</h3>
                <p className="text-sm text-[var(--soft-gray)]">
                  Get in touch directly
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/privacy" className="card text-center group block">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--rose-light)] flex items-center justify-center text-[var(--rose-dark)] group-hover:bg-[var(--rose)] transition-colors">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Privacy</h3>
                <p className="text-sm text-[var(--soft-gray)]">
                  Learn about your data
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--soft-gray)]">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-[var(--rose-light)] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[var(--rose-light)]/20 transition-colors"
                >
                  <span className="font-medium text-[var(--charcoal)]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[var(--rose-dark)] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-[var(--soft-gray)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Still have questions?
            </h2>
            <p className="text-xl text-[var(--soft-gray)] mb-8">
              We&apos;re here to help. Reach out and we&apos;ll get back to you
              as soon as possible.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
