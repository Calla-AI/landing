import Header from '@/components/Header';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import ThemeToggle from '@/components/theme/ThemeToggle';
import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import ScrollDownArrows from '@/components/ScrollDownArrow';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header>
          <Link href="https://x.com/Calla-AI" passHref>
            <TwitterLogoIcon className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/calla-ai" passHref>
            <GitHubLogoIcon className="h-6 w-6" />
          </Link>
          <ThemeToggle />
        </Header>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
