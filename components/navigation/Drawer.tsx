'use client'

import { Button } from '@/components/ui/button'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import Link from 'next/link'

export function DrawerNav() {
  return (
    <div className='fixed bottom-0 right-2'>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant='outline'
            className='mb-4 md:hidden shadow-lg rounded-full w-12 h-12 flex items-center justify-center'
          >
            <Link href='mailto:jayde@jaydemitchell.com' legacyBehavior passHref>
              <span className='material-symbols-outlined'>mail</span>
            </Link>
          </Button>
        </DrawerTrigger>
        <DrawerContent style={{ height: '40vh' }}></DrawerContent>
      </Drawer>
    </div>
  )
}
