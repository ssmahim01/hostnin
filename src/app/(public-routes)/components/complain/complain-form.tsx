"use client";

import type React from "react";

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
  AlertTriangleIcon,
  MessageSquareIcon,
  UserCheckIcon,
  RefreshCcw,
} from "lucide-react";

const complainSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  complainDetails: z
    .string()
    .min(50, "Complaint details must be at least 50 characters"),
  supportExecutive: z.string().min(1, "Please select a support executive"),
  complainType: z.string().min(1, "Please select a complaint type"),
  priority: z.string().min(1, "Please select a priority level"),
});

type ComplainForm = z.infer<typeof complainSchema>;

const supportExecutives = [
  { value: "imran-mahmud", label: "Imran Mahmud - Hostnin Support" },
  { value: "asad-ujjaman", label: "Asad Ujjaman - Hostnin Support" },
  { value: "hasan-tareq", label: "Hasan Tareq - Hostnin Support" },
  { value: "mujahidul-islam", label: "Mujahidul Islam - Hostnin Support" },
  { value: "general", label: "General Support Team" },
];

const complainTypes = [
  { value: "service-quality", label: "Service Quality Issues" },
  { value: "billing-dispute", label: "Billing Disputes" },
  { value: "technical-problems", label: "Technical Problems" },
  { value: "staff-behavior", label: "Staff Behavior" },
  { value: "policy-concerns", label: "Policy Concerns" },
  { value: "other", label: "Other Issues" },
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

function RequiredLabel({
  name,
  label,
  requiredFields,
  icon,
}: {
  name: keyof ComplainForm;
  label: string;
  requiredFields: string[];
  icon?: React.ReactNode;
}) {
  const isRequired = requiredFields.includes(name);
  return (
    <span className="flex items-center gap-1 text-sm font-medium">
      {icon}
      {label}
      {isRequired && <span className="text-red-500">*</span>}
    </span>
  );
}

export default function ComplainForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  const form = useForm<ComplainForm>({
    resolver: zodResolver(complainSchema),
    defaultValues: {
      name: "",
      email: "",
      complainDetails: "",
      supportExecutive: "",
      complainType: "",
      priority: "",
    },
  });

  const watchedFields = form.watch();
  const requiredFields = [
    "name",
    "email",
    "complainDetails",
    "supportExecutive",
    "complainType",
    "priority",
  ];
  const completedFields = requiredFields.filter((field) =>
    watchedFields[field as keyof ComplainForm]?.toString().trim()
  );
  const progress = (completedFields.length / requiredFields.length) * 100;

  const onSubmit = async (data: ComplainForm) => {
    setIsSubmitting(true);
    try {
      for (let i = 0; i <= 100; i += 10) {
        setFormProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      const emailBody = `
Dear Complaint Resolution Team,

I am writing to formally file a complaint regarding your services.

Complainant Information:
• Name: ${data.name}
• Email: ${data.email}
• Assigned Executive: ${data.supportExecutive}

Complaint Details:
• Type: ${data.complainType}
• Priority: ${data.priority.toUpperCase()}

Detailed Complaint:
${data.complainDetails}

I request your immediate attention to this matter and expect a fair resolution within the stipulated timeframe.

Thank you for your attention to this complaint.

Best regards,
${data.name}
${data.email}
`;

      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=complain@hostnin.com&su=${encodeURIComponent(
        `${data.complainType} - ${data.name}`
      )}&body=${encodeURIComponent(emailBody)}`;

      window.open(gmailLink, "_blank");

      form.reset();
      setFormProgress(0);
    } catch (error) {
      console.error("Error preparing complaint email:", error);
    } finally {
      setIsSubmitting(false);
      setFormProgress(0);
    }
  };

  return (
    <div
     
    >
      <Card className="shadow-md border-0 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
        <CardHeader className="space-y-4 pb-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                Complaint Form
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Please provide detailed information about your complaint for
                proper investigation.
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
                    className="text-blue-500 stroke-current"
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
                  <span className="text-xs font-bold text-blue-500">
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
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <UserIcon className="h-4 w-4 text-blue-500" />
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
                        <FormLabel>
                          <RequiredLabel
                            name="name"
                            label="Full Name"
                            requiredFields={requiredFields}
                            icon={<UserIcon className="h-4 w-4" />}
                          />
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Input
                              placeholder="Enter your full name"
                              className="h-12 transition-all duration-300 focus:ring-2 focus:ring-red-500/20"
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
                        <FormLabel>
                          <RequiredLabel
                            name="email"
                            label="Email Address"
                            requiredFields={requiredFields}
                            icon={<MailIcon className="h-4 w-4" />}
                          />
                        </FormLabel>
                        <FormControl>
                          <motion.div
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              className="h-12 transition-all duration-300 focus:ring-2 focus:ring-red-500/20"
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

              {/* Complaint Details */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="complainType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <RequiredLabel
                            name="complainType"
                            label="Complaint Type"
                            requiredFields={requiredFields}
                            icon={<AlertTriangleIcon className="h-4 w-4" />}
                          />
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select complaint type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {complainTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
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
                        <FormLabel>
                          <RequiredLabel
                            name="priority"
                            label="Priority Level"
                            requiredFields={requiredFields}
                            icon={<AlertTriangleIcon className="h-4 w-4" />}
                          />
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12">
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

                <FormField
                  control={form.control}
                  name="supportExecutive"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <RequiredLabel
                          name="supportExecutive"
                          label="Support Executive"
                          requiredFields={requiredFields}
                          icon={<UserCheckIcon className="h-4 w-4" />}
                        />
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select support executive" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {supportExecutives.map((executive) => (
                            <SelectItem
                              key={executive.value}
                              value={executive.value}
                            >
                              {executive.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              {/* Complaint Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FormField
                  control={form.control}
                  name="complainDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <RequiredLabel
                          name="complainDetails"
                          label="Detailed Complaint"
                          requiredFields={requiredFields}
                          icon={<MessageSquareIcon className="h-4 w-4" />}
                        />
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide a detailed description of your complaint, including dates, times, and any relevant information that will help us investigate your concern..."
                          className="min-h-[150px] resize-none focus:ring-2 focus:ring-red-500/20"
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
                className="flex gap-4 flex-wrap md:justify-center flex-col md:flex-row w-full items-center pt-2"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting || progress < 100}
                  className="flex-1 md:flex-none md:px-8 bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer hover:scale-105 transition-transform transform duration-500 h-12 text-base font-medium relative overflow-hidden group md:w-auto w-full"
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
                        <span>Submit Complaint</span>
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
                  className="h-12 px-6 flex gap-2 items-center hover:bg-blue-600 hover:cursor-pointer hover:scale-105 hover:text-white transition-transform md:w-auto w-full transform duration-500"
                >
                  <RefreshCcw className="h-4 w-4" />
                  <span>Reset Form</span>
                </Button>
              </motion.div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
