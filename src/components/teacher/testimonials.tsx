"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "LearnStar.AI has revolutionized my teaching approach. I now have more time to focus on individual student needs while delivering high-quality content.",
    author: "Sarah Johnson",
    role: "High School Science Teacher",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The additional income opportunities have made a significant difference in my life. I'm able to pursue my passion for teaching while securing my financial future.",
    author: "Michael Chen",
    role: "Middle School Math Teacher",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The recognition dashboard has helped me showcase my impact to school administration. It's boosted my confidence and opened up new career opportunities.",
    author: "Emily Rodriguez",
    role: "Elementary School Teacher",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export function TeacherTestimonials() {
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
            What Teachers Are Saying
          </h2>
          <p className="text-lg text-brown/80 max-w-2xl mx-auto">
            Hear from educators who have transformed their teaching careers with
            LearnStar.AI.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-brown/80 mb-4 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-brown">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-brown/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
