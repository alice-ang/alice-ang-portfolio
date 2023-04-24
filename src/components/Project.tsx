import { PortableText } from '@portabletext/react';
import Image from 'next/image';

import { ProjectType } from '@/lib/helper';

type Props = {
  project: ProjectType;
};

export const Project = ({ project }: Props) => {
  return (
    <article className='rounded-2xl p-8 hover:bg-zinc-100 dark:hover:bg-zinc-700'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <time
            className='relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500'
            dateTime='2022-09-05'
          >
            <span
              className='absolute inset-y-0 left-0 flex items-center'
              aria-hidden='true'
            >
              <span className='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500'></span>
            </span>
            Developed in {new Date(project.createdAt).getFullYear()}
          </time>
          <h3 className='text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 '>
            {project.title}
          </h3>
        </div>

        <Image
          src='/alice.png'
          alt='profil pic'
          width='0'
          height='0'
          sizes='100vw'
          className=' h-9 w-9 rounded-full shadow'
        />
      </div>
      <PortableText value={project.body} />
      <p className='mt-4 text-base text-zinc-600 dark:text-zinc-400'></p>
      {project.categories && (
        <div className='flex flex-wrap items-center '>
          {project.categories.map((category, i) => (
            <div
              className='mb-2 mr-3 rounded-full border border-zinc-200 bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm text-white md:mr-4'
              key={i}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
