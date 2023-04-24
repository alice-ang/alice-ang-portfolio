import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiFillSmile } from 'react-icons/ai';

import { ProjectType } from '@/lib/helper';
import { useModal } from '@/lib/useModal';

import { Modal } from '@/components/Modal';

type Props = {
  project: ProjectType;
};

export const Project = ({ project }: Props) => {
  const { isShown, toggle } = useModal();
  const [heroImage, setHeroImage] = useState(
    project?.imagesGallery?.[0] ?? project.mainImage
  );

  return (
    <>
      <article
        className='cursor-pointer rounded-2xl p-8 hover:bg-zinc-100 dark:hover:bg-zinc-700'
        onClick={toggle}
      >
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <time
              className='z-2 relative order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500'
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
            <div>
              <h3 className='text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 '>
                {project.title}
              </h3>
            </div>
          </div>

          {/* <Image
            src='/alice.png'
            alt='profil pic'
            width='0'
            height='0'
            sizes='100vw'
            className=' h-9 w-9  rounded-full shadow'
          /> */}
        </div>

        <span className='mt-4 text-base text-zinc-600 dark:text-zinc-400'>
          <PortableText value={project.body} />
        </span>
      </article>
      <Modal
        isShown={isShown}
        toggle={toggle}
        modalContent={
          <div>
            <Image
              src={heroImage}
              alt={project.title}
              width='0'
              height='0'
              sizes='100vw'
              className=' h-auto max-h-[700px] w-full rounded object-contain shadow'
            />

            <div className='my-2 grid grid-cols-4 gap-2 md:my-4 md:gap-4'>
              {project.imagesGallery &&
                project.imagesGallery.map((image, i) => (
                  <Image
                    src={image}
                    alt={project.title}
                    width='0'
                    height='0'
                    sizes='100vw'
                    className=' col-span-1 h-auto w-full rounded shadow'
                    key={i}
                    onClick={() => setHeroImage(image)}
                  />
                ))}
            </div>
            <div className=''>
              <h3 className='text-zinc-800 dark:text-zinc-100'>
                {project.title}
              </h3>
              <span className='flex items-center'>
                {project.githubUrl && (
                  <a href={project.githubUrl} target='_blank'>
                    <AiFillGithub className='dark:fill-palette-yellow my-2 mr-2 h-6 w-6 cursor-pointer dark:hover:fill-zinc-600' />
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target='_blank'>
                    <AiFillSmile
                      className='dark:fill-palette-yellow my-2 mr-2 h-6 w-6 cursor-pointer dark:hover:fill-zinc-600'
                      cursor-pointer
                    />
                  </a>
                )}
              </span>
            </div>

            <PortableText value={project.body} />
            {project.categories && (
              <div className='mt-4 flex flex-wrap items-center'>
                {project.categories.map((category, i) => (
                  <div
                    className='bg-palette-yellow mb-2 mr-3 rounded-full border border-black px-4 py-1 text-xs text-black
                    md:mr-4'
                    key={i}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
        }
      />
    </>
  );
};
