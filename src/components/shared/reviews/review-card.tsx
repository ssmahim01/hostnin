"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { Review } from "@/types/review";
import Image from "next/image";
import StarRating from "../star-rating";

interface ReviewCardProps {
  review: Review;
  index: number;
}

export default function ReviewCard({ review, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-lg mx-auto dark:bg-slate-800 bg-white shadow-lg rounded-xl p-6 hover:shadow-3xl transition-shadow duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <Image
          width={80}
          height={80}
          src={review.avatar || "/placeholder.svg"}
          alt={`${review.name} profile`}
          priority
          quality={90}
          className="w-20 h-20 object-cover rounded-full border-2 border-blue-100 dark:border-slate-700 mx-auto sm:mx-0"
        />

        <div className="flex-1 text-center sm:text-left mt-3 sm:mt-0">
          <h3 className="text-xl dark:text-slate-200 text-gray-800 font-semibold capitalize">
            {review.name}
          </h3>
          <p className="text-gray-600 text-sm dark:text-slate-400">
            {review.location}
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
            <StarRating rating={review?.rating} />
          </div>
        </div>
      </div>

      {/* service tag */}
      <div className="bg-blue-50 dark:bg-slate-700 px-3 py-1 rounded-full mt-4 inline-block">
        <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">
          {review.service}
        </p>
      </div>

      {/* review text */}
      <div className="relative mt-9">
        <p className="dark:text-slate-300 text-justify text-sm leading-relaxed text-gray-700">
          {review.review}
        </p>
        <Quote className="w-6 h-6 text-gray-200 dark:text-slate-700 absolute -top-6 -left-2 rotate-180" />
        <Quote className="w-6 h-6 text-gray-200 dark:text-slate-700 absolute -bottom-2 -right-2" />
      </div>

      {/* date */}
      <div className="mt-4 text-xs text-gray-500 dark:text-slate-500 text-center sm:text-right">
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </motion.div>
  );
}
