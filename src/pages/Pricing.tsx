import { useState } from "react";
import { motion } from "framer-motion";
import {
  IoCheckmarkCircle,
  IoInformationCircle,
  IoRocket,
  IoBusinessOutline,
  IoServerOutline,
  IoArrowForward,
  IoClose,
} from "react-icons/io5";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [showEnterprise, setShowEnterprise] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individual developers",
      icon: IoRocket,
      price: {
        monthly: 0,
        yearly: 0,
      },
      features: [
        "Basic STOMP testing",
        "Single connection",
        "Basic message inspector",
        "Community support",
        "Basic templates",
      ],
      highlighted: false,
      buttonText: "Get Started",
      badge: "",
    },
    {
      name: "Professional",
      description: "Ideal for professional developers",
      icon: IoBusinessOutline,
      price: {
        monthly: 29,
        yearly: 290,
      },
      features: [
        "Everything in Basic",
        "Multiple connections",
        "Advanced message inspector",
        "Message history",
        "Custom templates",
        "Priority email support",
        "Advanced security features",
        "API access",
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
      badge: "Most Popular",
    },
    {
      name: "Team",
      description: "Best for development teams",
      icon: IoServerOutline,
      price: {
        monthly: 99,
        yearly: 990,
      },
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Role-based access",
        "Audit logging",
        "Custom plugins",
        "24/7 priority support",
        "Training sessions",
        "Custom integrations",
        "SLA guarantees",
      ],
      highlighted: false,
      buttonText: "Contact Sales",
      badge: "",
    },
  ];

  const PlanCard = ({ plan }: { plan: (typeof plans)[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${
        plan.highlighted
          ? "bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30"
          : "bg-white dark:bg-gray-800"
      } rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700`}
    >
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
            <plan.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {plan.name}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {plan.description}
        </p>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              $
              {billingPeriod === "monthly"
                ? plan.price.monthly
                : plan.price.yearly}
            </span>
            <span className="ml-2 text-gray-600 dark:text-gray-300">
              /{billingPeriod === "monthly" ? "month" : "year"}
            </span>
          </div>
          {billingPeriod === "yearly" && plan.price.monthly > 0 && (
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              Save ${(plan.price.monthly * 12 - plan.price.yearly).toFixed(2)}{" "}
              yearly
            </p>
          )}
        </div>

        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <IoCheckmarkCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            plan.highlighted
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </motion.div>
  );

  // Enterprise Dialog
  const EnterpriseDialog = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full m-4"
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Enterprise Features
          </h2>
          <button
            onClick={() => setShowEnterprise(false)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Custom deployment options",
              "Dedicated support team",
              "Custom SLA guarantees",
              "Advanced security features",
              "Custom integrations",
              "Unlimited connections",
              "Advanced analytics",
              "Training & onboarding",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <IoCheckmarkCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <IoInformationCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800 dark:text-blue-200">
                Contact our sales team for custom pricing and deployment options
                tailored to your organization's needs.
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setShowEnterprise(false)}
              className="flex-1 py-3 px-4 rounded-lg font-medium text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Choose the perfect plan for your development needs
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg"
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Yearly <span className="text-green-500 text-sm">Save 20%</span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* Enterprise Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-blue-100">
                  Custom solutions for large organizations
                </p>
              </div>
              <button
                onClick={() => setShowEnterprise(true)}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-4 py-2"
              >
                <span>Learn More</span>
                <IoArrowForward className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Custom deployment",
                "24/7 support",
                "Advanced security",
                "Custom SLA",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <IoCheckmarkCircle className="w-5 h-5 text-blue-200" />
                  <span className="text-sm text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, all paid plans come with a 14-day free trial. No credit card required.",
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 30-day money-back guarantee for all paid plans.",
              },
              {
                q: "Do you offer technical support?",
                a: "Yes, all paid plans include technical support. Enterprise plans get 24/7 priority support.",
              },
              {
                q: "Can I use Stompilot offline?",
                a: "Yes, Professional and Team plans include offline functionality with local message storage.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try Stompilot free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300"
        >
          <IoCheckmarkCircle className="w-5 h-5 text-green-500" />
          <span>30-day money-back guarantee</span>
        </motion.div>
      </div>

      {/* Show Enterprise Dialog if open */}
      {showEnterprise && <EnterpriseDialog />}
    </div>
  );
};

export default Pricing;
