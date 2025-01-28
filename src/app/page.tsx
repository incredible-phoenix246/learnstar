import { Contact } from "@/components/contact";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </main>
  );
};

export default page;
