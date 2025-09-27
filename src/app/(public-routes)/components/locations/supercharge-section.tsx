"use client";

import type React from "react";
import {
  TrendingUp,
  Server,
  Search,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

interface SuperchargeFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  hoverGradient: string;
  stats: string;
}

export default function SuperchargeSection() {
  const features: SuperchargeFeature[] = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "More sales",
      description:
        "Faster websites convert more customers. Our CDN provides the speed boost you need to increase your sales.",
      gradient: "from-purple-300 to-cyan-300",
      hoverGradient: "from-purple-400 to-cyan-400",
      stats: "+47% conversion rate",
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "No traffic limits",
      description:
        "HostninCDN is free for all our customers. We don't throttle your bandwidth and there are no usage limits.",
      gradient: "from-blue-300 to-cyan-300",
      hoverGradient: "from-blue-400 to-cyan-400",
      stats: "Unlimited bandwidth",
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "Higher search rankings",
      description:
        "Website speed is a key factor for Google and their core web vitals. Our CDN will help boost your rankings.",
      gradient: "from-indigo-300 to-purple-300",
      hoverGradient: "from-indigo-400 to-purple-400",
      stats: "+23% SEO improvement",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Enhanced security",
      description:
        "Enterprise level security technology and advanced configuration management to keep your websites secure.",
      gradient: "from-blue-300 to-cyan-300",
      hoverGradient: "from-blue-400 to-cyan-400",
      stats: "99.9% threat protection",
    },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-8 pt-7 pb-14 max-w-7xl relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Multiple floating gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-float-1 dark:block hidden" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-float-2 dark:block hidden" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-500/6 to-cyan-500/6 rounded-full blur-3xl animate-pulse-slow dark:block hidden" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-500/20 mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Supercharge Performance
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              Supercharge your websites
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent animate-gradient-flow">
              with our unlimited CDN
            </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-blue-500">
              40% of consumers
            </span>{" "}
            will leave a website if it takes more than 3 seconds to load.
            <span className="font-semibold text-cyan-500"> Hostnin</span> is
            proven to boost website load times wherever your traffic comes from.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Enhanced glass card with better effects */}
              <div className="relative h-full bg-white dark:bg-slate-900 backdrop-blur-2xl rounded-lg p-6 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 group-hover:bg-white/70 dark:group-hover:bg-gray-900/70">
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-700 animate-pulse-gentle`}
                />

                {/* Enhanced icon with better animations */}
                <div className="relative mb-5">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-accent text-blue-600 dark:text-white shadow-md group-hover:shadow-xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 relative overflow-hidden`}
                  >
                    {feature.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Floating sparkles effect */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="h-4 w-4 text-blue-400 animate-spin-slow" />
                  </div>
                </div>

                {/* Enhanced content */}
                <div className="relative space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-gray-100 dark:group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-500">
                      {feature.title}
                    </h3>

                    {/* Stats badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:scale-105 transition-transform duration-300">
                      <Zap className="h-3 w-3" />
                      {feature.stats}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

               
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-5px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(15px) translateX(-10px);
          }
          66% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-gentle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.1;
          }
        }

        @keyframes gradient-flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float-1 {
          animation: float-1 12s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 1s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 4s ease infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .shadow-4xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
}
