import { JobListing } from "@/types/job-listing";

export const jobs: JobListing[] = [
  {
    id: "tech-support-engineer",
    title: "Technical Support Engineer",
    locationLabel: "Remote",
    schedule: "Saturday - Thursday, 01:00 AM - 12:00 PM BST",
    tags: ["cPanel/WHM", "Customer Service", "Tickets"],
    description:
      "We're looking for someone with advanced cPanel/WHM server administration experience (UI and CLI), with knowledge of CloudLinux, LiteSpeed, Imunify360, and JetBackup. As a Technical Support Engineer, your responsibilities are to assist our clients on tickets and help the Customer Service Reps team when needed.",
    applyEmail: "careers@hostnin.com",
  },
  {
    id: "customer-service-representative",
    title: "Customer Service Representative",
    locationLabel: "Remote",
    schedule: "Saturday - Thursday, 01:00 AM - 12:00 PM BST",
    tags: ["LiveChat", "Tickets", "Customer Support"],
    description:
      "As a Customer Service Representative (L1), your primary responsibilities are to assist our clients in LiveChat and on tickets. Still, we don't have targets in terms of the number of chats or tickets per month. We strongly believe nobody should work more than 1-3 chats at a time if we want to deliver fantastic customer services — this is why we're hiring every few months, to make sure our clients are happy and our team is not overwhelmed.",
    applyEmail: "careers@hostnin.com",
  },
];
