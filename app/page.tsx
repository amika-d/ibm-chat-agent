"use client"

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";



export default function Home() {
  return (
   <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Blured Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl opacity-70" />
      </div>
      <section className="w-full px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-10 text-center">
        {/* Hero Section */}
        <header className="relative z-10 text-center p-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            AI Agent Assistant
          </h1>
          <p className="text-lg text-grey-600 max-w-[600px] text-gray-50 md:text-xl/relaxed xl:text-2xl/relaxed">
            Meet you new AI chat companion that goes beyond conversation - it
            actually gets things done <br />
            <span className="text-gray-100 text-sm">
              Powered by IBM&apos;s WxTools & your favourite LLM&apos;s
            </span>
          </p>
        </header>
        {/* CTA Button */}
        <SignedIn>
          <Link href="/dashboard">
            <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

          </Link>
        </SignedIn>

          <SignedOut>
          <SignInButton
            mode="modal"
            fallbackRedirectUrl={"/dashboard"}
            forceRedirectUrl={"/dashboard"}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Sign Up
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900/20 to-gray-800/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </SignInButton>
        </SignedOut>
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-8 max-w-3xl mx-auto">
          {[
            { title: "Fast", description: "Real-time streamed responses" },
            {
              title: "Modern",
              description: "Next.js 15, Tailwind CSS, Convex, Clerk",
            },
            { title: "Smart", description: "Powered by Your Favourite LLM's" },
          ].map(({ title, description }) => (
            <div key={title} className="text-center">
              <div className="text-2xl font-semibold text-gray-50">
                {title}
              </div>
              <div className="text-sm text-gray-100 mt-1">{description}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  
  );
}
