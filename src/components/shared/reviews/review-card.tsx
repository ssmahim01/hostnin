"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Review } from "@/types/review";
import Image from "next/image";

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-md mx-auto dark:bg-slate-800 bg-white shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col hover:shadow-3xl transition-shadow duration-300"
    >
      <Image
        width={300}
        height={250}
        src={review.avatar || "/placeholder.svg"}
        alt={`${review.name} profile`}
        priority
        className="w-[150px] h-[150px] object-cover rounded-full border-4 border-blue-100 dark:border-slate-700"
      />

      <h3 className="text-2xl dark:text-slate-200 text-gray-800 font-semibold capitalize mt-4">
        {review.name}
      </h3>

      <p className="text-gray-600 text-sm dark:text-slate-400 mb-2">
        {review.location}
      </p>

      <div className="bg-blue-50 dark:bg-slate-700 px-3 py-1 rounded-full mb-4">
        <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
          {review.service}
        </p>
      </div>

      <div className="flex items-center gap-1 my-4">
        {renderStars(review.rating)}
      </div>

      <div className="relative">
        <p className="dark:text-slate-300 text-justify text-sm leading-relaxed text-gray-700">
          {review.review}
        </p>
        <Quote className="w-8 h-8 text-gray-200 dark:text-slate-700 absolute -top-8 -left-2 rotate-180" />
        <Quote className="w-8 h-8 text-gray-200 dark:text-slate-700 absolute -bottom-2 -right-2" />
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-slate-500">
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </motion.div>
  );
}
