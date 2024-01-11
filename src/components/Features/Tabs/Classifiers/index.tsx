import { Card, CardContent } from "@/components/ui/card"
import { SentimentAnalyser, Comment, Labeler, Label } from "./Analyser"

const sentimentExamples = [{
  text: 'I love this product! It\'s so easy to use and has helped me a lot.',
  positiveWords: ['love', 'easy', 'helped'],
  negativeWords: [],
}, {
  text: 'This tool doubled my anger and gave it to the next person, I hate it so much.',
  positiveWords: [],
  negativeWords: ['hate', 'anger'],
}, {
  text: "I liked this product, I'm not sure if I'll use it again though.",
  positiveWords: ['liked'],
  negativeWords: ['not', 'not', 'sure', 'if', 'I\'ll', 'use', 'it', 'again'],
  result: 'Mixed'
}] as Comment[]

const labelExamples = [{
  query: 'My computer suddenly stopped working',
  keywords: ['computer', 'stopped', 'working'],
  result: 'Technical Support'
}, {
  query: 'I want to cancel my subscription',
  keywords: ['cancel', 'subscription'],
  result: 'Billing'
}, {
  query: "I want to purchase a new headset, I'm not sure which one to get",
  keywords: ['purchase', 'new', 'headset'],
  result: 'Sales'
}] as Label[]

export function Classifiers() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-6">Sentiment Classifier</h2>
      {sentimentExamples.map((comment) => (
        <div className="flex flex-cols items-center justify-center">
        <Card className="my-2 -p-4 w-[735px]">
            <SentimentAnalyser {...comment}/>
        </Card>
        </div>
        ))}
      <h2 className="text-lg font-bold mb-6">Label Classifier</h2>
      {labelExamples.map((label) => (
        <div className="flex flex-cols items-center justify-center">
        <Card className="my-2 -p-4 w-[735px]">
            <Labeler {...label}/>
        </Card>
        </div>
        ))}
    </div>
  )
}

