"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      title: "Beauty in Simplicity",
      description:
        "We believe technology should feel natural and beautiful. Every interaction with Tea is designed to be a moment of calm in a busy world.",
      icon: "✨",
    },
    {
      title: "Thoughtful Design",
      description:
        "From colors to animations, every detail is intentional. We obsess over the small things because they make the biggest difference.",
      icon: "🎨",
    },
    {
      title: "Privacy First",
      description:
        "Your conversations are yours. We're committed to protecting your privacy and giving you control over your data.",
      icon: "🔒",
    },
    {
      title: "Always Improving",
      description:
        "Tea gets better every day. We listen to our community and continuously refine the experience based on your feedback.",
      icon: "🌱",
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-medium mb-6">
              A conversation worth{" "}
              <span className="gradient-text">having</span>
            </h1>
            <p className="text-xl text-[var(--soft-gray)] leading-relaxed">
              Tea was born from a simple idea: what if talking to AI felt as
              comfortable and beautiful as sharing a cup of tea with a friend?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[var(--soft-gray)] text-lg leading-relaxed">
                <p>
                  In a world of cold, utilitarian AI interfaces, we saw an
                  opportunity to create something different. Something that
                  didn&apos;t just function well, but felt good to use.
                </p>
                <p>
                  Tea is built by Tribe Industries Inc, a team passionate about
                  creating technology that respects and delights its users. Based
                  in Utah, we&apos;re a small but dedicated team committed to
                  reimagining what AI companionship can be.
                </p>
                <p>
                  We named it Tea because, like a warm cup of tea, it&apos;s
                  meant to be a moment of comfort and connection. A space where
                  you can think out loud, explore ideas, or simply have someone
                  to talk to.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--rose-light)] to-[var(--cream)] flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/logo.png"
                    alt="Tea Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[var(--leaf)]/10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[var(--rose)]/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              What we <span className="gradient-text">believe</span>
            </h2>
            <p className="text-xl text-[var(--soft-gray)]">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-[var(--soft-gray)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Built by <span className="gradient-text">Tribe Industries</span>
            </h2>
            <p className="text-xl text-[var(--soft-gray)] mb-8 leading-relaxed">
              We&apos;re a passionate team based in Utah, dedicated to creating
              technology that makes people&apos;s lives a little bit better,
              a little bit more beautiful.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/features" className="btn-secondary">
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--rose) 0%, var(--rose-dark) 100%)",
          }}
        />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-[var(--charcoal)]">
              Join us on this journey
            </h2>
            <p className="text-xl text-[var(--charcoal)]/70 mb-8 max-w-xl mx-auto">
              Be part of shaping the future of AI companionship.
            </p>
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 bg-[var(--charcoal)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--charcoal)]/90 transition-all hover:-translate-y-1"
            >
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
