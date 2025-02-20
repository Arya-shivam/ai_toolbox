// Footer.tsx

import { FC } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { ArrowRight, Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink extends FooterLink {
  icon: FC;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

const quickLinks: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' }
];

const supportLinks: FooterLink[] = [
  { label: 'Help Center', href: '/help' },
  { label: 'Documentation', href: '/docs' },
  { label: 'API Reference', href: '/api' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Status', href: '/status' }
];

const socialLinks: SocialLink[] = [
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', icon: Github },
];

const FooterSection: FC<FooterSectionProps> = ({ title, links }) => (
  <div className="flex flex-col space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link 
            href={link.href} 
            className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <span>{link.label}</span>
            <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterSection: FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
          <Mail className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Stay Updated with AITracker
        </h3>
        <p className="text-gray-600 mb-6">
          Get weekly insights about the latest AI tools and features.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center space-x-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full"
            required
          />
          <Button 
            type="submit"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};


const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <NewsletterSection />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AITracker
              </h3>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your ultimate AI tool discovery and tracking platform. Stay ahead of the curve with real-time updates and intelligent tracking.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <span className="w-5 h-5">
                    <social.icon />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <FooterSection title="Quick Links" links={quickLinks} />
          <FooterSection title="Support" links={supportLinks} />

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2 mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>Email: contact@aitracker.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>
                123 AI Street, Suite 456<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AITracker. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;