"use client";

import { AlertTriangleIcon, ShieldCheckIcon, ClockIcon } from "lucide-react";

export default function ComplainHeader() {
  return (
    <div
      
      className="text-center space-y-6"
    >
      {/* Main Heading */}
      <div className="space-y-4">
        <div
        
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-lg"
        >
          <AlertTriangleIcon className="h-8 w-8" />
        </div>

        <h1
         
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-blue-500 dark:from-blue-400 dark:via-teal-400 dark:to-blue-400 bg-clip-text text-transparent"
        >
          File a Complaint
        </h1>

        <p
       
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          We take your concerns seriously. Submit your complaint and our
          dedicated team will investigate and respond promptly.
        </p>
      </div>

      {/* Trust Indicators */}
      <div
      
        className="flex flex-wrap justify-center gap-6 md:gap-8"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheckIcon className="h-5 w-5 text-green-500" />
          <span>Confidential Process</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ClockIcon className="h-5 w-5 text-blue-500" />
          <span>48-Hour Response</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertTriangleIcon className="h-5 w-5 text-orange-500" />
          <span>Fair Resolution</span>
        </div>
      </div>
    </div>
  );
}
