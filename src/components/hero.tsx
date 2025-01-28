"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen bg-cream pt-20">
      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-golden/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-golden/20 rounded-full animate-rotate" />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-brown mb-6 leading-tight">
              Enabling a More
              <span className="text-golden"> Profitable</span>,
              <br />
              Highly Admired and
              <br />
              Thriving School
            </h1>
            <p className="text-lg text-brown/80 mb-8 max-w-2xl">
              <span className="text-xl font-semibold text-golden block mb-2">
                Generate An Extra 10 Million Naira in Profits.
              </span>
              Transform your school with AI-powered tools. Boost revenue,
              enhance reputation, and deliver outstanding educational outcomes
              with LearnStar.AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/chat">
                <Button className="bg-golden hover:bg-golden/90 text-cream px-8 py-6 text-lg rounded-full">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  className="border-golden text-brown hover:bg-golden/10 px-8 py-6 text-lg rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-golden rounded-full animate-rotate" />
              <div className="absolute inset-4 bg-cream rounded-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iCLTb2qgXgAJYMIevMIbQ90Ed4Km77.png"
                  alt="Students learning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
