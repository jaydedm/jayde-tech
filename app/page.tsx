import { AnimatedGridPatternDemo } from '@/components/magicui/AnimatedGridPattern'
import { TechStackCloud } from '@/components/magicui/TechStackCloud'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full'>
        <div className='font-extrabold text-l text-right'>JAYDE MITCHELL</div>
        <AnimatedGridPatternDemo />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 items-center'>
        <div className='col-span-3'>
          <div className='flex items-baseline'>
            <h2 className='text-3xl lg:text-8xl font-bold'>7+ Years</h2>
          </div>
          <p className='mt-4 font-extralight'> of experience working with some of best technology to build the perfect solution for you.</p>
          <p className='mt-4 font-extralight'> Proven success, generating millions in value for companies of all sizes.</p>
        </div>
        <div className='col-span-2'>
          <TechStackCloud />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 items-end w-full mt-16'>
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
            <h2 className='text-2xl lg:text-7xl font-bold'>Desert Theatricals</h2>
          </div>
          <p className='font-extralight'>The City of Rancho Mirage</p>
          <p className='mt-4 font'></p>
          <p className='mt-4 font'> Proven success, generating millions in value for companies of all sizes.</p>
        </div>
        <div className='col-span-2'>
          <TechStackCloud />
        </div>
      </div>
    </main>
  )
}
