import Header from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@/components/theme/theme-provider"
import Footer from '@/components/Footer'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { useRef } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const shapeRef = useRef<HTMLDivElement>(null)

  return (
    <div className='changer'>

      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Header>
            <Link href="https://github.com/calla-ai" passHref>
                    <GitHubLogoIcon className="h-6 w-6" />
            </Link>
            <ThemeToggle/> 

      </Header>
      <Component {...pageProps} />
      <Footer/>

      </ThemeProvider>

    </div>
  )
}
