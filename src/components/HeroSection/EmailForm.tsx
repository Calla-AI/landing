'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } }
}

export function EmailForm({ onSubmitted }: { onSubmitted: () => void }) {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        fetch('/api/submit-email', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setLoading(false)
            if (res.ok) {
                onSubmitted()
            }
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    return (
        <motion.div
            initial="hidden"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            transition={{ duration: 0.6 }}
            animate="show"
        >
            <form className="flex flex-row space-x-2 md:flex-row md:space-x-2 md:space-y-0" onSubmit={handleSubmit}>
                <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    onChange={handleChange}
                />
                <Button type="submit" disabled={loading}>
                    Submit
                </Button>
            </form>
            <p className="text-xs py-1">By submitting, you agree to receive emails from Calla AI.</p>
        </motion.div>
    )
}
