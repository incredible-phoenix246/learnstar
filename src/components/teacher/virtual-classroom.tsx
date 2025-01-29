"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Video, Mic, Users, MessageSquare } from "lucide-react";

export function VirtualClassroom() {
  const [className, setClassName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [classLink, setClassLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/teacher/virtual-classroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ className, description, date, time }),
      });
      const data = await response.json();
      setClassLink(data.classLink);
    } catch (error) {
      console.error("Error creating virtual classroom:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-brown mb-4">
        Virtual Classroom Manager
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
        <Textarea
          placeholder="Class Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
            "Create Virtual Classroom"
          )}
        </Button>
      </form>
      {classLink && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-cream rounded-lg"
        >
          <h4 className="text-lg font-semibold text-brown mb-2">
            Virtual Classroom Created:
          </h4>
          <p className="text-brown/80 mb-4">
            Your virtual classroom is ready! Share this link with your students:
          </p>
          <a
            href={classLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-golden hover:underline"
          >
            {classLink}
          </a>
          <div className="mt-4 flex justify-around">
            <Button variant="outline" className="flex items-center">
              <Video className="mr-2 h-4 w-4" /> Start Video
            </Button>
            <Button variant="outline" className="flex items-center">
              <Mic className="mr-2 h-4 w-4" /> Unmute
            </Button>
            <Button variant="outline" className="flex items-center">
              <Users className="mr-2 h-4 w-4" /> Participants
            </Button>
            <Button variant="outline" className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" /> Chat
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
