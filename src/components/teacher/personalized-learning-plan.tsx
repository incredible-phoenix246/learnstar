"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export function PersonalizedLearningPlan() {
  const [studentName, setStudentName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [subjects, setSubjects] = useState("");
  const [learningStyle, setLearningStyle] = useState("");
  const [plan, setPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/teacher/personalized-learning-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentName,
          gradeLevel,
          subjects,
          learningStyle,
        }),
      });
      const data = await response.json();
      setPlan(data.plan);
    } catch (error) {
      console.error("Error generating plan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-brown mb-4">
        Personalized Learning Plan Generator
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
        <Input
          placeholder="Grade Level"
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
          required
        />
        <Input
          placeholder="Subjects (comma-separated)"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          required
        />
        <Textarea
          placeholder="Learning Style and Preferences"
          value={learningStyle}
          onChange={(e) => setLearningStyle(e.target.value)}
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
            "Generate Plan"
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
            Generated Learning Plan:
          </h4>
          <p className="text-brown/80 whitespace-pre-wrap">{plan}</p>
        </motion.div>
      )}
    </div>
  );
}
