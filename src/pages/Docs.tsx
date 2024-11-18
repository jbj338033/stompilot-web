import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoBook, IoCode, IoCog, IoRocket } from "react-icons/io5";

const Docs = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    {
      id: "getting-started",
      icon: IoRocket,
      title: t("docs.sections.getting-started.title"),
    },
    {
      id: "features",
      icon: IoBook,
      title: t("docs.sections.features.title"),
    },
    {
      id: "api",
      icon: IoCode,
      title: t("docs.sections.api.title"),
    },
    {
      id: "configuration",
      icon: IoCog,
      title: t("docs.sections.configuration.title"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 flex-shrink-0"
          >
            <nav className="sticky top-24 space-y-1">
              {sections.map(({ id, icon: Icon, title }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      activeSection === id
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  <Icon className="flex-shrink-0 w-6 h-6" />
                  <span className="text-sm font-medium">{title}</span>
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {activeSection === "getting-started" && (
                <div>
                  <h1>{t("docs.sections.getting-started.title")}</h1>
                  <p>{t("docs.sections.getting-started.intro")}</p>

                  <h2>
                    {t("docs.sections.getting-started.installation.title")}
                  </h2>
                  <p>
                    {t(
                      "docs.sections.getting-started.installation.description"
                    )}
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <pre>
                      <code>
                        {t("docs.sections.getting-started.installation.steps")}
                      </code>
                    </pre>
                  </div>
                </div>
              )}

              {activeSection === "features" && (
                <div>
                  <h1>{t("docs.sections.features.title")}</h1>
                  <p>{t("docs.sections.features.intro")}</p>

                  {/* Feature list */}
                </div>
              )}

              {activeSection === "api" && (
                <div>
                  <h1>{t("docs.sections.api.title")}</h1>
                  <p>{t("docs.sections.api.intro")}</p>

                  {/* API documentation */}
                </div>
              )}

              {activeSection === "configuration" && (
                <div>
                  <h1>{t("docs.sections.configuration.title")}</h1>
                  <p>{t("docs.sections.configuration.intro")}</p>

                  {/* Configuration options */}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
