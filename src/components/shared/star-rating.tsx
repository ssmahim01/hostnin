"use client"

import { Star } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.25;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        let fillWidth = 0;
        if (i < fullStars) fillWidth = 100;
        else if (i === fullStars && hasHalfStar) fillWidth = 50;

        return (
          <div key={i} className="relative w-5 h-5">
            {/* outline star always */}
            <Star className="absolute inset-0 w-5 h-5 text-gray-300 dark:text-gray-600" />

            {/* fill layer clipped */}
            {fillWidth > 0 && (
              <Star
                className="absolute inset-0 w-5 h-5 text-yellow-400 fill-yellow-400"
                style={{
                  clipPath: `inset(0 ${100 - fillWidth}% 0 0)`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
