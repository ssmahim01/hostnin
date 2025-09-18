import { BdixHostingPlans } from "@/types/bdix-hosting-plans";

export const plans: BdixHostingPlans = {
   plans: [
    { name: "Starter", price: 4295, priceUnit: "/year", orderLink: "https://my.hostnin.com/index.php?rp=/store/bdix-hosting/starter" },
    { name: "Pro", price: 5395, priceUnit: "/year", orderLink: "https://my.hostnin.com/index.php?rp=%2Fstore%2Fbdix-hosting%2Fprofessional&currency" },
    { name: "Ultimate", price: 7195, priceUnit: "/year", orderLink: "https://my.hostnin.com/index.php?rp=%2Fstore%2Fbdix-hosting%2Fultimate&currency" },
  ],
  sections: [
    {
      title: "All Detailed Features",
      features: [
        { label: "Disk Space", values: [ "10GB", "15GB", "25GB"] },
        { label: "Addon Domain", values: [ "5", "10", "Unlimited"] },
        { label: "Subdomains", values: [ "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Bandwidth (Traffic)", values: [ "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Multiple Locations", values: [ "✔️", "✔️", "✔️"] },
        { label: "Websites", values: [ "unlimited", "unlimited", "Unlimited"] },
        { label: "Node JS", values: [ "Not Allowed", "Allowed", "Allowed"] },
        { label: "Python", values: [ "Not Allowed", "Allowed", "Allowed"] },
        { label: "Ruby", values: [ "Not Allowed", "Allowed", "Allowed"] },
        { label: "CPU Cores", values: [ "2 vCore", "3 vCore", "4 vCore"] },
        { label: "Concurrent Connections", values: [ "20 Entry Process", "30 Entry Process", "50 Entry Process"] },
        { label: "I/O Limit", values: [ "15 MBPS", "25 MBPS", "50MBPS"] },
        { label: "RAM (Per cPanel account)", values: [ "2 GB", "3 GB", "4 GB"] },
        { label: "Inode Limit", values: ["No Limitation", "No Limitation", "No Limitation"] },
        { label: "Free Website Transfers", values: ["Yes", "Yes", "Yes"] },
        { label: "Money-Back Guarantee", values: ["45 days", "45 days", "45 days"] },
        { label: "Auto Backup/Restoration", values: ["Free", "Free", "Free"] },
      ]
    },
    {
      title: "Mail Features",
      features: [
        { label: "Email Accounts", values: ["Unlimited", "Unlimited", "Unlimited"] },
        { label: "Hourly Sending Limit (Hourly)", values: ["15", "50", "100"] },
        { label: "Email Autoresponders", values: [ "Unlimited", "Unlimited", "Unlimited"] },
        { label: "Roundcube Client", values: [ "✔️", "✔️", "✔️"] },
        { label: "SMTP, POP3, IMAP", values: [ "✔️", "✔️", "✔️"] },
        { label: "SpamAssassin", values: [ "✔️", "✔️", "✔️"] },
        { label: "Mailing Lists", values: [ "Unlimited", "Unlimited", "Unlimited"] },
        { label: "SPF", values: [ "✔️", "✔️", "✔️"] },
        { label: "Domain Keys", values: [ "✔️", "✔️", "✔️"] },
        { label: "CSV Import", values: ["✔️", "✔️", "✔️"] },
        { label: "Spam Experts", values: ["✔️", "✔️", "✔️"] },
        { label: "Email Backup & Restore", values: ["✔️", "✔️", "✔️"] },
      ]
    },
    {
      title: "PHP Features",
      features: [
        { label: "MySQL Databases", values: ["Unlimited", "Unlimited", "Unlimited"] },
        { label: "PHP Myadmin", values: [ "✔️", "✔️", "✔️"] },
        { label: "Remote MySQL", values: [ "✔️", "✔️", "✔️"] },
        { label: "PostgreSQL Databases", values: [ "✔️", "✔️", "✔️"] },
        { label: "PhpPG Admin", values: ["✔️", "✔️", "✔️"] },
      ]
    },
    {
      title: "Server Features",
      features: [
        { label: "Web Server Type", values: ["LiteSpeed", "LiteSpeed", "LiteSpeed"] },
        { label: "Php Version", values: [ "5.6, 7.0-7.4, 8.0", "5.6, 7.0-7.4, 8.0", "5.6, 7.0-7.4, 8.0"] },
        { label: "Node.JS", values: [ "❌", "✔️", "✔️"] },
        { label: "Python", values: ["❌", "✔️", "✔️"] },
        { label: "Javascript", values: [ "✔️", "✔️", "✔️"] },
        { label: "SSH Access (Jailed)", values: [ "✔️", "✔️", "✔️"] },
      ]
    },
    {
      title: "Zone Features",
      features: [
        { label: "Backup Manager", values: [ "✔️", "✔️", "✔️"] },
        { label: "Virus Scanner", values: ["✔️", "✔️", "✔️"] },
        { label: "Hotlink Protection", values: ["✔️", "✔️", "✔️"] },
        { label: "Redirect Manager", values: ["✔️", "✔️", "✔️"] },
        { label: "DNS Zone Editor", values: [ "✔️", "✔️", "✔️"] },
        { label: "Auto SSL", values: ["✔️", "✔️", "✔️"] },
      ]
    },
    {
      title: "Support Features",
      features: [
        { label: "24/7 What's App Support", values: [ "✔️", "✔️", "✔️"] },
        { label: "24/7 Chat Support", values: [ "✔️", "✔️", "✔️"] },
        { label: "Anydesk/Teamviewer", values: [ "✔️", "✔️", "✔️"] },
        { label: "Transfer Assistance", values: ["✔️", "✔️", "✔️"] },
      ]
    },
  ]
};