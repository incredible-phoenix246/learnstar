"use client";

import { motion } from "framer-motion";
import { Gift, Gamepad2, Globe, PenTool, Trophy } from "lucide-react";

const incomeOpportunities = [
  {
    icon: <Gift className="h-6 w-6" />,
    title: "Direct Cash Gifts",
    description:
      "Receive appreciation from parents and guardians for your exceptional teaching.",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Game Revenue Sharing",
    description:
      "Earn a share of the revenue from educational games played by your students.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Foreign Private Tutoring",
    description:
      "Access online tutoring opportunities with international students.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Quiz Contribution Rewards",
    description:
      "Earn cash rewards for contributing high-quality quizzes to our platform.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Teacher Rewards Program",
    description:
      "Accumulate points for using our platform and redeem them for cash incentives.",
  },
];

export function TeacherIncome() {
  return (
    <section className="py-20 bg-golden/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-brown mb-4">
            Boost Your Income
          </h2>
          <p className="text-lg text-brown/80 max-w-2xl mx-auto">
            LearnStar.AI opens up multiple avenues for teachers to increase
            their earnings while doing what they love.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {incomeOpportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-golden mb-4">{opportunity.icon}</div>
              <h3 className="text-xl font-semibold text-brown mb-2">
                {opportunity.title}
              </h3>
              <p className="text-brown/70">{opportunity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
