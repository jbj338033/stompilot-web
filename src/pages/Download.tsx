import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoDownload, IoLogoWindows, IoLogoApple } from "react-icons/io5";

const Download = () => {
  const { t } = useTranslation();

  const downloads = [
    {
      platform: "Windows",
      version: "1.0.0",
      size: "68.5 MB",
      icon: IoLogoWindows,
      description: t("download.windows.description"),
      url: "https://github.com/jbj338033/stompilot-app/releases/latest/download/Stompilot.exe",
    },
    {
      platform: "macOS",
      version: "1.0.0",
      size: "72.3 MB",
      icon: IoLogoApple,
      description: t("download.mac.description"),
      url: "/Stompilot.dmg",
    },
    {
      platform: "Linux",
      version: "1.0.0",
      size: "78.4 MB",
      icon: IoLogoWindows,
      description: t("download.linux.description"),
      url: "https://github.com/jbj338033/stompilot-app/releases/latest/download/Stompilot.AppImage",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center"
        >
          {t("download.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12"
        >
          {t("download.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloads.map((item) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <item.icon className="w-8 h-8 text-gray-900 dark:text-white mr-3" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.platform}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    v{item.version} • {item.size}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {item.description}
              </p>

              <a
                href={item.url}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <IoDownload className="text-xl" />
                <span>{t("download.button", { platform: item.platform })}</span>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {t("download.requirements.title")}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>{t("download.requirements.windows")}</li>
            <li>{t("download.requirements.mac")}</li>
            <li>{t("download.requirements.memory")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Download;
