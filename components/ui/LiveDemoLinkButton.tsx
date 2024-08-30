import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function LiveDemoLinkButton() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant={'ghost'} >
            <ArrowUpRight className='mr-2 h-4 w-4' /> Live Demo
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Releasing October 2024</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
