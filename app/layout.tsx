import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Gurmeher Bhasin',
    template: '%s | Gurmeher Bhasin'
  },
  description: 'Computer Science, Data Science @ UC Berkeley',
  openGraph: {
    title: 'Gurmeher Bhasin',
    description: 'Computer Science, Data Science @ UC Berkeley',
    images: ['/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurmeher Bhasin',
    description: 'Computer Science, Data Science @ UC Berkeley',
    images: ['/cover.png'],
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-[#111111]`} // Change dark:bg number to change bkg color
      >
        <ThemeProvider
          enableSystem={true} // Use system theme
          attribute="class"
          storageKey="theme"
          defaultTheme="system" // Use system theme, can be light, dark, or system
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-md flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
