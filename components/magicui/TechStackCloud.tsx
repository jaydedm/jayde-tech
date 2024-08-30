import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "tailwindcss",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  'redis',
  'redux',
  "visualstudiocode",
  'reactquery',
  'openai',
  'trpc',
  "figma",
];

export function TechStackCloud() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lgpx-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
