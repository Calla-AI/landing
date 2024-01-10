import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useInView } from "framer-motion";

export function HeroSection() {

  const ref = useRef(null);

  const isInView = useInView(ref) as boolean;

  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };
  

  return (
    <motion.section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <motion.div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial="hidden"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            ref={ref}
            animate={isInView ? 'show' : 'hidden'}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl lg:text-6xl">
              Calla
            </h1>
            <p className="mx-auto max-w-[700px]md:text-xl">
              Open Source AI Sentiment Analysis Platform
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            variants={FADE_UP_ANIMATION_VARIANTS}
            transition={{ duration: 0.6 }}
            animate={isInView ? 'show' : 'hidden'}
            viewport={{ once: true }}
            className="w-full max-w-sm space-y-2"
          >
            {showForm ? (
              <div className="flex flex-col space-y-2">
              <form
                className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
                onSubmit={handleSubmit}
              >
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                  onChange={handleChange}
                />
                <Button className="bg-white text-purple-600" type="submit">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs">
                  By subscribing, you agree to receive our newsletter
                  with our
                </p>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 justify-center">
                <Button
                  className="border"
                  onClick={() => setShowForm(true)}
                >
                  Join Waitlist
                </Button>
                <Button
                  className="dark:bg-white bg-black text-purple-600"
                >
                  Learn More
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
