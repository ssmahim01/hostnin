import type { Plan } from "@/types/hosting-plan";

export const plans: Plan[] = [
  {
    id: "cloud-hosting",
    title: "Cloud Hosting",
    price: "৳999 /year",
    image:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757531476/web_icon.d5735016_bz922j.svg",
    description:
      "Perfect for landing pages, e-commerce stores with reliable speed and strong security.",
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    price: "৳3595 /year",

    giftBadge: true,
    description:
      "Best choice for personal websites, portfolios, and small projects with highly flexible resources.",
    image:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757531476/web_icon.d5735016_bz922j.svg",
  },
  {
    id: "turbo-hosting",
    title: "Turbo Hosting",
    price: "৳8999 /year",
    description:
      "Built for high-traffic online stores and demanding applications that need extra power.",

    image:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757531476/turbo-icon.e4f3cc2c_ddw2nv.svg",
  },
];
