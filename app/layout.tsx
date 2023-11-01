import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

const modeseven = localFont({
  src: [
    {
      path: '../public/fonts/modeseven.ttf',
      weight: '400'
    }
  ],
  variable: '--font-modeseven'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${modeseven.variable} font-sans`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
