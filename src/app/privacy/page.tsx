"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
              Legal
            </span>
            <h1 className="text-5xl md:text-6xl font-medium mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-[var(--soft-gray)] leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect
              your information.
            </p>
            <p className="text-sm text-[var(--soft-gray)] mt-4">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="legal-content"
          >
            <h2>1. Introduction</h2>
            <p>
              Tribe Industries Inc (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
              Tea - AI Chatbot mobile application (the &quot;App&quot;). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information
              when you use our App.
            </p>
            <p>
              Please read this Privacy Policy carefully. By using the App, you agree
              to the collection and use of information in accordance with this policy.
              If you do not agree with the terms of this Privacy Policy, please do not
              access the App.
            </p>

            <h2>2. Information We Collect</h2>

            <h3>2.1 Personal Information</h3>
            <p>We may collect personally identifiable information that you voluntarily provide, including:</p>
            <ul>
              <li>Email address (for account creation and waitlist)</li>
              <li>Name (if provided)</li>
              <li>Account credentials</li>
              <li>Payment information (processed securely through Apple)</li>
            </ul>

            <h3>2.2 Conversation Data</h3>
            <p>
              When you use Tea, we collect the content of your conversations with the AI
              to provide and improve our services. This includes:
            </p>
            <ul>
              <li>Text messages you send</li>
              <li>AI responses</li>
              <li>Images generated through the App</li>
              <li>Pinned and saved conversations</li>
            </ul>

            <h3>2.3 Usage Data</h3>
            <p>We automatically collect certain information when you use the App:</p>
            <ul>
              <li>Device type and operating system</li>
              <li>App usage patterns and features accessed</li>
              <li>Crash reports and performance data</li>
              <li>IP address (anonymized)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>To provide and maintain the App</li>
              <li>To process your subscription and transactions</li>
              <li>To personalize your experience</li>
              <li>To improve our AI and services</li>
              <li>To communicate with you about updates and support</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>4. Data Storage and Security</h2>
            <p>
              We implement appropriate technical and organizational security measures
              to protect your personal information. However, no method of transmission
              over the Internet or electronic storage is 100% secure.
            </p>
            <p>
              Your conversation data is encrypted in transit and at rest. We retain
              your data only as long as necessary to provide our services or as required
              by law.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>We may use third-party services that collect information:</p>
            <ul>
              <li><strong>Apple App Store:</strong> For app distribution and payments</li>
              <li><strong>Analytics providers:</strong> To understand app usage</li>
              <li><strong>AI service providers:</strong> To power our chat functionality</li>
            </ul>
            <p>
              These third parties have their own privacy policies governing the use
              of your information.
            </p>

            <h2>6. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of certain data processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us at support@[PLACEHOLDER].com.
            </p>

            <h2>7. Children&apos;s Privacy</h2>
            <p>
              The App is not intended for users under the age of 13. We do not knowingly
              collect personal information from children under 13. If we become aware
              that we have collected such information, we will take steps to delete it.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other
              than your country of residence. These countries may have different data
              protection laws. By using the App, you consent to such transfers.
            </p>

            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you
              of any changes by posting the new Privacy Policy on this page and updating
              the &quot;Last updated&quot; date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Email: support@[PLACEHOLDER].com</li>
              <li>Company: Tribe Industries Inc</li>
              <li>Location: Utah, USA</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
