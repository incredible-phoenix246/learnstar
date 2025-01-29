"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle } from "lucide-react";

export function ProfessionalDevelopment() {
  const [teacherName, setTeacherName] = useState("");
  const [subjects, setSubjects] = useState("");
  const [experience, setExperience] = useState("");
  const [goals, setGoals] = useState("");
  const [plan, setPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/teacher/professional-development", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teacherName, subjects, experience, goals }),
      });
      const data = await response.json();
      setPlan(data.plan);
    } catch (error) {
      console.error("Error generating professional development plan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-brown mb-4">
        Professional Development Tracker
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Your Name"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          required
        />
        <Input
          placeholder="Subjects You Teach"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          required
        />
        <Input
          placeholder="Years of Experience"
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
        <Textarea
          placeholder="Professional Development Goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="w-full bg-golden text-cream hover:bg-golden/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Generate Development Plan"
          )}
        </Button>
      </form>
      {plan && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-cream rounded-lg"
        >
          <h4 className="text-lg font-semibold text-brown mb-2">
            Your Professional Development Plan:
          </h4>
          <p className="text-brown/80 whitespace-pre-wrap">{plan}</p>
          <div className="mt-4">
            <h5 className="font-semibold text-brown mb-2">Next Steps:</h5>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span>Review and prioritize the suggested activities</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span>Set specific timelines for each goal</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span>Track your progress regularly</span>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}
