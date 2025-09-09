"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  ShoppingCart,
  Server,
  Settings,
  Headphones,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { FAQCategory } from "@/types/faq";

const faqCategories: FAQCategory[] = [
  {
    id: "general",
    name: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What is Web Hosting?",
        answer:
          "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed in the Internet.",
      },
      {
        question: "What is shared web hosting?",
        answer:
          "Shared web hosting is a type of web hosting where multiple websites are hosted on a single server. Resources such as CPU, memory, and disk space are shared among all the websites on that server, making it a cost-effective solution for small to medium-sized websites.",
      },
      {
        question: "What is a domain name?",
        answer:
          "A domain name is the address of your website that people type in the browser URL bar to visit your website. It's your unique identity on the internet, like www.example.com.",
      },
      {
        question: "How can I trust you?",
        answer:
          "We have been providing reliable hosting services for over 10 years with 99.9% uptime guarantee, 24/7 customer support, and thousands of satisfied customers. We also offer a 30-day money-back guarantee.",
      },
      {
        question: "What's hostnin history?",
        answer:
          "Hostnin was founded in 2013 with a mission to provide affordable, reliable web hosting solutions. We started as a small team and have grown to serve thousands of customers worldwide while maintaining our commitment to quality service and customer satisfaction.",
      },
    ],
  },
  {
    id: "billing",
    name: "Ordering & Billing",
    icon: ShoppingCart,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and various local payment methods depending on your region.",
      },
      {
        question: "Can I upgrade my hosting plan?",
        answer:
          "Yes, you can upgrade your hosting plan at any time. The upgrade is instant and you'll only pay the prorated difference for the remaining billing period.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 30-day money-back guarantee for all new hosting accounts. If you're not satisfied within the first 30 days, we'll refund your hosting fees.",
      },
    ],
  },
  {
    id: "server",
    name: "Hosting Server",
    icon: Server,
    questions: [
      {
        question: "What is your uptime guarantee?",
        answer:
          "We guarantee 99.9% uptime for all our hosting services. Our servers are monitored 24/7 and we have redundant systems in place to ensure maximum availability.",
      },
      {
        question: "Where are your servers located?",
        answer:
          "Our servers are located in multiple data centers across the US, Europe, and Asia to ensure fast loading times for your visitors worldwide.",
      },
      {
        question: "Do you provide SSL certificates?",
        answer:
          "Yes, we provide free SSL certificates with all our hosting plans. SSL certificates encrypt data between your website and visitors, ensuring secure connections.",
      },
    ],
  },
  {
    id: "control",
    name: "Control Panel",
    icon: Settings,
    questions: [
      {
        question: "What control panel do you use?",
        answer:
          "We use cPanel, the industry-standard control panel that makes it easy to manage your hosting account, domains, emails, databases, and more.",
      },
      {
        question: "Can I install WordPress easily?",
        answer:
          "Yes, we offer one-click WordPress installation through Softaculous in your cPanel. You can have WordPress up and running in just a few minutes.",
      },
      {
        question: "How do I access my control panel?",
        answer:
          "You can access your control panel by visiting yourdomain.com/cpanel or through the client area in your hosting account dashboard.",
      },
    ],
  },
  {
    id: "support",
    name: "Support System",
    icon: Headphones,
    questions: [
      {
        question: "How can I contact support?",
        answer:
          "You can contact our support team 24/7 through live chat, email tickets, or phone. We also have an extensive knowledge base for self-help.",
      },
      {
        question: "What is your response time?",
        answer:
          "Our average response time is under 15 minutes for live chat and under 2 hours for email tickets. Critical issues are prioritized and handled immediately.",
      },
      {
        question: "Do you provide migration assistance?",
        answer:
          "Yes, we offer free website migration for new customers. Our technical team will handle the entire migration process to ensure a smooth transition.",
      },
    ],
  },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(
    "What is Web Hosting?"
  );

  const currentCategory = faqCategories.find(
    (cat) => cat.id === activeCategory
  );

  const toggleQuestion = (question: string) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            FAQs: Your questions, our answers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here you will find answers to the most frequently asked questions.
            If you still need assistance, feel free to contact our live support
            team.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {faqCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={
                        activeCategory === category.id ? "default" : "ghost"
                      }
                      className={`w-full justify-start h-auto p-4 ${
                        activeCategory === category.id
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="text-left">{category.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {currentCategory?.questions.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
                      >
                        <button
                          className="w-full flex items-center justify-between text-left py-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={() => toggleQuestion(faq.question)}
                        >
                          <span className="font-medium text-gray-900 dark:text-white pr-4">
                            {faq.question}
                          </span>
                          {expandedQuestion === faq.question ? (
                            <Minus className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>

                        {expandedQuestion === faq.question && (
                          <div className="pb-3 pr-8">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
