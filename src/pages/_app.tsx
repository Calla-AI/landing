import Header from '@/components/Header'
import '@/styles/globals.css'
import { Separator } from '@/components/ui/separator'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@/components/theme/theme-provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=''>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Header/>
      <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
