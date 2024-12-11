'use client'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'
import { toast } from '@/hooks/use-toast'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export function SocialAuthForm() {
  const buttonClass =
    'background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5'

  async function handleSignIn(provider: 'github' | 'google') {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      })
    } catch (error) {
      console.log(error)

      toast({
        title: 'Sign-in Failed',
        description:
          error instanceof Error
            ? error.message
            : 'An error occurred during sign-in',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button className={buttonClass} onClick={() => handleSignIn('github')}>
        <Image
          src='/icons/github.svg'
          width={20}
          height={20}
          alt='GitHub logo'
          className='invert-colors mr-2.5 object-contain'
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn('google')}>
        <Image
          src='/icons/google.svg'
          width={20}
          height={20}
          alt='Google logo'
          className='mr-2.5 object-contain'
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  )
}