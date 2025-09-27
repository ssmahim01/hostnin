import { VPSPlanData, VPSPlanPackages } from "@/types/vps-plan";

export const vpsPlansData: VPSPlanData = {
  plans: [
    {
      name: "Starter",
      price: 1999,
      priceUnit: "/mo",
      orderLink: "https://my.hostnin.com/cart.php?a=confproduct&i=1",
    },
    {
      name: "Plus",
      price: 2999,
      priceUnit: "/mo",
      orderLink: "https://my.hostnin.com/cart.php?a=confproduct&i=2",
    },
    {
      name: "Pro",
      price: 4999,
      priceUnit: "/mo",
      orderLink: "https://my.hostnin.com/cart.php?a=confproduct&i=3",
    },
    {
      name: "Ultimate",
      price: 7999,
      priceUnit: "/mo",
      orderLink: "https://my.hostnin.com/cart.php?a=confproduct&i=4",
    },
  ],
  sections: [
    {
      features: [
        {
          label: "vCPU",
          values: [
            "2 vCPU Cores",
            "4 vCPU Cores",
            "8 vCPU Cores",
            "16 vCPU Cores",
          ],
        },
        {
          label: "Memory (RAM)",
          values: ["4 GB RAM", "8 GB RAM", "16 GB RAM", "32 GB RAM"],
        },
        {
          label: "NVMe SSD Storage",
          values: ["40 GB NVMe", "80 GB NVMe", "160 GB NVMe", "320 GB NVMe"],
        },
        {
          label: "Provisioning Time",
          values: ["30 minute", "30 minute", "30 minute", "30 minute"],
        },
        {
          label: "Bandwidth",
          values: [
            "20 TB Traffic",
            "20 TB Traffic",
            "20 TB Traffic",
            "20 TB Traffic",
          ],
        },
        {
          label: "Inode Limit",
          values: ["No Limit", "No Limit", "No Limit", "No Limit"],
        },
        { label: "Dedicated IP", values: [true, true, true, true] },
        { label: "Full Root Access", values: [true, true, true, true] },
        { label: "1 Tbps+ Anti-DDoS", values: [true, true, true, true] },
        { label: "Windows & Linux Support", values: [true, true, true, true] },
        { label: "24/7/365 Support", values: [true, true, true, true] },
      ],
    },
  ],
};

export const vpsPlanPackages: VPSPlanPackages[] = [
  {
    name: "Starter",
    price: 1999,
    link: "https://my.hostnin.com/cart.php?a=confproduct&i=1",
    features: [
      {
        icon: "/assets/cpu-icon.svg",
        title: "Shared vCPU",
        value: "2 vCPU Cores",
      },
      { icon: "/assets/ram-icon.svg", title: "Dedicated RAM", value: "4 GB" },
      {
        icon: "/assets/storage-icon.svg",
        title: "NVMe Storage",
        value: "40 GB",
      },
      { icon: "/assets/speed-icon.svg", title: "Port Speed", value: "1GBit" },
    ],
  },
  {
    name: "Starter Plus",
    price: 2999,
    link: "https://my.hostnin.com/cart.php?a=confproduct&i=2",
    features: [
      {
        icon: "/assets/cpu-icon.svg",
        title: "Shared vCPU",
        value: "3 vCPU Cores",
      },
      {
        icon: "/assets/ram-icon.svg",
        title: "Dedicated RAM",
        value: "4 GB RAM",
      },
      {
        icon: "/assets/storage-icon.svg",
        title: "NVMe Storage",
        value: "80 GB NVMe",
      },
      { icon: "/assets/speed-icon.svg", title: "Port Speed", value: "1 GBit" },
    ],
  },
  {
    name: "Pro",
    price: 4999,
    link: "https://my.hostnin.com/cart.php?a=confproduct&i=3",
    features: [
      {
        icon: "/assets/cpu-icon.svg",
        title: "Shared vCPU",
        value: "4 vCPU Cores",
      },
      { icon: "/assets/ram-icon.svg", title: "Dedicated RAM", value: "8 GB" },
      {
        icon: "/assets/storage-icon.svg",
        title: "NVMe Storage",
        value: "160 GB NVMe",
      },
      { icon: "/assets/speed-icon.svg", title: "Port Speed", value: "1 GBit" },
    ],
  },
  {
    name: "Ultimate",
    price: 7999,
    link: "https://my.hostnin.com/cart.php?a=confproduct&i=4",
    features: [
      {
        icon: "/assets/cpu-icon.svg",
        title: "Shared vCPU",
        value: "8 vCPU Cores",
      },
      { icon: "/assets/ram-icon.svg", title: "Dedicated RAM", value: "16 GB" },
      {
        icon: "/assets/storage-icon.svg",
        title: "NVMe Storage",
        value: "240 GB NVMe",
      },
      { icon: "/assets/speed-icon.svg", title: "Port Speed", value: "32 TB" },
    ],
  },
];
