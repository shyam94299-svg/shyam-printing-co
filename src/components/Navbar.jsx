import { useState, useCallback, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  // { label: "Industry", to: "/industries" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  // { label: "Portfolio", to: "/portfolio" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const logo_color_src = "/Logo%20color.png";

const Navbar = () => {
  const [is_open, setIsOpen] = useState(false);
  const [is_visible, setIsVisible] = useState(true);
  const last_scroll_y = useRef(0);
  const location = useLocation();

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleScroll = useCallback(() => {
    const current = window.scrollY;
    if (current < 50) {
      setIsVisible(true);
    } else if (current > last_scroll_y.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    last_scroll_y.current = current;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (is_open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [is_open]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 rounded-2xl bg-white shadow-lg shadow-black/8 transition-all duration-500 lg:top-5 lg:w-[calc(100%-3rem)] overflow-hidden ${
          is_open ? "hidden" : "lg:block"
        } ${is_visible ? "translate-y-0 opacity-100" : "-translate-y-[calc(100%+2rem)] opacity-0"}`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-24">
            <Link to="/" className="group flex items-center">
              <img
                src={logo_color_src}
                alt="Shyam Printing logo"
                className="h-10 w-auto transition-transform duration-300 sm:h-11 lg:h-12"
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative inline-block">
                      {label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
                      )}
                    </span>
                  )}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="ml-4 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40 active:scale-95"
              >
                Get Quote
              </Link>
            </div>

            <button
              onClick={handleToggle}
              className="rounded-xl p-2.5 text-gray-600 transition-all duration-300 hover:bg-gray-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {is_open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={handleClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${
          is_open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <img
              src={logo_color_src}
              alt="Shyam Printing logo"
              className="h-10 w-auto"
            />
            <button
              onClick={handleClose}
              className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-1">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${isActive ? "bg-primary" : "bg-gray-300"}`}
                      />
                      {label}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 px-4 py-5">
            <Link
              to="/contact"
              onClick={handleClose}
              className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl active:scale-95"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
