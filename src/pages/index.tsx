import groq from 'groq';
import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';

import classNames from '@/lib/classNames';
import { ProjectType } from '@/lib/helper';

import Layout from '@/components/layout/Layout';
import { Project } from '@/components/Project';
import Seo from '@/components/Seo';

import client from '../../client';

const images = [
  {
    title: null,
    icon: null,
    url: '/alice.png',
    alt: 'Picture of me',
  },
  {
    title: null,
    icon: null,
    url: '/van.png',
    alt: 'Me and my white van',
  },

  {
    title: null,
    icon: AiFillHeart,
    url: '/doggo.png',
    alt: 'Little Märta',
  },
  {
    title: null,
    icon: null,
    url: '/quizzly.png',
    alt: 'Quizzly app',
  },
  {
    title: null,
    icon: null,
    url: '/his.png',
    alt: 'Högskolan i Skövde',
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePage = ({ props }: any) => {
  const { projectData } = props.data;

  return (
    <Layout>
      <Seo templateTitle='Alice Anglesjö' />

      <section className='grid grid-cols-6 gap-8 pt-6 md:pt-12 lg:px-12'>
        <div className='col-span-6 p-8 md:col-span-4'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Lorem ipsum dolor sit amet
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
        </div>
        {/* <div className='duration-350 col-span-6 px-8 transition ease-in-out md:col-span-2 md:hover:-rotate-2'>
          <div className=' border border-black bg-white p-4 shadow-lg dark:border-zinc-600 dark:bg-zinc-700'>
            <Image
              src='/alice.png'
              alt='profil pic'
              width='0'
              height='0'
              sizes='100vw'
              className=' h-auto w-full  shadow'
            />
            <p className='py-4 '>Lorem ipsum dolor sit amet</p>
          </div>
        </div> */}
      </section>
      <section className='my-8 flex justify-center gap-5 py-4 sm:gap-8'>
        {images.map((pic, i) => (
          <div
            className={classNames(
              i % 2 ? 'rotate-2' : '-rotate-2',
              'relative w-44 flex-none overflow-hidden border border-black bg-white p-4 shadow-lg dark:border-zinc-600 dark:bg-zinc-700 md:w-72 '
            )}
            key={i}
          >
            <Image
              src={pic.url}
              alt={pic.alt}
              width='0'
              height='0'
              sizes='100vw'
              className=' h-auto w-full shadow'
            />
            <span className='flex items-center justify-end py-2 md:py-4'>
              {pic.icon && (
                <pic.icon
                  size={22}
                  className='text-palette-pink dark:text-palette-yellow mx-1'
                  aria-hidden='true'
                />
              )}
            </span>
          </div>
        ))}
      </section>
      <section className=' grid grid-cols-6 gap-6 lg:px-12'>
        <div className='col-span-6 md:col-span-4'>
          <div aria-label='sidebar' className='sticky top-4'>
            {Object.values(projectData).map((project, i) => (
              <Project project={project as ProjectType} key={i} />
            ))}
          </div>
        </div>
        <div className='order-first col-span-6 border-l p-8 dark:border-zinc-700  md:order-last  md:col-span-2 md:border-black md:p-6'>
          <div aria-label='sidebar' className='sticky top-4'>
            <h3 className='text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 '>
              Work
            </h3>
            <ul>
              <li className='flex items-center justify-between text-zinc-600 dark:text-zinc-400'>
                <span className='flex items-center'>
                  <Image
                    src='/alice.png'
                    alt='profil pic'
                    width='0'
                    height='0'
                    sizes='100vw'
                    className=' mr-3 h-9 w-9 rounded-full bg-white p-1'
                  />
                  <div>
                    <p>Petli</p>
                    <p className='text-xs'>Frontend developer</p>
                  </div>{' '}
                </span>
                <p className='text-sm'>2022</p>
              </li>
            </ul>
            <a href='/profile.pdf' download='profile.pdf'>
              <button className='w-full rounded-md bg-zinc-100 px-4 py-2 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600/80 dark:hover:text-zinc-50'>
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
const projectQuery = groq`*[_type == "project"]{
  title,
  slug,
  createdAt,
  body,
  "categories": categories[]->title,
}`;
HomePage.getInitialProps = async function () {
  const projectData = await client.fetch(projectQuery);

  const data = { projectData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
};
export default HomePage;
