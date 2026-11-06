import './globals.css';
import type { Metadata } from 'next';
import { Hanken_Grotesk, Literata } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-hanken-grotesk'
});

const literata = Literata({ 
  subsets: ['latin'],
  variable: '--font-literata'
});

export const metadata: Metadata = {
  title: 'Slovenské právne predpisy',
  description: 'Oficiálne zdroje slovenského práva s detailnými informáciami',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${hankenGrotesk.variable} ${literata.variable}`}>
      <body>{children}</body>
    </html>
  );
}