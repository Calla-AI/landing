// Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6">
        <Separator/>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">© Calla {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer
