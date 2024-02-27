import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed z-50 w-full gap-5 p-6 flex-between background-light900_dark200 shadow-light-300 dark:shadow-none sm:px-12'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/assets/images/site-logo.svg'
          alt='DevFlow'
          width={23}
          height={23}
        />
        <p className='max-sm:hidden h2-bold font-grotesk text-dark-100 dark:text-light-900'>
          Dev <span className='text-primary-500'>Overflow</span>
        </p>
      </Link>
      {/*Global Search*/}
      <div className='gap-5 flex-between'>
        Theme
        <SignedIn>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: { avatarBox: 'h-10 w-10' },
              variables: { colorPrimary: '#ff7000' },
            }}
          />
        </SignedIn>
        MobileNav
      </div>
    </nav>
  )
}

export default Navbar
