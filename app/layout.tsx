import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Public_Sans, Roboto } from "next/font/google";

// Poppins setup
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the weights you need
  variable: '--font-poppins',
});

// Public Sans setup
const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
  variable: '--font-publicSans',
})


// Add Roboto
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // adjust as needed
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${publicSans.variable} ${roboto.variable}`}>
      <body className={`${poppins.variable} ${publicSans.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
