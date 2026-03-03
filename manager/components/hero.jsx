"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const features = [
  {
    title: "Create a Savings Account",
    description:
      "A savings account keeps your money secure, earns interest, and stays accessible. It’s a smart way to manage finances, build an emergency fund, and reach your financial goals.",
    img: "/savings.jpg",
  },
  {
    title: "Budget Planning with Chatbot",
    description:
      "Our chatbot provides customized saving plans based on your budget (e.g., vacation, housing, shoes). Get weekly or daily notifications based on your saving plan.",
    img: "/Budget_1.png",
  },
  {
    title: "Budget Tracking",
    description:
      "Stay in control of your finances with smart budget tracking! Monitor income, track expenses, and optimize savings effortlessly. Achieve your financial goals by making informed spending decisions and staying within budget.",
    img: "/tracking.jpg",
  },
  {
    title: "Learn About Saving and Investing",
    description:
      "Get educational content on mutual funds, fixed deposits, trading, crypto, and more! Includes articles, research papers, and YouTube videos for better understanding.",
    img: "/bit.jpg",
  },
];

const HeroSection = () => {
  useEffect(() => {
    // Disable scrolling for this page only
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Restore scrolling when leaving this page
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-start bg-white-100">
      {/* Tagline Section - Reduced Padding */}
      <div className="w-full text-center py-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          "Empowering You to Take Control of Your Finances"
        </h2>
      </div>

      {/* Cards Section - Reduced Margin */}


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
  {features.map((feature, index) => (
    <Link key={index} href="/dashboard">
      <div className="group perspective cursor-pointer">
        <div className="relative w-72 h-96 transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Side */}
          <div className="absolute w-full h-full bg-gray-200 rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center transform preserve-3d">
            <div className="relative w-full h-40">
              <Image
                src={feature.img}
                alt={feature.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="mt-4 font-bold text-lg text-center text-black">
              ✔ {feature.title}
            </h3>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-amber-500 text-white rounded-2xl shadow-lg p-4 flex items-center justify-left text-left transform preserve-3d back">
            <p className="text-sm">{feature.description}</p>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>;
    
    </div>
  );
};

export default HeroSection;
