import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import { TConductorInstance } from 'react-canvas-confetti/dist/types'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import { EmailForm } from './EmailForm'

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } }
}

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } }
}

export function HeroSection() {
    const ref = useRef(null)
    const isInView = useInView(ref) as boolean
    const [showForm, setShowForm] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [conductor, setConductor] = useState<TConductorInstance>()

    const handleSubmitted = () => {
        setSubmitted(true)
        conductor?.shoot()
        setTimeout(() => {
            setSubmitted(false)
            showForm && setShowForm(false)
        }, 5000)
    }

    const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
        setConductor(conductor)
    }
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
                        <p className="mx-auto max-w-[700px]md:text-xl">Open Source, AI Text Analtyics Platfrom</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        transition={{ duration: 0.6 }}
                        animate={isInView ? 'show' : 'hidden'}
                        viewport={{ once: true }}
                        className="w-full max-w-sm space-y-2"
                    >
                        {submitted ? (
                            <div>
                                <p className="text-sm">
                                    Thank you for submitting your email. You will be notified when Calla AI is ready to
                                    go!
                                </p>
                            </div>
                        ) : showForm ? (
                            <EmailForm onSubmitted={handleSubmitted} />
                        ) : (
                            <div className="flex flex-row md:flex-row md:space-x-2 md:space-y-0 justify-center space-x-2">
                                <Button className="border" onClick={() => setShowForm(true)}>
                                    Join Waitlist
                                </Button>
                                <Link href="https://wool-novel-de6.notion.site/Calla-AI-a3f4d980aad845f3b845b56a03c0fd7b?pvs=4">
                                    <Button className="bg-secondary text-primary border-2">Learn More</Button>
                                </Link>
                            </div>
                        )}
                        <Realistic onInit={onInit} />
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}
