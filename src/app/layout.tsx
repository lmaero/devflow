import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { auth } from '@/auth'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/context/Theme'
import { SessionProvider } from 'next-auth/react'
import type { ReactNode } from 'react'

const inter = localFont({
  src: './fonts/Inter-VF.ttf',
  variable: '--font-inter',
  weight: '100 200 300 400 500 700 800 900',
})

const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk-VF.ttf',
  variable: '--font-space-grotesk',
  weight: '300 400 500 700',
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world.',
  icons: {
    icon: '/images/site-logo.svg',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = await auth()

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        />
      </head>

      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

          <Toaster />
        </body>
      </SessionProvider>
    </html>
  )
}
