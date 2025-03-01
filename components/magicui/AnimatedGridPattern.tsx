'use client'

import { cn } from '@/lib/utils'
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const images = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Express_Scripts_logo.svg',
    alt: 'Express Scripts',
    className: 'mt-3 w-[200px] mx-auto lg:w-1/6 lg:h-auto lg:max-w-[300px]'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Logo_Bayer.svg',
    alt: 'Bayer',
    className: "h-[70px] mx-auto lg:w-1/6 lg:h-auto lg:max-w-[80px]"
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Seal_of_the_United_States_Department_of_Education.svg',
    alt: 'Seal of the United States Department of Education',
    className: "h-[70px] mx-auto lg:w-1/6 lg:h-auto lg:max-w-[100px]"
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/AbbVie_logo.svg',
    alt: 'AbbVie',
    className: 'mt-3 w-[200px] mx-auto lg:w-1/6 lg:h-auto lg:max-w-[100px]'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Petco_Logo.svg',
    alt: 'Petco',
    className: 'mt-3 w-[125px] mx-auto lg:w-1/6 lg:h-auto lg:max-w-[150px]'
  },
  {
    src: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147971019/settings_images/VCRhiKjdRiKsatENi0mV_3Zaso_b_134x-8.png',
    alt: 'GrowthDay',
    className: 'mt-3 w-[200px] mx-auto lg:w-1/6 lg:h-auto lg:max-w-[400px]'
  }
]

export function AnimatedGridPatternDemo() {
  return (
    <>
      <div className='relative flex h-[500px] lg:h-[700px] w-full justify-center overflow-hidden rounded-lg bg-background p-20'>
        <div>
          <p className='z-10 whitespace-pre-wrap text-center md:text-7xl text-5xl font-medium tracking-tighter text-black dark:text-white p-20 bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-400 text-transparent bg-clip-text'>
            Welcome
          </p>
          <p className='z-10 whitespace-pre-wrap text-center text-xl font-bold tracking-tighter text-black dark:text-white mt-40'>
            TRUSTED BY
          </p>

          {/* Desktop Layout */}
          <div className='hidden 2xl:flex justify-center items-center space-x-24 p-4 mt-8'>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={image?.className || ''}
              />
            ))}
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(1250px_circle_at_right,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
          )}
        />
      </div>
      <div className='pt-16 2xl:hidden'>
        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          modules={[Pagination]}
          style={{ height: 100, textAlign: 'center' }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className={image.className}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
