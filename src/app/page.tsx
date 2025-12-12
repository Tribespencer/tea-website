"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const APP_STORE_URL = "https://apps.apple.com/us/app/tea-ai-chatbot/id6756167266";

export default function Home() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      title: "Beautifully Designed",
      description:
        "An aesthetic interface that makes every conversation a delightful experience.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      title: "Always Available",
      description:
        "24/7 companionship whenever you need someone to talk to, day or night.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      title: "Image Generation",
      description:
        "Create stunning visuals from your imagination with AI-powered image generation.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
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
      title: "Pin & Search",
      description:
        "Never lose an important conversation. Pin favorites and search your history easily.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div
            className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl animate-gentle-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(233, 199, 199, 0.4) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl animate-gentle-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(123, 160, 91, 0.15) 0%, transparent 70%)",
              animationDelay: "2s",
            }}
          />
          {/* Decorative Lines */}
          <svg
            className="absolute top-40 left-10 opacity-20"
            width="200"
            height="200"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--rose)"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="var(--rose)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-[var(--leaf)]/20 text-[var(--leaf-dark)] text-sm font-medium">
                  Available Now
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight"
              >
                Your AI companion,{" "}
                <span className="gradient-text">beautifully</span> designed
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-[var(--soft-gray)] mb-8 max-w-lg leading-relaxed"
              >
                Tea is more than a chatbot. It&apos;s a warm, thoughtful
                companion that&apos;s always there when you need someone to talk
                to.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Download Now
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
                <Link href="/features" className="btn-secondary">
                  Explore Features
                </Link>
              </motion.div>
            </motion.div>

            {/* App Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* App Preview GIF */}
                <Image
                  src="/app-preview.gif"
                  alt="Tea App Preview"
                  width={320}
                  height={650}
                  className="drop-shadow-2xl"
                  priority
                  unoptimized
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 md:-right-12 top-24 bg-white rounded-2xl p-3 md:p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl">🎨</span>
                    <span className="text-xs md:text-sm font-medium">
                      Image Generated!
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -left-4 md:-left-12 bottom-40 bg-white rounded-2xl p-3 md:p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl">📌</span>
                    <span className="text-xs md:text-sm font-medium">
                      Conversation Pinned
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Designed with <span className="gradient-text">intention</span>
            </h2>
            <p className="text-xl text-[var(--soft-gray)] max-w-2xl mx-auto">
              Every detail crafted to create a meaningful, beautiful experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[var(--rose-light)] flex items-center justify-center text-[var(--rose-dark)] group-hover:bg-[var(--rose)] group-hover:text-[var(--charcoal)] transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-[var(--soft-gray)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/features" className="btn-secondary">
              See All Features
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

      {/* Social Proof / Quote Section */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(135deg, var(--rose-light) 0%, var(--cream) 100%)",
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <svg
              className="w-12 h-12 mx-auto mb-6 text-[var(--rose)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote
              className="text-3xl md:text-4xl font-medium mb-6 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Like having a warm cup of tea and a thoughtful conversation,
              whenever you need it most.
            </blockquote>
            <p className="text-[var(--soft-gray)]">
              The philosophy behind Tea
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-[var(--leaf)]/20 text-[var(--leaf-dark)] text-sm font-medium mb-6">
                Available Now
              </span>
              <h2 className="text-4xl md:text-5xl font-medium mb-4">
                Download <span className="gradient-text">Tea</span> today
              </h2>
              <p className="text-xl text-[var(--soft-gray)]">
                Start your journey with your new AI companion. Available now on the App Store.
              </p>
            </div>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>

            <p className="text-sm text-[var(--soft-gray)] mt-6">
              By using Tea, you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-[var(--charcoal)]">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline hover:text-[var(--charcoal)]">
                Terms of Service
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-[var(--charcoal)]">
              Ready for a better conversation?
            </h2>
            <p className="text-xl text-[var(--charcoal)]/70 mb-8 max-w-xl mx-auto">
              Download Tea today and start chatting with your new AI companion.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--charcoal)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--charcoal)]/90 transition-all hover:-translate-y-1"
            >
              Download Now
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
