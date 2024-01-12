import { ArrowRightIcon } from '@/components/icons/misc'
import { Badge } from '@/components/ui/badge'
import React from 'react'

export type Comment = {
    text: string
    positiveWords: string[]
    negativeWords: string[]
    result?: string
}

export const SentimentAnalyser = ({ text, positiveWords, negativeWords, result }: Comment) => {
    const analyzeSentiment = () => {
        if (result) {
            return result
        }
        const words = text.split(' ')
        const positiveCount = words.filter((word) => positiveWords.includes(word)).length
        const negativeCount = words.filter((word) => negativeWords.includes(word)).length

        if (positiveCount > negativeCount) {
            return 'Positive'
        } else if (negativeCount > positiveCount) {
            return 'Negative'
        } else {
            return 'Mixed'
        }
    }

    const sentimentResult = analyzeSentiment()

    return (
        <div className="max-w-4xl mx-auto p-6 rounded-lg overflow-hidden">
            <div className="flex items-center">
                <div className="max-w-[345px] pr-4">
                    <p className="text-primary overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                        {text.split(' ').map((word, index) => {
                            if (positiveWords.includes(word)) {
                                return (
                                    <span key={index} className="font-semibold text-green-500">
                                        {word}{' '}
                                    </span>
                                )
                            } else if (negativeWords.includes(word)) {
                                return (
                                    <span key={index} className="font-semibold text-red-500">
                                        {word}{' '}
                                    </span>
                                )
                            } else {
                                return <span key={index}>{word} </span>
                            }
                        })}
                    </p>
                </div>
                <div className="flex items-center md:ml-24 mr-2">
                    <ArrowRightIcon />
                </div>
                <div className="ml-auto">
                    <Badge
                        className={`text-${
                            sentimentResult === 'Positive' ? 'green' : sentimentResult === 'Negative' ? 'red' : 'gray'
                        }-500`}
                    >
                        {sentimentResult}
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export type Label = {
    query: string
    keywords: string[]
    result: 'Support' | 'Sales' | 'Billing' | 'Other'
}

export const Labeler = ({ query, keywords, result }: Label) => {
    return (
        <div className="max-w-4xl mx-auto p-6 rounded-lg overflow-hidden">
            <div className="flex items-center">
                <div className="max-w-[345px] pr-4">
                    <p className="text-primary overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                        {query.split(' ').map((word, index) => {
                            if (keywords.includes(word)) {
                                return (
                                    <span key={index} className="font-semibold text-blue-500">
                                        {word}{' '}
                                    </span>
                                )
                            } else {
                                return <span key={index}>{word} </span>
                            }
                        })}
                    </p>
                </div>
                <div className="flex items-center md:ml-24 mr-2">
                    <ArrowRightIcon />
                </div>
                <div className="ml-auto">
                    <Badge
                        className={`text-${
                            result === 'Support'
                                ? 'green'
                                : result === 'Sales'
                                  ? 'violet'
                                  : result === 'Billing'
                                    ? 'blue'
                                    : 'gray'
                        }-500`}
                    >
                        {result}
                    </Badge>
                </div>
            </div>
        </div>
    )
}
