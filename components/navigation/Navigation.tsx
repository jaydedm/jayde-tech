'use client'

import Link from 'next/link'
import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import { DrawerNav } from './Drawer'

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string
  icon?: boolean
}

export function Navigation() {
  return (
    <>
      <DrawerNav />
      <NavigationMenu className='ml-auto mr-0 '>
        <div className='font-extrabold text-l'>JAYDE MITCHELL</div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md pointer-events-none'
                      href='/'
                    >
                      <div className='mb-2 mt-4 text-lg font-medium'>
                        Hello!
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        Here are some resources to learn a bit more about me. I
                        appreciate the time you are taking to look into this.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href='https://docs.google.com/document/d/1wEkJZ4qpyiCI84VbAMPUC6oOGMNTWR8x_oqfqbMofr0/edit?usp=sharing'
                  title='My Resume'
                  icon
                >
                  My work history with software.
                </ListItem>
                <ListItem
                  href='https://www.youtube.com/playlist?list=PLIx4umQRRZ7bHnHyqRFjrfunhi4xitjZj'
                  title='Coding Fundamentals Lectures'
                  icon
                >
                  My lecture series of Web Development Fundamentals.
                </ListItem>
                <ListItem
                  href='https://www.github.com/jaydedm'
                  title='My Githhub'
                  icon
                >
                  My GitHub
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Live Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md pointer-events-none'
                      href='/'
                    >
                      <div className='mb-2 mt-4 text-lg font-medium'>
                        Porfolio Highlights
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        The best highlights with source code can be found below
                        on this page, but here are live links to public
                        enterprise applications I have been a significant
                        contributor to.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href='https://www.petco.com/shop/en/petcostore/c/vitalcare'
                  title='PetCo'
                >
                  Join Vital Care Premiere alongside 24 million users.
                </ListItem>
                <ListItem
                  href='https://www.ets.org/solutions/clients/nextgen-enaep.html'
                  title='ETS'
                >
                  Raising the quality of education around the world.
                </ListItem>
                <ListItem
                  href='https://www.agriculture.com/innovative-pricing-structures-are-shaping-agriculture-7559351'
                  title='Bayer'
                >
                  An article about the groundbreaking work at Bayer.
                </ListItem>
                <ListItem href='https://www.launchcode.com' title='LaunchCode'>
                  A non-profit for free education.
                </ListItem>
                <ListItem href='https://growthday.com' title='GrowthDay'>
                  Join hundreds of thousands of users in personal growth.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className='hidden md:flex'>
            <Link href='mailto:jayde@jaydemitchell.com' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Me
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

export const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none flex'>
              {title} {icon && <ArrowUpRight className='h-4 w-4' />}
            </div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
