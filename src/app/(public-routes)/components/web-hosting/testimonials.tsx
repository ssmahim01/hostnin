"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Tiyasa",
    avatar:
      "https://res.cloudinary.com/daspo1tk3/image/upload/v1757157342/skilled-worker-5_qfeivn.jpg",
    rating: 5,
    review:
      "I am very pleased with the customer service. The customer called Tiyasa was really helpful and resolved my problem very fast. They showed very quality service to customers. I really liked them! Highly recommended for everyone who wants to buy hosting from them. They are really good and they have good customer support.",
    platform: "Google",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Image
                width={100}
                height={90}
                priority
                quality={90}
                src="https://res.cloudinary.com/daspo1tk3/image/upload/v1757436761/google_w1lyma.png"
                alt="Google"
                className="w-8 h-8"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                4.8 out of 5 based on 147+ reviews
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Hear from our
            </h2>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              happy customers
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Here&apos;s what some of our customers have to say about our
              hosting services and support team.
            </p>
          </div>

          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {testimonial.review}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <Avatar
                  key={i}
                  className="w-8 h-8 border-2 border-white dark:border-gray-800"
                >
                  <AvatarImage
                    src={`/customer-avatar-.jpg?height=32&width=32&query=customer avatar ${
                      i + 1
                    }`}
                    alt={`Customer ${i + 1}`}
                  />
                  <AvatarFallback>C{i + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              See More Reviews →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
