'use client'

import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'
import { SignedOut } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function LeftSidebar() {
  const pathname = usePathname()

  return (
    <section className='background-light900_dark200 light-border left-0 top-0 flex sticky h-screen flex-col justify-between  overflow-y-auto border-r gap-6 pt-36 p-6 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p
                className={`${
                  isActive ? 'base-bold' : 'base-medium'
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>
      <SignedOut>
        <div className='flex flex-col gap-3'>
          <Link href='/sign-in'>
            <Button className='w-full rounded-lg px-4 py-3 shadow-none small-medium btn-secondary min-h-[41px]'>
              <Image
                src='/assets/icons/account.svg'
                alt='login'
                width={20}
                height={20}
                className='invert-colors lg:hidden max-lg:'
              />
              <span className='primary-text-gradient max-lg:hidden'>
                Log In
              </span>
            </Button>
          </Link>

          <Link href='/sign-up'>
            <Button className='w-full rounded-lg px-4 py-3 shadow-none small-medium light-border-2 btn-tertiary min-h-[41px] text-dark400_light900'>
              <Image
                src='/assets/icons/sign-up.svg'
                alt='login'
                width={20}
                height={20}
                className='invert-colors lg:hidden max-lg:'
              />
              <span className='primary-text-gradient max-lg:hidden'>
                Sign Up
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  )
}

export default LeftSidebar
