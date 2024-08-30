import { AnimatedGridPatternDemo } from '@/components/magicui/AnimatedGridPattern'
import { TechStackCloud } from '@/components/magicui/TechStackCloud'
import LiveDemoLinkButton from '@/components/ui/LiveDemoLinkButton'
import { Navigation } from '@/components/ui/Navigation'
import SourceButton from '@/components/ui/SourceButton'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='w-full'>
          <Navigation />
          <AnimatedGridPatternDemo />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-center'>
          <div className='col-span-3'>
            <div className='flex items-baseline'>
              <h2 className='text-3xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-rose-500 to-red-600 text-transparent bg-clip-text'>
                7+ Years
              </h2>
            </div>
            <p className='mt-4 font-normal'>
              of experience working with some of best technology to build the
              perfect solution for you.
            </p>
            <p className='mt-4 font-normal'>
              Proven success, generating millions in value for companies of all
              sizes.
            </p>
            <div className='flex justify-normal items-center space-x-8 mt-4'>
              <img
                className='w-1/5 h-auto max-w-[80px]'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Vt1rdyw4FPgjpm0j86zbXgQm7-dl3GiYtg&s'
                alt='Amazon AWS Solutions Architect Certification'
              />
              <img
                className='w-1/5 h-auto max-w-[80px]'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg'
                alt='MIT Logo'
              />
              <img
                className='"w-1/5 h-auto  max-w-[150px]'
                src='https://upload.wikimedia.org/wikipedia/commons/9/98/Berklee_College_of_Music_logo_and_wordmark.svg'
                alt='Berklee College of Music Logo'
              />
              <Image
                className='"w-1/5 h-auto  max-w-[75px]'
                src={'/missouriseal.png'}
                alt='University of Missouri Seal'
                width='75'
                height='75'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <TechStackCloud />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-end w-full mt-8'>
          <div className='col-span-4'></div>
          <div className='lg:text-8xl font-bold text-right items-end col-span-1'>
            <span>CASE</span>
            <br></br>
            <span>STUDY</span>
            <br></br>
            <span>01</span>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 items-center'>
          <div className='col-span-3'>
            <div className='flex items-baseline'>
              <h2 className='text-2xl lg:text-7xl font-bold'>
                Desert Theatricals
              </h2>
            </div>
            <p className='font-extralight'>The City of Rancho Mirage</p>
            <p className='mt-4 font'></p>
            <p className='mt-4 font'>
              A premium User Experience built from the ground up to enable
              scaling and data analytics.
              <br />
              for the city&apos;s new amphitheater.
              <br />
              I proposed, designed, and implemented this in close collaboration
              with
              <br />
              colleagues and city stakeholders from the ground up.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
              <div className='col-span-1'>
                <p className='font-bold mt-4'>Key Technical Challenges:</p>
                <ul className='list-disc'>
                  <li>Prevent double-booking ticket sales.</li>
                  <li>Have an animated interactive seating map.</li>
                  <li>Have code-free administrative editing tools.</li>
                  <li>Have a lightning-fast UX.</li>
                </ul>
              </div>
              <div className='col-span-1'>
                <div className='flex space-x-8'>
                  <SourceButton />
                  <LiveDemoLinkButton />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <Image
              src={'/mockups.jpg'}
              alt='Desert Theatricals Demo Image'
              width='2000'
              height='1682'
              className='-ml-32'
            />
          </div>
        </div>
      </main>
      <div className='mobile z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white p-20 bg-gradient-to-r from-purple-600 via-rose-500 to-indigo-400 text-transparent bg-clip-text' style={{display: 'none'}}>
        <p>The mobile experience is not ready.</p>
        <br></br>
        <p>Please view on a device with a larger display.</p>
        <br></br>
        <p>Thank you.</p>
        <br></br>
        <br></br>
        <p>- Jayde</p>
      </div>
    </>
  )
}
