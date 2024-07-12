import { Input } from '@/components/ui/input'
import Image from 'next/image'

function GlobalSearch() {
  return (
    <div className='relative max-lg:hidden w-full max-w-[600px]'>
      <div className='relative flex grow items-center gap-1 rounded-xl px-4 background-light800_darkgradient min-h-[56px]'>
        <Image
          src='/assets/icons/search.svg'
          alt='search'
          width={24}
          height={24}
          className='cursor-pointer'
        />
        <Input
          type='text'
          placeholder='Search anything globally...'
          // value=''
          className='border-none shadow-none outline-none paragraph-regular no-focus placeholder background-light800_darkgradient'
        />
      </div>
    </div>
  )
}

export default GlobalSearch
