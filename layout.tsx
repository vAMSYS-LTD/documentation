import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    template: '%s - vAMSYS',
    default: 'vAMSYS Documentation',
  },
  description:
    'Documentation of vAMSYS functionality.',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon/favicon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html
          lang="en"
          className={clsx('h-full antialiased', inter.variable, lexend.variable)}
          suppressHydrationWarning
      >
      <script
          async
          defer
          data-domain="docs.vamsys.dev"
          src="https://plausible.vamsys.dev/js/script.js"
      />
      <body className="flex min-h-full bg-white dark:bg-slate-900">
      {/*<GoogleAnalytics gaId="G-FPQGQN2758" />*/}
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
      </body>
      </html>
  )
}
