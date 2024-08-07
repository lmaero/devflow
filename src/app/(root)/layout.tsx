import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Navbar from '@/components/shared/navbar/Navbar'
import type React from 'react'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='relative background-light850_dark100'>
      <Navbar />
      <div className='flex'>
        <LeftSidebar />
        <section className='flex min-h-screen flex-1 flex-col px-6 pt-36 pb-6 max-md:pb-14 sm:px-14'>
          <div className='mx-auto w-full max-w-5xl'>{children}</div>
        </section>
        <RightSidebar />
      </div>
      Toaster
    </main>
  )
}
