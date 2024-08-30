import { Github } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function SourceButton() {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button >
            <Github className='mr-2 h-4 w-4' /> Source Code
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Publically Opening Soon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
