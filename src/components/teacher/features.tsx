"use client";

import { motion } from "framer-motion";
import {
  Book,
  CheckCircle,
  Brain,
  BarChart,
  Award,
  Users,
  Compass,
  Laptop,
} from "lucide-react";

const features = [
  {
    icon: <Book className="h-8 w-8" />,
    title: "AI Lesson Note Assistant",
    description:
      "Create unique, curriculum-aligned lesson notes in minutes, saving hours of preparation time.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "AI Assignment Generator & Marker",
    description:
      "Generate and grade assignments quickly with personalized feedback for each student.",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Exam Question Bank",
    description:
      "Access a vast array of unique, curriculum-aligned questions for all your assessment needs.",
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Progress Reports System",
    description:
      "Generate detailed, error-free reports that impress parents and principals alike.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Recognition Dashboard",
    description:
      "Showcase your teaching impact with analytics and performance highlights.",
  },
  {
    icon: <Compass className="h-8 w-8" />,
    title: "Personalized Learning Plan Generator",
    description:
      "Create tailored learning plans for each student based on their individual needs and progress.",
  },
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Virtual Classroom Manager",
    description:
      "Efficiently manage online classes with integrated tools for engagement and assessment.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Professional Development Tracker",
    description:
      "Monitor and plan your professional growth with AI-powered recommendations and goal setting.",
  },
];

export function TeacherFeatures() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-brown mb-4">
            AI-Powered Tools for Teachers
          </h2>
          <p className="text-lg text-brown/80 max-w-2xl mx-auto">
            Our comprehensive suite of AI tools is designed to streamline your
            workflow, enhance your teaching, and boost your professional growth.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-golden mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-brown mb-2">
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
