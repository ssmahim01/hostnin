import type { ControlPanel } from "@/types/control-panel";

export const controlPanels: ControlPanel[] = [
  {
    name: "cPanel",
    title: "Easy Website Management with cPanel",
    features: [
      {
        title: "1-Click App Installer (Softaculous)",
        description:
          "Install WordPress, Joomla, Magento, or over 400+ apps in just one click.",
      },
      {
        title: "Powerful File & Database Management",
        description:
          "Manage files with File Manager, and control databases with phpMyAdmin — all from one place.",
      },
      {
        title: "Email & DNS Control",
        description:
          "Create custom email accounts, configure DNS zones, and manage domains with ease.",
      },
    ],
    image: {
      src: "https://res.cloudinary.com/daspo1tk3/image/upload/v1757579460/cpanelmockup_ewgryc.webp",
      alt: "cPanel dashboard screenshot",
    },
  },
  {
    name: "Webuzo",
    title: "Easy Website Management with Webuzo",
    features: [
      {
        title: "1-Click Application Deployment",
        description:
          "Launch WordPress, Laravel, Node.js, or 400+ other apps in seconds with Softaculous.",
      },
      {
        title: "Simple, Modern Interface",
        description:
          "Minimal, clutter-free dashboard designed for both beginners and developers.",
      },
      {
        title: "Developer-Friendly Stack",
        description:
          "Easily manage Apache, Nginx, LiteSpeed, MySQL and PHP versions from the panel.",
      },
    ],
    image: {
      src: "https://res.cloudinary.com/daspo1tk3/image/upload/v1757579460/webuzumockup_jlefvy.webp",
      alt: "Webuzo dashboard screenshot",
    },
  },
  {
    name: "StackCP",
    title: "Easy Website Management with StackCP",
    features: [
      {
        title: "WordPress & CMS Manager",
        description:
          "Install and manage WordPress and other CMS with ease, including staging & cloning.",
      },
      {
        title: "Cloud-Powered File & Database Tools",
        description:
          "Fast file management and MySQL/MariaDB control, optimized for 20i's autoscaling cloud.",
      },
      {
        title: "16+ CDN Worldwide",
        description:
          "Accelerate your website with global reach. Our cloud hosting comes with 16+ built-in CDN networks.",
      },
    ],
    image: {
      src: "https://res.cloudinary.com/daspo1tk3/image/upload/v1757579460/cloudhostingcPanel_zrupge.webp",
      alt: "StackCP dashboard screenshot",
    },
  },
];
