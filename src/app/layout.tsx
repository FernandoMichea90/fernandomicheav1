import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../theme'
const inter = Inter({ subsets: ['latin'] })
import "../utils-css-js/index.css"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">

      <body >
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>

    </html>
  )
}
