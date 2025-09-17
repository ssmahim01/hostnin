"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface IconMapProps {
  starter: StaticImageData | string;
  pro: StaticImageData | string;
  ultimate: StaticImageData | string;
  basic?: StaticImageData | string;
}

export const IconMap = ({ starter, pro, ultimate, basic }: IconMapProps) => {
  return {
    basic: basic ? (
      <div className="w-8 h-8 relative">
        <Image src={basic} alt="Basic" fill className="object-contain" />
      </div>
    ) : null,
    starter: (
      <div className="w-8 h-8 relative">
        <Image src={starter} alt="Starter" fill className="object-contain" />
      </div>
    ),
    pro: (
      <div className="w-8 h-8 relative">
        <Image src={pro} alt="Pro" fill className="object-contain" />
      </div>
    ),
    ultimate: (
      <div className="w-8 h-8 relative">
        <Image src={ultimate} alt="Ultimate" fill className="object-contain" />
      </div>
    ),
  };
};