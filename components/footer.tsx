import Link from "next/link"
import { Rocket, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/values", label: "Our Values" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Data Warehouse" },
    { href: "/services", label: "Data Visualisation" },
    { href: "/services", label: "Data Analytics" },
    { href: "/services", label: "Data Engineering" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Brillytics
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Brilliant Analytics, The Clever Way. We transform raw data into
              actionable insights that drive business growth.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>info@brillytics.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>+44 (0) 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Brillytics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
