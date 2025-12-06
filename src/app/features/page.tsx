"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";

export default function FeaturesPage() {
  const features = [
    {
      title: "Beautifully Designed Interface",
      description:
        "Every pixel crafted with intention. Tea's aesthetic interface makes conversations feel like a premium experience, not just another chat app.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      imageSrc: "/features/beautiful-design.png",
      highlights: [
        "Soft, feminine color palette",
        "Thoughtful typography",
        "Smooth animations",
        "Dark mode support",
      ],
    },
    {
      title: "24/7 Availability",
      description:
        "Day or night, Tea is always there. Whether it's 3 AM thoughts or a midday break, your AI companion is ready to chat whenever you are.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      highlights: [
        "No wait times",
        "Instant responses",
        "Works offline (coming soon)",
        "Consistent quality",
      ],
    },
    {
      title: "AI Image Generation",
      description:
        "Bring your imagination to life. Describe what you want to see and watch Tea create stunning, unique images just for you.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      imageSrc: "/features/image-generation.png",
      highlights: [
        "High-quality images",
        "Multiple styles",
        "Save to camera roll",
        "Share with friends",
      ],
    },
    {
      title: "Pin & Search Conversations",
      description:
        "Never lose those meaningful moments. Pin your favorite conversations and search through your history to find exactly what you're looking for.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      ),
      imageSrc: "/features/pin-search.png",
      highlights: [
        "Pin important chats",
        "Full-text search",
        "Organized history",
        "Quick access to favorites",
      ],
    },
  ];

  const upcomingFeatures = [
    {
      title: "Voice Conversations",
      description: "Talk to Tea with your voice for a more natural experience.",
      status: "Coming Soon",
    },
    {
      title: "Personalized Themes",
      description: "Customize Tea's appearance to match your style.",
      status: "In Development",
    },
    {
      title: "Widget Support",
      description: "Quick access to Tea right from your home screen.",
      status: "Planned",
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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--rose-light)] text-[var(--rose-dark)] text-sm font-medium mb-6">
              Features
            </span>
            <h1 className="text-5xl md:text-6xl font-medium mb-6">
              Everything you need,{" "}
              <span className="gradient-text">nothing you don&apos;t</span>
            </h1>
            <p className="text-xl text-[var(--soft-gray)] leading-relaxed">
              Tea is thoughtfully designed with features that enhance your
              experience without overwhelming you. Simple, beautiful, powerful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-20 h-20 rounded-3xl bg-[var(--rose-light)] flex items-center justify-center text-[var(--rose-dark)] mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-[var(--soft-gray)] mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-[var(--charcoal)]"
                      >
                        <svg
                          className="w-5 h-5 text-[var(--leaf)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                {(feature as { imageSrc?: string }).imageSrc && (
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-1" : ""
                    } relative flex items-center justify-center`}
                  >
                    <PhoneMockup
                      imageSrc={(feature as { imageSrc?: string }).imageSrc}
                      alt={`${feature.title} screenshot`}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              What&apos;s <span className="gradient-text">coming next</span>
            </h2>
            <p className="text-xl text-[var(--soft-gray)]">
              We&apos;re always working on new ways to make Tea even better
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--leaf)]/10 text-[var(--leaf-dark)] text-xs font-medium">
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-3 mt-4">{feature.title}</h3>
                <p className="text-[var(--soft-gray)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Ready to try <span className="gradient-text">Tea</span>?
            </h2>
            <p className="text-xl text-[var(--soft-gray)] mb-8">
              Be the first to know when these features launch.
            </p>
            <Link href="/#waitlist" className="btn-primary">
              Get Notified
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
