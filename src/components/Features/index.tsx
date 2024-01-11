import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Sentiment } from "./Tabs/Sentiment";
import {Classifiers} from "./Tabs/Classifiers";
import { Integrations } from "./Tabs/Integrations";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FeaturesSection() {

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref) as boolean;

  const tabs = [{
    name: 'Integrations',
    content: Integrations
  }, {
    name: 'Sentiment',
    content: Sentiment
  }, {
    name: 'Classifiers',
    content: Classifiers
  }]


  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  }

  return (
    <motion.div ref={ref}
    animate={isInView ? 'visible' : 'hidden'}
     initial="hidden" variants={FADE_UP_ANIMATION_VARIANTS} className="min-h-screen flex flex-col justify-center items-center px-4 pt-3">
      <h6 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        Realtime Sentiment Analysis
      </h6>
      <p className="mt-6 text-sm"></p>
      <Tabs defaultValue="Integrations" className="w-screen md:w-[800px] min-h-[450px]">
      <TabsList className="flex flex-row w-full grid-cols-3 space-x-3 p-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.name} value={tab.name}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <motion.div className="flex flex-col space-y-2" initial="hidden" animate="visible" variants={FADE_UP_ANIMATION_VARIANTS}>
      {tabs.map((tab) => (
        <TabsContent key={tab.name} value={tab.name}>
          <div className="h-[600px] overflow-y-auto m-2">
          <Card>
            <CardHeader>
              <CardTitle>{tab.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <tab.content></tab.content>
            </CardContent>
          </Card>
          </div>
        </TabsContent>
      ))
      }
      </motion.div>
    </Tabs>

    </motion.div>
  );
}
