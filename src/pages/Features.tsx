import { useState } from "react";
import { motion } from "framer-motion";
import {
  IoSpeedometer,
  IoGitNetwork,
  IoShieldCheckmark,
  IoExtensionPuzzle,
  IoSync,
  IoTerminal,
  IoPlayCircle,
  IoStopCircle,
  IoCheckmarkCircle,
  IoArrowForward,
  IoTimeOutline,
} from "react-icons/io5";

const Features = () => {
  const [, setSelectedDemo] = useState<string | null>(null);

  // Demo 상태를 관리하는 상태 변수들
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const features = [
    {
      id: "real-time",
      icon: IoSpeedometer,
      title: "Real-time Testing",
      description:
        "Test your STOMP messages with instant feedback and monitoring",
      benefits: [
        "Live message monitoring",
        "Real-time connection status",
        "Message timing analytics",
      ],
    },
    {
      id: "connections",
      icon: IoGitNetwork,
      title: "Multiple Connections",
      description: "Manage and test multiple STOMP connections simultaneously",
      benefits: [
        "Multi-connection support",
        "Connection profiles",
        "Connection health monitoring",
      ],
    },
    {
      id: "security",
      icon: IoShieldCheckmark,
      title: "Security Features",
      description:
        "Secure your STOMP connections with advanced security options",
      benefits: [
        "SSL/TLS support",
        "Authentication handling",
        "Header security testing",
      ],
    },
    {
      id: "extensions",
      icon: IoExtensionPuzzle,
      title: "Extensible Platform",
      description: "Extend functionality with plugins and custom scripts",
      benefits: [
        "Custom protocol support",
        "Plugin architecture",
        "Script automation",
      ],
    },
    {
      id: "automation",
      icon: IoSync,
      title: "Test Automation",
      description: "Automate your STOMP testing workflows",
      benefits: ["Automated test suites", "CI/CD integration", "Batch testing"],
    },
    {
      id: "debugging",
      icon: IoTerminal,
      title: "Advanced Debugging",
      description: "Powerful tools for debugging STOMP messages",
      benefits: ["Message inspector", "Network analysis", "Error tracking"],
    },
  ];

  const DemoCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );

  const Badge = ({
    type,
    children,
  }: {
    type: "success" | "warning" | "info";
    children: React.ReactNode;
  }) => {
    const colors = {
      success:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      warning:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    };

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[type]}`}
      >
        {children}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
            Powerful Features for STOMP Testing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to test, debug, and monitor your STOMP messaging
            system in one powerful tool.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl transform transition-transform group-hover:scale-105" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg p-3 inline-block mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <IoCheckmarkCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedDemo(feature.id)}
                  className="mt-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span className="text-sm font-medium">Try Demo</span>
                  <IoArrowForward className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Interactive Demos
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Connection Demo */}
            <DemoCard title="Connection Testing">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge type={isConnected ? "success" : "warning"}>
                      {isConnected ? "Connected" : "Disconnected"}
                    </Badge>
                    {loading && <Badge type="info">Testing...</Badge>}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsConnected(!isConnected)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white transition-colors ${
                        isConnected
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      {isConnected ? (
                        <>
                          <IoStopCircle className="w-5 h-5" />
                          <span>Disconnect</span>
                        </>
                      ) : (
                        <>
                          <IoPlayCircle className="w-5 h-5" />
                          <span>Connect</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <pre className="text-sm font-mono">
                    <code>{`// Connection Configuration
{
  url: "ws://localhost:8080/ws",
  headers: {
    "heart-beat": "0,10000",
    "accept-version": "1.2"
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </DemoCard>

            {/* Message Testing Demo */}
            <DemoCard title="Message Testing">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Badge type="info">
                      <div className="flex items-center space-x-1">
                        <IoTimeOutline className="w-4 h-4" />
                        <span>Response Time: 45ms</span>
                      </div>
                    </Badge>
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 h-48 overflow-auto">
                  {messages.map((msg, index) => (
                    <div key={index} className="text-sm font-mono mb-2">
                      {msg}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setMessages((prev) => [
                          ...prev,
                          "New test message sent...",
                        ]);
                        setLoading(false);
                      }, 1000);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    disabled={loading}
                  >
                    <IoPlayCircle className="w-5 h-5" />
                    <span>Send Test Message</span>
                  </button>
                  <button
                    onClick={() => setMessages([])}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </DemoCard>

            {/* Security Testing Demo */}
            <DemoCard title="Security Testing">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge type="success">SSL Enabled</Badge>
                  <Badge type="info">Auth Required</Badge>
                </div>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                  <pre className="text-sm font-mono">
                    <code>{`// Security Configuration
{
  ssl: true,
  auth: {
    type: "basic",
    credentials: "username:password"
  },
  headers: {
    "Authorization": "Bearer ****"
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </DemoCard>

            {/* Performance Monitoring Demo */}
            <DemoCard title="Performance Monitoring">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Latency", value: "45ms" },
                    { label: "Messages/sec", value: "152" },
                    { label: "Success Rate", value: "99.9%" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-gray-100 dark:bg-gray-900 rounded-lg"
                    >
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                      <div className="text-xl font-semibold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DemoCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
