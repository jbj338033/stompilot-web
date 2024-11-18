import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  IoDownload,
  IoLogoGithub,
  IoFlash,
  IoSpeedometer,
  IoBulb,
  IoCodeSlash,
  IoShieldCheckmark,
  IoCloudUpload,
  IoChevronDown,
} from "react-icons/io5";
import Feature from "../components/Feature";

const HomePage = () => {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0]),
    springConfig
  );

  const features = [
    {
      icon: IoFlash,
      title: t("home.features.realtime.title"),
      description: t("home.features.realtime.description"),
    },
    {
      icon: IoSpeedometer,
      title: t("home.features.performance.title"),
      description: t("home.features.performance.description"),
    },
    {
      icon: IoBulb,
      title: t("home.features.intuitive.title"),
      description: t("home.features.intuitive.description"),
    },
    {
      icon: IoCodeSlash,
      title: t("home.features.customizable.title"),
      description: t("home.features.customizable.description"),
    },
    {
      icon: IoShieldCheckmark,
      title: t("home.features.secure.title"),
      description: t("home.features.secure.description"),
    },
    {
      icon: IoCloudUpload,
      title: t("home.features.cloud.title"),
      description: t("home.features.cloud.description"),
    },
  ];

  const ScrollIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <motion.p
        className="text-sm text-gray-500 dark:text-gray-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {t("home.scroll")}
      </motion.p>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <IoChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center py-24 px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20" />
          {/* Animated background patterns */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-20 dark:opacity-40" />
            <h1
              className="relative text-6xl sm:text-7xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400
              leading-tight"
            >
              {t("home.hero.title")}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12
              max-w-2xl mx-auto leading-relaxed"
          >
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/download">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                  hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg 
                  shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300
                  flex items-center space-x-3 text-lg font-medium"
              >
                <IoDownload className="text-2xl group-hover:animate-bounce" />
                <span>{t("home.hero.download")}</span>
                {/* Button shine effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-1/4 h-full bg-white/20 skew-x-[25deg]
                    group-hover:-translate-x-32 transition-transform duration-1000"
                  />
                </div>
              </motion.button>
            </Link>

            <a
              href="https://github.com/yourusername/stompilot"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl
                  shadow-lg shadow-gray-800/25 hover:shadow-gray-800/40 transition-all duration-300
                  flex items-center space-x-3 text-lg font-medium relative overflow-hidden"
              >
                <IoLogoGithub className="text-2xl" />
                <span>GitHub</span>
                {/* Button shine effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-1/4 h-full bg-white/20 skew-x-[25deg]
                    group-hover:-translate-x-32 transition-transform duration-1000"
                  />
                </div>
              </motion.button>
            </a>
          </motion.div>

          <ScrollIndicator />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white
            bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 
            dark:from-white dark:to-gray-300"
        >
          {t("home.features.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-950/30 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "10K+", label: t("home.stats.users") },
              { number: "99.9%", label: t("home.stats.uptime") },
              { number: "24/7", label: t("home.stats.support") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl
                  transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative p-8 text-center">
                  <h3
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
                    dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 
              to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            {t("home.testimonials.title")}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
                  dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl transform 
                  group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative p-8">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 
                      flex items-center justify-center text-white text-xl font-bold"
                    >
                      {t(`home.testimonials.testimonial${index + 1}.initial`)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {t(`home.testimonials.testimonial${index + 1}.name`)}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {t(`home.testimonials.testimonial${index + 1}.role`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    {t(`home.testimonials.testimonial${index + 1}.content`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
          dark:from-blue-900/20 dark:to-indigo-900/20"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center px-4"
        >
          <h2
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 
            dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
          >
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("home.cta.description")}
          </p>
          <Link to="/download">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg 
                shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300
                flex items-center space-x-3 text-lg font-medium mx-auto"
            >
              <IoDownload className="text-2xl" />
              <span>{t("home.cta.button")}</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
