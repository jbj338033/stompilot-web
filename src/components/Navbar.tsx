import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  IoDownload,
  IoLanguage,
  IoMenu,
  IoClose,
  IoMoon,
  IoSunny,
} from "react-icons/io5";
import logo from "../assets/icon.png";
import { useThemeStore } from "../stores/theme";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on location change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const NavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative px-4 py-2 rounded-lg transition-all duration-300
          ${
            isActive
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          }
          hover:bg-gray-100 dark:hover:bg-gray-800
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5
          before:bg-blue-600 dark:before:bg-blue-400 before:scale-x-0 before:origin-right
          before:transition-transform before:duration-300
          ${isActive ? "before:scale-x-100 before:origin-left" : ""}
        `}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <img src={logo} alt="Logo" className="h-10 w-10 rounded-md" />
                <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
              </motion.div>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              >
                Stompilot
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <NavLink to="/docs">{t("nav.docs")}</NavLink>
              <NavLink to="/features">{t("nav.features")}</NavLink>
              <NavLink to="/pricing">{t("nav.pricing")}</NavLink>
            </div>

            <div className="flex items-center space-x-2 ml-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
              </motion.button>

              {/* Language Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "en" ? "ko" : "en")
                }
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change language"
              >
                <IoLanguage size={20} />
              </motion.button>

              {/* Download Button */}
              <Link to="/download">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                    dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700
                    text-white px-6 py-2.5 rounded-lg transition-all duration-300
                    shadow-lg shadow-blue-500/30 dark:shadow-blue-400/30
                    hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-400/40
                    flex items-center space-x-2"
                >
                  <IoDownload className="text-lg" />
                  <span className="font-medium">{t("nav.download")}</span>
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
                hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/docs"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 
                  dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {t("nav.docs")}
              </Link>
              <Link
                to="/features"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 
                  dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {t("nav.features")}
              </Link>
              <Link
                to="/pricing"
                className="block px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 
                  dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {t("nav.pricing")}
              </Link>

              <div className="flex items-center space-x-2 px-4 py-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 
                    dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
                </button>
                <button
                  onClick={() =>
                    i18n.changeLanguage(i18n.language === "en" ? "ko" : "en")
                  }
                  className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 
                    dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <IoLanguage size={20} />
                </button>
              </div>

              <Link to="/download" className="block">
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                    text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <IoDownload />
                  <span>{t("nav.download")}</span>
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
