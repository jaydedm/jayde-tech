'use client'

import { IconCloud } from './icon-cloud'

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'vercel',
  'testinglibrary',
  'jest',
  'graphql',
  'tailwindcss',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'redis',
  'redux',
  'reactquery',
  'openai',
  'trpc',
  'figma'
]

export function TechStackCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className='relative flex h-full w-full max-w-[80rem] items-center justify-center overflow-hidden rounded-lgpx-20 pb-8 pt-8 '>
      <IconCloud images={images} />
    </div>
  )
}
