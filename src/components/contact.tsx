"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-brown mb-4">
            Get in Touch
          </h2>
          <p className="text-brown/80 text-lg max-w-2xl mx-auto">
            Ready to transform your school? Contact us today and let&apos;s
            discuss how LearnStar.AI can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center text-golden">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brown mb-1">
                  Email Us
                </h3>
                <p className="text-brown/70">covenantchukwudi@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center text-golden">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brown mb-1">
                  Call Us
                </h3>
                <p className="text-brown/70">+234 8178383994</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-golden/10 rounded-full flex items-center justify-center text-golden">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brown mb-1">
                  Visit Us
                </h3>
                <p className="text-brown/70">
                  123 Education Street,
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-brown mb-2 block">
                  Name
                </label>
                <Input className="bg-cream border-golden/20" />
              </div>
              <div>
                <label className="text-sm font-medium text-brown mb-2 block">
                  Email
                </label>
                <Input type="email" className="bg-cream border-golden/20" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-brown mb-2 block">
                School Name
              </label>
              <Input className="bg-cream border-golden/20" />
            </div>
            <div>
              <label className="text-sm font-medium text-brown mb-2 block">
                Message
              </label>
              <Textarea className="bg-cream border-golden/20" rows={4} />
            </div>
            <Button className="w-full bg-golden hover:bg-golden/90 text-cream">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
