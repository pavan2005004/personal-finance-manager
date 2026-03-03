"use client"; // Forces Next.js to treat this as a client component

import React, { useState } from "react"; 
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, ArrowLeft, Bot } from "lucide-react"; // Added ArrowLeft and Robot icons
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import router for back navigation
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  const [showArticle, setShowArticle] = useState(false);
  const router = useRouter(); // Initialize router

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/zaara.png"}
            alt="Welth Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
           

            {/* Bot Dashboard Button */}
            


<a href="https://pavan2005004.github.io/budgetplanner/"
   target="_blank"
   rel="noopener noreferrer"
   onClick={(e) => {
     if (!window.confirm("You are leaving this site. Continue?")) {
       e.preventDefault();
     }
   }}>
  <Button variant="outline">
    <Bot size={18} />
    <span className="hidden md:inline">planner</span>
  </Button>
</a>

            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <a href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </a>

            {/* Toggle Article Button */}
            <Button variant="outline" onClick={() => setShowArticle(!showArticle)}>
              {showArticle ? "Hide Article" : "View Article"}
            </Button>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>

      {/* Embedded Article in an iframe (Toggles on Click) */}
      {showArticle && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t p-4">
          <iframe
            src="/actual_article.html"
            width="100%"
            height="600px"
            className="w-full border rounded-lg"
          ></iframe>
        </div>
      )}
    </header>
  );
};

export default Header;
