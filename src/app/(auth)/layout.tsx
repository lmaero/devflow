import type React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
      {children}
    </main>
  )
}
