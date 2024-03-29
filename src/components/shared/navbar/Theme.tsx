'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { themes } from '@/constants'
import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'

function Theme() {
  const { mode, setMode } = useTheme()

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger className='focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
          {mode === 'light' ? (
            <Image
              alt='Sun'
              className='active-theme'
              height={20}
              src='/assets/icons/sun.svg'
              width={20}
            />
          ) : (
            <Image
              alt='Moon'
              className='active-theme'
              height={20}
              src='/assets/icons/moon.svg'
              width={20}
            />
          )}
        </MenubarTrigger>
        <MenubarContent className='absolute mt-3 rounded border py-2 right-[-3rem] min-w-[120px] dark:border-dark-400 dark:bg-dark-300'>
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              onClick={() => {
                setMode(item.value)
                if (item.value !== 'system') {
                  localStorage.theme = item.value
                } else {
                  localStorage.removeItem('theme')
                }
              }}
              className='flex items-center gap-4 py-2 px-2.5 dark:focus:bg-dark-400'
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${mode === item.value && 'active-theme'}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === item.value
                    ? 'text-primary-500'
                    : 'text-dark100_light900'
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
