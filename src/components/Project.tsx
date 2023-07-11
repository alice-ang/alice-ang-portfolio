import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useState } from 'react';

import { ProjectType } from '@/lib/helper';
import { Mixpanel } from '@/lib/mixpanel';
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
        onClick={() => {
          toggle();
          Mixpanel.track('open_project', {
            name: project.title,
          });
        }}
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
        </div>

        <span className='mt-4 grid grid-cols-2 text-base text-zinc-600 dark:text-zinc-400'>
          <div className='col-span-2 md:col-span-1'>
            <PortableText value={project.body} />
          </div>

          {project.mainImage && (
            <Image
              src={project.mainImage}
              alt={project.title}
              width='0'
              height='0'
              sizes='100vw'
              className=' col-span-2 my-4 h-full w-full rounded border border-black object-cover shadow md:col-span-1 md:mx-4 md:my-0'
            />
          )}
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
              <span className='flex items-center space-x-4 py-1'>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    onClick={() =>
                      Mixpanel.track('visit_project', {
                        type: 'github',
                        link: project.githubUrl,
                      })
                    }
                  >
                    <p className='hover:text-palette-green dark:text-palette-green text-sm font-semibold hover:underline'>
                      GitHub
                    </p>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target='_blank'
                    onClick={() =>
                      Mixpanel.track('visit_project', {
                        type: 'demo',
                        link: project.demoUrl,
                      })
                    }
                  >
                    <p className='hover:text-palette-green dark:text-palette-green text-sm font-semibold hover:underline'>
                      Demo
                    </p>
                  </a>
                )}
              </span>
            </div>

            <PortableText value={project.body} />
            {project.categories && (
              <div className='mt-4 flex flex-wrap items-center'>
                {project.categories.map((category, i) => (
                  <div
                    className='dark:bg-palette-yellow mb-2 mr-3 rounded-full border border-black bg-black px-4 py-1 text-xs text-white dark:text-black
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
