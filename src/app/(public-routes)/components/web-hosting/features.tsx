"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fastest Loading Speed",
    desc: "Optimized servers ensure your website loads with blazing performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    desc: "Our expert support team is available around the clock to assist you.",
  },
  {
    icon: ShieldCheck,
    title: "99.9% Uptime Guarantee",
    desc: "Stay online and reliable with our world-class uptime guarantee.",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-6 grid md:grid-cols-3 gap-6 container">
      {features.map((feature, i) => (
        <Card key={i} className="text-center shadow-md">
          <CardContent className="pt-6">
            <feature.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
