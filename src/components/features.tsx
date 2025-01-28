"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils";
import {
  BookOpen,
  BarChart3,
  Rocket,
  Users,
  Clock,
  Brain,
  DollarSign,
  FileText,
  GamepadIcon,
} from "lucide-react";

const features = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Revenue Generation",
    description:
      "Make an extra 500 naira per student, generate more revenue for Your school",
    priority: true,
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Digital Results & Reports",
    description:
      "Digital Results, Report-Cards & Assessment Access for Parents & Teachers",
    priority: true,
  },
  {
    icon: <GamepadIcon className="h-8 w-8" />,
    title: "Inter-School Gaming",
    description: "Inter-School Student Games With Cash Rewards",
    priority: true,
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "AI-Powered Learning",
    description:
      "Automated lesson planning and personalized learning paths for every student",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Performance Analytics",
    description:
      "Track and analyze student performance with advanced AI metrics",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Parent Engagement",
    description:
      "Keep parents informed and involved with real-time progress tracking",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Time Savings",
    description:
      "Reduce administrative workload with automated grading and record-keeping",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Smart Assessment",
    description:
      "AI-generated questions and adaptive testing for better learning outcomes",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "School Growth",
    description:
      "Build your school's reputation with cutting-edge educational tools",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-brown mb-4">
            Transform Your School with LearnStar.AI
          </h2>
          <p className="text-brown/80 text-lg max-w-2xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you deliver
            exceptional education while growing your institution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              //   className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ${

              //   }`}
              className={cn(
                "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow",
                feature.priority
                  ? "ring-2 ring-golden order-first md:col-span-2 lg:col-span-1"
                  : ""
              )}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-6",
                  feature.priority
                    ? "bg-golden text-white"
                    : "bg-golden/10 text-golden"
                )}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brown mb-3">
                {feature.title}
              </h3>
              <p className="text-brown/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
