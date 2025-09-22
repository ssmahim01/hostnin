/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  SendIcon,
  UserIcon,
  MailIcon,
  TagIcon,
  MessageSquareIcon,
  ServerIcon,
  AlertCircleIcon,
  RefreshCcw,
} from "lucide-react";
import { toast } from "sonner";

const supportTicketSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  category: z.string().min(1, "Please select a category"),
  priority: z.string().min(1, "Please select a priority level"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  serverDetails: z.string().optional(),
  errorMessage: z.string().optional(),
});

type SupportTicketForm = z.infer<typeof supportTicketSchema>;

const categories = [
  { value: "hosting", label: "Web Hosting", icon: ServerIcon },
  { value: "domain", label: "Domain Issues", icon: TagIcon },
  { value: "email", label: "Email Support", icon: MailIcon },
  { value: "billing", label: "Billing & Payment", icon: AlertCircleIcon },
  { value: "technical", label: "Technical Support", icon: ServerIcon },
  { value: "other", label: "Other", icon: MessageSquareIcon },
];

const priorities = [
  {
    value: "low",
    label: "Low",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    value: "medium",
    label: "Medium",
    color:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  },
  {
    value: "high",
    label: "High",
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    value: "urgent",
    label: "Urgent",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  },
];

export function SupportTicketForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  //   const buildGmailComposeLink = (data: SupportTicketForm) => {
  //     const to = encodeURIComponent("support@hostnin.com");
  //     const subject = encodeURIComponent(
  //       `[${data.category.toUpperCase()}] ${data.subject}`
  //     );
  //     const body = encodeURIComponent(
  //       `Name: ${data.name}
  // Email: ${data.email}
  // Priority: ${data.priority}

  // ${data.description}`
  //     );
  //     return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  //   };

  const form = useForm<SupportTicketForm>({
    resolver: zodResolver(supportTicketSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      category: "",
      priority: "",
      description: "",
      serverDetails: "",
      errorMessage: "",
    },
  });

  const watchedFields = form.watch();
  const requiredFields = [
    "name",
    "email",
    "subject",
    "category",
    "priority",
    "description",
  ];
  const completedFields = requiredFields.filter((field) =>
    watchedFields[field as keyof SupportTicketForm]?.toString().trim()
  );
  const progress = (completedFields.length / requiredFields.length) * 100;

  const onSubmit = async (data: SupportTicketForm) => {
    setIsSubmitting(true);

    try {
      // Simulate progress bar
      for (let i = 0; i <= 100; i += 10) {
        setFormProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      // Build a professional email body
      const emailBody = `
Dear Support Team,

I hope you are doing well.  
My name is ${
        data.name
      }, and I am reaching out regarding ${data.subject.toLowerCase()}.

I have been using your service and encountered the following issue/request:

Category: ${data.category}  
Priority: ${data.priority.toUpperCase()}

${data.description}

I would appreciate it if you could assist me with this matter at your earliest convenience.

Best regards,  
${data.name}  
${data.email}
`;

      // Pre-fill Gmail compose with subject & body
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=support@hostnin.com&su=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(emailBody)}`;

      window.open(gmailLink, "_blank");

      form.reset();
      setFormProgress(0);
    } catch (error) {
      toast("Error", {
        description: "Failed to prepare email. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setFormProgress(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <Card className="shadow-md border-0 backdrop-blur-sm">
        <CardHeader className="space-y-4 pb-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-gray-300 dark:to-gray-400 bg-clip-text text-transparent">
                Support Ticket Portal
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Submit your issue below - our technical team will reach out.
              </CardDescription>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="relative w-16 h-16">
                <svg
                  className="w-16 h-16 transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-muted stroke-current"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-primary stroke-current"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeDasharray="100, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Complete</span>
            </motion.div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Form Progress</span>
              <span className="text-primary font-medium">
                {completedFields.length}/{requiredFields.length} fields
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserIcon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-medium">
                          <UserIcon className="h-4 w-4" />
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Input
                              placeholder="Enter your full name"
                              className="h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                              {...field}
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-medium">
                          <MailIcon className="h-4 w-4" />
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              className="h-12 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                              {...field}
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </motion.div>

              {/* Ticket Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        <MessageSquareIcon className="h-4 w-4" />
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Brief description of your issue"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                key={category.value}
                                value={category.value}
                              >
                                <div className="flex items-center gap-2">
                                  <category.icon className="h-4 w-4" />
                                  {category.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Priority Level</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {priorities.map((priority) => (
                              <SelectItem
                                key={priority.value}
                                value={priority.value}
                              >
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="secondary"
                                    className={priority.color}
                                  >
                                    {priority.label}
                                  </Badge>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Detailed Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide a detailed description of your issue, including steps to reproduce if applicable..."
                          className="min-h-[120px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex gap-4 pt-6"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting || progress < 100}
                  className="flex-1 md:flex-none md:px-8 bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer hover:scale-105 transition-transform transform duration-500 h-12 text-base font-medium relative overflow-hidden group"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                        />
                        <span>Preparing...</span>
                        {formProgress > 0 && (
                          <span className="ml-2 text-sm">
                            ({formProgress}%)
                          </span>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <SendIcon className="h-4 w-4" />
                        <span>Submit Ticket</span>
                        {progress < 100 && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {Math.round(progress)}%
                          </Badge>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    form.reset();
                    setFormProgress(0);
                  }}
                  disabled={isSubmitting}
                  className="h-12 px-6 flex gap-2 items-center hover:bg-blue-600 hover:cursor-pointer hover:scale-105 hover:text-white transition-transform transform duration-500"
                >
                  <RefreshCcw /> <span>Reset Form</span>
                </Button>
              </motion.div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
