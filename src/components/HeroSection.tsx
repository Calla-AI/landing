import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useState } from "react";
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
    <motion.section className="w-full pt-[220px] pb-[200px] md:pt-[250px]">
      <motion.div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center h-full justify-center">
          <motion.div
            initial="hidden"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            ref={ref}
            animate={isInView ? 'show' : 'hidden'}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-2"
          >
            <h1 className="font-bold tracking-tighter text-4xl md:text-5xl">
              Elevate customer experiences with{' '}
              <span className="bg-gradient-to-r from-[#FF0080] to-[#7928CA] dark:from-[#7928CA] dark:to-[#FF0080] bg-clip-text text-transparent">
              
                AI
              </span>
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
                className="flex flex-row space-x-2 md:flex-row md:space-x-2 md:space-y-0"
                onSubmit={handleSubmit}
              >
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                  onChange={handleChange}
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs">
                  By subscribing, you agree to receive our newsletter
                </p>
              </div>
            ) : (
              <div className="flex flex-row md:flex-row md:space-x-2 md:space-y-0 justify-center space-x-2">
                <Button
                  className="border"
                  onClick={() => setShowForm(true)}
                >
                  Join Waitlist
                </Button>
                <Link href="https://wool-novel-de6.notion.site/Calla-AI-a3f4d980aad845f3b845b56a03c0fd7b?pvs=4">
                <Button
                  className="bg-secondary text-primary border-2"
                >
                  Learn More 
                </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
