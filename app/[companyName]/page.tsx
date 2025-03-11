import React from 'react'

interface PageProps {
  params: { companyName: string }
}

const companyVideos: Record<string, string> = {
  apple: 'BqTrHaduFyQ?si=9nluu_tLZ_QZ1XWz',
  google: 'tb',
  riot: 'tbd'
}

export default function CompanyVideoPage({ params }: PageProps) {
  const { companyName } = params

  const videoId = companyVideos[companyName.toLowerCase()] || 'DEFAULT_VIDEO_ID'

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6'>
      <h1 className='text-xl font-bold mb-4'>hello, {companyName} team</h1>
      <div className='w-full max-w-4xl aspect-video'>
        <iframe
          src='https://www.youtube.com/embed/BqTrHaduFyQ?si=9nluu_tLZ_QZ1XWz'
          title={`${companyName} YouTube Video`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
