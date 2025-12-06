import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/features", label: "Features" },
      { href: "/#waitlist", label: "Get Early Access" },
    ],
    company: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/support", label: "Support" },
    ],
    legal: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  };

  return (
    <footer className="bg-white border-t border-[var(--rose-light)]">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Tea Logo"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <span
                className="text-2xl font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Tea
              </span>
            </Link>
            <p className="text-[var(--soft-gray)] text-sm leading-relaxed mb-6">
              Your personal AI companion, beautifully designed for meaningful
              conversations whenever you need them.
            </p>
            {/* App Store Badge Placeholder */}
            <div className="flex items-center gap-3 opacity-50">
              <div className="bg-[var(--charcoal)] text-white px-4 py-2 rounded-lg text-xs">
                Coming Soon to App Store
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-[var(--charcoal)] mb-4 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--soft-gray)] hover:text-[var(--charcoal)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[var(--charcoal)] mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--soft-gray)] hover:text-[var(--charcoal)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-[var(--charcoal)] mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--soft-gray)] hover:text-[var(--charcoal)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--rose-light)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--soft-gray)] text-sm">
              &copy; {currentYear} Tribe Industries Inc. All rights reserved.
            </p>
            <p className="text-[var(--soft-gray)] text-xs">
              Made with care in Utah
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
