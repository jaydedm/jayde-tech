import { cn } from '@/lib/utils'
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern'

export function AnimatedGridPatternDemo() {
  return (
    <div className='relative flex h-[500px] w-full  justify-center overflow-hidden rounded-lg bg-background p-20 '>
      <div>
        {/* <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' height={50} width={50} className='text-right absolute right-0 bottom-0'/>
          <img src='https://coursera-university-assets.s3.amazonaws.com/33/e428228bb140e69ae9313e7c295cb4/berklee_coursera_design_assets_logo_4.png' height={100} width={100} className='text-right absolute right-16 bottom-0'/>
        </div> */}
        <p className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white p-20'>
          Welcome
        </p>
          <div className='flex justify-center items-center space-x-24 p-4 mt-16'>
            <img
              className='w-1/5 h-automax-w-[300px]'
              src='https://upload.wikimedia.org/wikipedia/en/a/a4/Express_Scripts_logo.svg'
              alt='Express Scripts'
            />
            <img
              className='"w-1/5 h-auto  max-w-[80px]'
              src='https://upload.wikimedia.org/wikipedia/commons/f/f7/Logo_Bayer.svg'
              alt='Bayer'
            />
            <img
              className='w-1/5 h-auto  max-w-[100px]'
              src='https://upload.wikimedia.org/wikipedia/commons/a/ad/Seal_of_the_United_States_Department_of_Education.svg'
              alt='Seal of the United States Department of Education'
            />
            <img
              className='w-1/5 max-w-[100px]]'
              src='https://upload.wikimedia.org/wikipedia/commons/c/cc/AbbVie_logo.svg'
              alt='AbbVie'
            />
            <img
              className='w-1/5 h-auto max-w-[150px]'
              src='https://upload.wikimedia.org/wikipedia/commons/a/af/Petco_Logo.svg'
              height={115}
              width={115}
              alt='Petco'
            />
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
  )
}
