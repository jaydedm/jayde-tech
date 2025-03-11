'use client'

import { redirect, useParams } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import { BorderBeam } from '@/components/magicui/border-beam'

interface PageProps {
  params: Promise<{ companyName: string }>
}

const companyVideos: Record<string, string> = {
  apple: 'BqTrHaduFyQ?si=9nluu_tLZ_QZ1XWz'
}

const allowedCompanies = Object.keys(companyVideos)

export default function CompanyVideoPage(props: PageProps) {
  const params = useParams()
  let companyName = params.companyName as string

  useEffect(() => {
    const iframe = document.getElementById('videoFrame') as HTMLIFrameElement
    if (iframe) {
      iframe.src += '&autoplay=1' // Reload with autoplay
    }
  }, [])

  if (!allowedCompanies.includes(companyName)) {
    redirect('/')
    return null
  }

  if (companyName) {
    companyName =
      companyName.charAt(0).toUpperCase() + companyName.slice(1).toLowerCase()
  }

  const videoId = companyVideos[companyName.toLowerCase()]

  return (
    <>
      <AnimatedGridPattern
        maxOpacity={0.1}
        zIndex={-1}
        className={cn(
          '[mask-image:radial-gradient(1250px_circle_at_right,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
      <div className='flex flex-col items-center justify-center min-h-screen p-6'>
        <p className='whitespace-pre-wrap text-center md:text-7xl text-5xl font-medium tracking-tighter text-black dark:text-white bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-400 text-transparent bg-clip-text'>
          Welcome
        </p>
        <Image
          src={`/logos/${companyName.toLowerCase()}.png`}
          alt={`${companyName} logo`}
          width={100}
          className='p-5'
          height={100}
          priority
        />
        <div className='w-full max-w-4xl aspect-video relative'>
          <iframe
            id='videoFrame'
            className='w-full h-full'
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
            title={`${companyName} YouTube Video`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
          <BorderBeam duration={4} size={200} />
        </div>
      </div>
    </>
  )
}
