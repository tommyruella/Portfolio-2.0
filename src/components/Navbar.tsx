import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  studentName?: string;
  links?: Array<{ label: string; href: string }>;
}

const Navbar = ({
  studentName = "Alex Filmmaker",
  links = [
    { label: "Home", href: "/" },
    { label: "Featured", href: "/featured" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              {studentName}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) =>
                link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {links.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
