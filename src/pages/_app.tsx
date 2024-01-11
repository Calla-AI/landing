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
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Head>
          <title>Calla AI</title>
          <meta name="description" content="Open Source, AI Powered Realtime Text Analytics Platform" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="msapplication-TileColor" content="#ffffff"/>
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
<meta name="theme-color" content="#ffffff"></meta>

<meta property="og:title" content="Calla AI" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://calla-ai.in/" />
<meta property="og:image" content="https://calla-ai.in/og.png" />
<meta property="og:description" content="Open Source, AI Powered Realtime text analytics platform" />

        </Head>
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
