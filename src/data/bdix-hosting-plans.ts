import { FeatureGroup, Plan } from "@/types/bdix-hosting-plans";

export const plans: Plan[] = [
  {
    id: "starter",
    title: "Starter",
    price: "৳4295",
    period: "/year",
    link: "https://my.hostnin.com/index.php?rp=/store/bdix-hosting/starter",
  },
  {
    id: "pro",
    title: "Pro",
    price: "৳5395",
    period: "/year",
    link: "https://my.hostnin.com/index.php?rp=%2Fstore%2Fbdix-hosting%2Fprofessional&currency",
  },
  {
    id: "ultimate",
    title: "Ultimate",
    price: "৳7195",
    period: "/year",
    link: "https://my.hostnin.com/index.php?rp=%2Fstore%2Fbdix-hosting%2Fultimate&currency",
  },
];

export const groups: FeatureGroup[] = [
  {
    key: "main",
    rows: [
      { key: "disk", label: "Disk Space", values: ["10GB", "15GB", "25GB"] },
      { key: "addon", label: "Addon Domain", values: ["5", "10", "Unlimited"] },
      {
        key: "subdomains",
        label: "Subdomains",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
      {
        key: "bandwidth",
        label: "Bandwidth (Traffic)",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
      {
        key: "locations",
        label: "Multiple Locations",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "websites",
        label: "Websites",
        values: ["unlimited", "unlimited", "Unlimited"],
      },
      {
        key: "nodejs",
        label: "Node JS",
        values: ["Not Allowed", "Allowed", "Allowed"],
      },
      {
        key: "python",
        label: "Python",
        values: ["Not Allowed", "Allowed", "Allowed"],
      },
      {
        key: "ruby",
        label: "Ruby",
        values: ["Not Allowed", "Allowed", "Allowed"],
      },
      {
        key: "cpu",
        label: "CPU Cores",
        values: ["2 vCore", "3 vCore", "4 vCore"],
      },
      {
        key: "concurrent",
        label: "Concurrent Connections",
        values: ["20 Entry Process", "30 Entry Process", "50 Entry Process"],
      },
      {
        key: "io",
        label: "I/O Limit",
        values: ["15 MBPS", "25 MBPS", "50MBPS"],
      },
      {
        key: "ram",
        label: "RAM (Per cPanel account)",
        values: ["2 GB", "3 GB", "4 GB"],
      },
      {
        key: "inode",
        label: "Inode Limit",
        values: ["No Limitation", "No Limitation", "No Limitation"],
      },
      {
        key: "migration",
        label: "Free Website Transfers",
        values: ["Yes", "Yes", "Yes"],
      },
      {
        key: "refund",
        label: "Money-Back Guarantee",
        values: ["45 days", "45 days", "45 days"],
      },
      {
        key: "backup",
        label: "Auto Backup/Restoration",
        values: ["Free", "Free", "Free"],
      },
    ],
  },
  {
    key: "mail",
    title: "Mail Features",
    rows: [
      {
        key: "email_accounts",
        label: "Email Accounts",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
      {
        key: "hourly",
        label: "Hourly Sending Limit (Hourly)",
        values: ["15", "50", "100"],
      },
      {
        key: "autoresponders",
        label: "Email Autoresponders",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
      {
        key: "roundcube",
        label: "Roundcube Client",
        values: ["✔️", "✔️", "✔️"],
      },
      { key: "smtp", label: "SMTP, POP3, IMAP", values: ["✔️", "✔️", "✔️"] },
      { key: "spamass", label: "SpamAssassin", values: ["✔️", "✔️", "✔️"] },
      {
        key: "mailing",
        label: "Mailing Lists",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
      { key: "spf", label: "SPF", values: ["✔️", "✔️", "✔️"] },
      { key: "dkim", label: "Domain Keys", values: ["✔️", "✔️", "✔️"] },
      { key: "csv", label: "CSV Import", values: ["✔️", "✔️", "✔️"] },
      {
        key: "spam_experts",
        label: "Spam Experts",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "email_backup",
        label: "Email Backup & Restore",
        values: ["✔️", "✔️", "✔️"],
      },
    ],
  },
  {
    key: "php",
    title: "PHP Features",
    rows: [
      {
        key: "mysql",
        label: "MySQL Databases",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
      { key: "phpmyadmin", label: "PHP Myadmin", values: ["✔️", "✔️", "✔️"] },
      {
        key: "remote_mysql",
        label: "Remote MySQL",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "pgsql",
        label: "PostgreSQL Databases",
        values: ["✔️", "✔️", "✔️"],
      },
      { key: "phpgadmin", label: "PhpPG Admin", values: ["✔️", "✔️", "✔️"] },
    ],
  },
  {
    key: "server",
    title: "Server Features",
    rows: [
      {
        key: "web_server",
        label: "Web Server Type",
        values: ["LiteSpeed", "LiteSpeed", "LiteSpeed"],
      },
      {
        key: "php_version",
        label: "Php Version",
        values: ["5.6, 7.0-7.4, 8.0", "5.6, 7.0-7.4, 8.0", "5.6, 7.0-7.4, 8.0"],
      },
      { key: "nodejs_server", label: "Node.JS", values: ["❌", "✔️", "✔️"] },
      { key: "python_server", label: "Python", values: ["❌", "✔️", "✔️"] },
      { key: "js", label: "Javascript", values: ["✔️", "✔️", "✔️"] },
      { key: "ssh", label: "SSH Access (Jailed)", values: ["✔️", "✔️", "✔️"] },
    ],
  },
  {
    key: "zone",
    title: "Zone Features",
    rows: [
      {
        key: "backup_manager",
        label: "Backup Manager",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "virus_scanner",
        label: "Virus Scanner",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "hotlink",
        label: "Hotlink Protection",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "redirect",
        label: "Redirect Manager",
        values: ["✔️", "✔️", "✔️"],
      },
      { key: "dns_zone", label: "DNS Zone Editor", values: ["✔️", "✔️", "✔️"] },
      { key: "auto_ssl", label: "Auto SSL", values: ["✔️", "✔️", "✔️"] },
    ],
  },
  {
    key: "support",
    title: "Support Features",
    rows: [
      {
        key: "wa_support",
        label: "24/7 What's App Support",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "chat_support",
        label: "24/7 Chat Support",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "anydesk",
        label: "Anydesk/Teamviewer",
        values: ["✔️", "✔️", "✔️"],
      },
      {
        key: "transfer_assist",
        label: "Transfer Assistance",
        values: ["✔️", "✔️", "✔️"],
      },
    ],
  },
];
