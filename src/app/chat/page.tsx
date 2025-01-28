"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Bot, User } from "lucide-react";
import Link from "next/link";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: "1",
          role: "assistant",
          content:
            "Hello! I'm your LearnStar.AI assistant. How can I help transform your school today? I can provide information about our AI-powered tools, revenue generation strategies, and educational solutions.",
        },
      ],
    });

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 pt-20">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <Card className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm shadow-xl">
          <div className="border-b border-golden/20 p-4">
            <h2 className="text-xl font-semibold text-brown">
              LearnStar.AI Assistant
            </h2>
            <p className="text-sm text-brown/60">
              Ask me anything about transforming your school
            </p>
          </div>

          <div className="h-[600px] overflow-y-auto p-4 space-y-4 custom_scroll">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.role === "assistant" ? "justify-start" : "justify-end"
                } items-end gap-3 ${
                  message.role === "assistant" ? "mr-12" : "ml-12"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-golden" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === "assistant"
                      ? "bg-white text-brown rounded-bl-none"
                      : "bg-golden text-cream rounded-br-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-golden flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-cream" />
                  </div>
                )}
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start items-center gap-2 text-brown/60"
              >
                <div className="w-8 h-8 rounded-full bg-golden/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-golden" />
                </div>
                <div className="flex gap-1">
                  <span className="animate-bounce">●</span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ●
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  >
                    ●
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          <div className="border-t border-golden/20 p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about our AI solutions, revenue strategies, or educational tools..."
                className="flex-1 bg-white border-golden/20"
              />
              <Button
                type="submit"
                className="bg-golden hover:bg-golden/90 text-cream"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
