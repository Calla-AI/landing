import Header from '@/components/Header'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import ThemeToggle from '@/components/theme/ThemeToggle'
import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Header>
                        <Link href="https://x.com/Calla-AI">
                            <FaXTwitter className="h-6 w-6" />
                        </Link>
                        <Link href="https://github.com/calla-ai">
                            <GitHubLogoIcon className="h-6 w-6" />
                        </Link>
                        <ThemeToggle />
                    </Header>
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
