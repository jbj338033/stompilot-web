import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  IoRocket,
  IoBook,
  IoCode,
  IoCog,
  IoCheckmarkCircle,
  IoWarning,
  IoCopy,
  IoChevronForward,
  IoPlay,
  IoStop,
} from "react-icons/io5";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const sections = [
    {
      id: "getting-started",
      icon: IoRocket,
      title: "Getting Started",
      badge: "Start Here",
    },
    {
      id: "features",
      icon: IoBook,
      title: "Features & Usage",
      badge: "Essential",
    },
    {
      id: "api",
      icon: IoCode,
      title: "API Reference",
      badge: "Technical",
    },
    {
      id: "configuration",
      icon: IoCog,
      title: "Configuration",
      badge: "Advanced",
    },
  ];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const CodeBlock = ({ code, index }: { code: string; index: number }) => (
    <div className="relative group">
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm">{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, index)}
        className="absolute top-2 right-2 p-2 rounded-md 
          bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-100
          transition-opacity duration-200"
      >
        {copiedIndex === index ? (
          <IoCheckmarkCircle className="w-5 h-5 text-green-500" />
        ) : (
          <IoCopy className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
    </div>
  );

  const TipBox = ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning";
  }) => (
    <div
      className={`my-4 p-4 rounded-lg border ${
        type === "warning"
          ? "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-700"
          : "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-700"
      }`}
    >
      <div className="flex items-start space-x-3">
        {type === "warning" ? (
          <IoWarning className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        ) : (
          <IoCheckmarkCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
        )}
        <div
          className={`text-sm ${
            type === "warning"
              ? "text-yellow-700 dark:text-yellow-200"
              : "text-blue-700 dark:text-blue-200"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-72 flex-shrink-0"
          >
            <nav className="sticky top-24 space-y-2">
              {sections.map(({ id, icon: Icon, title, badge }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-lg
                    transition-all duration-200 group
                    ${
                      activeSection === id
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="flex-shrink-0 w-6 h-6" />
                    <span className="text-sm font-medium">{title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        activeSection === id
                          ? "bg-blue-200 dark:bg-blue-800"
                          : "bg-gray-200 dark:bg-gray-700"
                      }`}
                    >
                      {badge}
                    </span>
                    <IoChevronForward
                      className={`w-4 h-4 transform transition-transform ${
                        activeSection === id
                          ? "rotate-90"
                          : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
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
                <div className="space-y-8">
                  <header className="mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      Getting Started with Stompilot
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
                      Your ultimate tool for testing STOMP messaging in
                      real-time.
                    </p>
                  </header>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">
                      Installation
                    </h2>
                    <p className="mb-4">
                      Install Stompilot using your preferred package manager:
                    </p>
                    <CodeBlock code="npm install stompilot" index={0} />
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
                    <p className="mb-4">
                      Connect to your STOMP server with just a few lines of
                      code:
                    </p>
                    <CodeBlock
                      code={`import Stompilot from 'stompilot';

const client = new Stompilot({
  url: 'ws://localhost:8080/ws',
  destination: '/topic/messages'
});

client.connect();`}
                      index={1}
                    />
                  </section>

                  <TipBox>
                    For the best experience, make sure your WebSocket server
                    supports STOMP protocol version 1.2 or higher.
                  </TipBox>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">
                      Basic Example
                    </h2>
                    <p className="mb-4">
                      Here's a complete example of sending and receiving
                      messages:
                    </p>
                    <CodeBlock
                      code={`// Initialize the client
const client = new Stompilot({
  url: 'ws://localhost:8080/ws',
  destination: '/topic/messages'
});

// Subscribe to messages
client.subscribe('/topic/messages', message => {
  console.log('Received:', message);
});

// Send a test message
client.send('/topic/messages', {
  body: 'Hello STOMP!',
  headers: {
    'content-type': 'text/plain'
  }
});`}
                      index={2}
                    />
                  </section>

                  <TipBox type="warning">
                    Remember to handle connection errors and implement
                    reconnection logic in production environments.
                  </TipBox>
                </div>
              )}

              {activeSection === "features" && (
                <div className="space-y-8">
                  <header className="mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                      Features & Usage
                    </h1>
                  </header>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Real-time Testing",
                          description:
                            "Test STOMP messages in real-time with instant feedback",
                        },
                        {
                          title: "Message Inspector",
                          description:
                            "Detailed message inspection with headers and payload visualization",
                        },
                        {
                          title: "Connection Manager",
                          description:
                            "Manage multiple STOMP connections simultaneously",
                        },
                        {
                          title: "Message Templates",
                          description: "Save and reuse common message patterns",
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          <h3 className="font-semibold text-lg mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">
                      Testing Messages
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                          <IoPlay className="w-5 h-5" />
                          <span>Start Test</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                          <IoStop className="w-5 h-5" />
                          <span>Stop Test</span>
                        </button>
                      </div>
                      <CodeBlock
                        code={`// Example test case
const test = new StompilotTest({
  name: 'Message Round Trip',
  destination: '/topic/test',
  payload: { message: 'test' },
  timeout: 5000
});

test.run();`}
                        index={3}
                      />
                    </div>
                  </section>
                </div>
              )}

              {/* API Reference and Configuration sections would follow a similar pattern */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
