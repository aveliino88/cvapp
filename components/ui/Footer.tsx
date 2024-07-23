import Link from 'next/link';
import { memo } from 'react';

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} My App. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="/about" scroll={false} className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/contact" scroll={false} className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link href="/quotes" scroll={false} className="hover:text-gray-300 transition-colors">
              Inspiration
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
});

export default Footer;