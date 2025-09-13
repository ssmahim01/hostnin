/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "@/lib/auth-schemas";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

interface AuthModalProps {
  open: boolean;
  mode: "login" | "register";
  onOpenChange: (open: boolean) => void;
  onModeChange: (mode: "login" | "register") => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  open,
  mode,
  onOpenChange,
  onModeChange,
}) => {
  const form = useForm({
    resolver: zodResolver(mode === "login" ? loginSchema : registerSchema),
    defaultValues:
      mode === "login"
        ? { email: "", password: "" }
        : {
            firstname: "",
            lastname: "",
            email: "",
            address1: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            phonenumber: "",
            password2: "",
          },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState({
    login: false,
    register: false,
  });

  useEffect(() => {
    form.reset();
    setShowPassword({ login: false, register: false });
  }, [form, mode]);

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      const endpoint =
        mode === "login" ? "/api/whmcs-login" : "/api/whmcs-register";

      const payload =
        mode === "login"
          ? {
              username: values.email,
              password: values.password,
            }
          : {
              firstname: values.firstname,
              lastname: values.lastname,
              username: values.email,
              address1: values.address1,
              city: values.city,
              state: values.state,
              postcode: values.postcode,
              country: values.country,
              phonenumber: values.phonenumber,
              password2: values.password2,
            };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (data.result === "success") {
        if (mode === "register") {
          onModeChange("login");
          form.reset({ email: payload.username, password: "" });
        } else if (mode === "login") {
          router.push("https://my.hostnin.com");
        }
        onOpenChange(false);
      } else {
        form.setError("root", {
          message: data.message || "Something went wrong",
        });
      }
    } catch (err) {
      console.error(err);
      form.setError("root", { message: "Network or server error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-11/12 mx-auto md:w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {mode === "login" ? "Welcome Back!" : "Create Your Account"}
          </DialogTitle>
          <DialogDescription className="text-center">
            {mode === "login"
              ? "Login to manage your services securely."
              : "Fill in the details below to register a new account."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {mode === "login" && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Password"
                            type={showPassword.login ? "text" : "password"}
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800"
                            onClick={() =>
                              setShowPassword((prev) => ({
                                ...prev,
                                login: !prev.login,
                              }))
                            }
                          >
                            {showPassword.login ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {mode === "register" && (
              <>
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-2">
                  {["city", "state", "postcode"].map((name) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name as any}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder={
                                name.charAt(0).toUpperCase() + name.slice(1)
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        >
                          <option value="">Select Country</option>
                          {[
                            "BD",
                            "USA",
                            "UK",
                            "AF",
                            "AL",
                            "DZ",
                            "AR",
                            "AM",
                            "AU",
                            "AT",
                            "AZ",
                            "BH",
                            "BE",
                            "BR",
                            "BG",
                            "CA",
                            "CN",
                            "CO",
                            "CR",
                            "HR",
                            "CY",
                            "CZ",
                            "DK",
                            "EG",
                            "FI",
                            "FR",
                            "DE",
                            "GR",
                            "HK",
                            "HU",
                            "IS",
                            "IN",
                            "ID",
                            "IE",
                            "IL",
                            "IT",
                            "JP",
                            "JO",
                            "KZ",
                            "KE",
                            "KW",
                            "LV",
                            "LB",
                            "LT",
                            "LU",
                            "MY",
                            "MX",
                            "MA",
                            "NL",
                            "NZ",
                            "NG",
                            "NO",
                            "PK",
                            "PL",
                            "PT",
                            "QA",
                            "RO",
                            "RU",
                            "SA",
                            "SG",
                            "SK",
                            "SI",
                            "ZA",
                            "KR",
                            "ES",
                            "SE",
                            "CH",
                            "TW",
                            "TH",
                            "TR",
                            "UA",
                            "AE",
                            "GB",
                          ].map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phonenumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Password"
                            type={showPassword.register ? "text" : "password"}
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800"
                            onClick={() =>
                              setShowPassword((prev) => ({
                                ...prev,
                                register: !prev.register,
                              }))
                            }
                          >
                            {showPassword.register ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <Button
              type="submit"
              disabled={loading}
              className={`
                w-full relative hover:cursor-pointer font-semibold text-base 
                border-2 border-blue-600 text-blue-600 bg-transparent
                hover:bg-blue-600 hover:text-white 
                transform transition-all duration-200 hover:scale-105 
                ${loading ? "opacity-70 cursor-not-allowed" : ""}
            `}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <>{mode === "login" ? "Login" : "Register"}</>
              )}
            </Button>

            {form.formState.errors.root && (
              <p className="text-sm text-red-600 text-center font-semibold">
                {form.formState.errors.root.message}
              </p>
            )}
          </form>
        </Form>

        <p className="text-sm text-center mt-3">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => onModeChange("register")}
                className="text-blue-600 underline font-semibold hover:cursor-pointer"
              >
                Register here
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => onModeChange("login")}
                className="text-blue-600 underline font-semibold hover:cursor-pointer"
              >
                Login here
              </button>
            </>
          )}
        </p>
      </DialogContent>
    </Dialog>
  );
};
