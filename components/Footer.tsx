import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const sections = [
    {
      title: "Sections",
      links: [
        { name: "World", href: "#" },
        { name: "Politics", href: "#" },
        { name: "Business", href: "#" },
        { name: "Technology", href: "#" },
        { name: "Science", href: "#" },
        { name: "Health", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Cookies", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="border-t border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/20 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-xl font-bold tracking-tight text-primary-950 dark:text-white">
              ZONA
            </a>
            <p className="mt-4 text-body-sm text-primary-600 dark:text-primary-400 max-w-sm">
              Quality journalism for the digital age. Trusted news and analysis from around the world.
            </p>

            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg text-primary-600 dark:text-primary-400 hover:text-primary-950 dark:hover:text-white hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-primary-950 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-950 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-200 dark:border-primary-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-500 dark:text-primary-500">
              © 2024 ZONA. All rights reserved.
            </p>
            <p className="text-xs text-primary-500 dark:text-primary-500">
              Independent journalism since 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
