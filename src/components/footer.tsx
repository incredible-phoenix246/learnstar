import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                <span className="text-brown font-bold text-xl">L</span>
              </div>
              <span className="text-cream font-bold text-xl">LearnStar.AI</span>
            </Link>
            <p className="text-cream/80 mb-6">
              Transforming education through AI-powered solutions for schools.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream/80 hover:text-golden transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-golden transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-golden transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-golden transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  AI Lesson Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Student Games
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Administrative Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-cream/80 hover:text-golden transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-cream/60">
          <p>
            &copy; {new Date().getFullYear()} LearnStar.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
