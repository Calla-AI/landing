import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const schema = z.object({
    email: z.string().email()
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ error: string } | { id: string }>) {
    if (req.method === 'POST') {
        try {
            const { email } = schema.parse(req.body)

            const user = await prisma.emails.upsert({
                where: { email },
                update: {},
                create: { email, createdAt: new Date() }
            })

            res.status(200).json({ id: user.id })
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({ error: error.errors[0].message })
                return
            }
            res.status(500).json({ error: 'Something went wrong' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
