"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewCard from "./review-card";
import type { Review } from "@/types/review";
import StarRating from "../star-rating";

interface ReviewsProps {
  reviews: Review[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviews);
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

  // Get unique services for filter
  const services = Array.from(new Set(reviews.map((review) => review.service)));

  React.useEffect(() => {
    let filtered = reviews;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (review) =>
          review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Service filter
    if (serviceFilter !== "all") {
      filtered = filtered.filter((review) => review.service === serviceFilter);
    }

    // Rating filter
    if (ratingFilter !== "all") {
      filtered = filtered.filter(
        (review) => review.rating >= Number.parseInt(ratingFilter)
      );
    }

    setFilteredReviews(filtered);
  }, [searchTerm, serviceFilter, ratingFilter, reviews]);

  return (
    <div className="bg-gray-50 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 mb-6 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See what our customers have to
            say about their hosting experience with Hostnin.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <StarRating rating={4.4} />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {(4.8).toFixed(1)} out of 5
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Based on 122 reviews
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                99.9%
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Customer Satisfaction
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                24/7
              </p>
              <p className="text-sm text-gray-600 dark:text-slate-400">
                Support Available
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter Reviews:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="All Ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-slate-400 text-center md:text-left">
            Showing {filteredReviews.length} of {reviews.length} reviews
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredReviews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600 dark:text-slate-400 mb-4">
              No reviews found matching your criteria.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setServiceFilter("all");
                setRatingFilter("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
