import { motion, useAnimation } from "framer-motion";
import { IconType } from "react-icons";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface FeatureProps {
  icon: IconType;
  title: string;
  description: string;
  index?: number;
}

const Feature = ({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.2 + 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="group relative overflow-hidden"
    >
      <div
        className="relative z-10 flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl 
        shadow-lg hover:shadow-xl transition-shadow duration-300
        border border-gray-100 dark:border-gray-700"
      >
        {/* Background Gradient Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
          dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
        />

        {/* Icon Container */}
        <motion.div
          variants={iconVariants}
          className="relative z-10 p-4 bg-gradient-to-br from-blue-100 to-indigo-100 
            dark:from-blue-900/50 dark:to-indigo-900/50 rounded-2xl mb-6
            group-hover:from-blue-200 group-hover:to-indigo-200 
            dark:group-hover:from-blue-800/50 dark:group-hover:to-indigo-800/50
            transition-colors duration-300"
        >
          <Icon
            className="w-8 h-8 text-blue-600 dark:text-blue-400
            group-hover:text-blue-700 dark:group-hover:text-blue-300
            transition-colors duration-300"
          />
        </motion.div>

        {/* Title with animated underline */}
        <div className="relative z-10 mb-4">
          <h3
            className="text-xl font-semibold text-gray-900 dark:text-white 
            group-hover:text-blue-600 dark:group-hover:text-blue-400
            transition-colors duration-300"
          >
            {title}
          </h3>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
            w-0 group-hover:w-full h-0.5 bg-blue-600/30 dark:bg-blue-400/30
            transition-all duration-300"
          />
        </div>

        {/* Description with fade-in effect */}
        <p
          className="relative z-10 text-center text-gray-600 dark:text-gray-300
          group-hover:text-gray-700 dark:group-hover:text-gray-200
          transition-colors duration-300"
        >
          {description}
        </p>

        {/* Hover Effect Circles */}
        <div
          className="absolute top-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full
          -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"
        />
        <div
          className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full
          translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500"
        />
      </div>

      {/* Interactive hover effect lines */}
      <div
        className="absolute inset-0 border-2 border-transparent rounded-2xl
        group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20
        transition-colors duration-300
        scale-105 group-hover:scale-100"
      />
    </motion.div>
  );
};

export default Feature;
