import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Reports } from "./Tabs/Reports";
import {Classifiers} from "./Tabs/Classifiers";
import { Integrations } from "./Tabs/Integrations";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

const tabs = [{
  name: 'Classifiers',
  content: Classifiers
}, {
  name: 'Reports',
  content: Reports
},{
  name: 'Integrations',
  content: Integrations
}]


export default function FeaturesSection() {

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref) as boolean;
  const [activeTab, setActiveTab] = useState('Classifiers')

  return (
    <motion.div ref={ref}
    animate={isInView ? 'visible' : 'hidden'}
     initial="hidden" variants={FADE_UP_ANIMATION_VARIANTS} className="min-h-screen flex flex-col justify-center items-center px-4 pt-3">
      <h6 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        Get Realtime Insights
      </h6>
      <p className="mt-6 text-sm"></p>
      <Tabs defaultValue="Classifiers" className="w-screen md:w-[800px] min-h-[450px]">
      <TabsList className="flex flex-row w-full grid-cols-3 space-x-3 p-2 bg-transparent">
        {/* https://github.com/jordienr/jordienric.com/blob/main/app/lab/Navigation.tsx */}
        {tabs.map((tab) => (
            <TabsTrigger
            key={tab.name} value={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`${
            activeTab === tab.name ? "" : ""
          } relative rounded-full px-3 py-1.5 text-sm font-medium outline-primary-foreground transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.name && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-secondary dark:bg-primary mix-blend-difference"
              style={{ borderRadius: 9999 }}
              animate={{
                scale: 1.2,
              }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.6,
              }}
            />
          )}
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
