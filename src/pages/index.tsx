import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
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
        <div className='duration-350 col-span-6 p-8 transition ease-in-out md:col-span-2 md:hover:-rotate-2'>
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
        </div>
      </section>
      <section className=' grid grid-cols-6 gap-6 lg:px-12'>
        <div className='col-span-6 md:col-span-4'>
          <div aria-label='sidebar' className='sticky top-4'>
            {[0, 1, 2, 3].map((i) => (
              <article
                className='rounded-2xl p-8 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                key={i}
              >
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
                      September 5, 2022
                    </time>
                    <h3 className='text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 '>
                      Bostadsbetyg
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

                <p className='mt-4 text-base text-zinc-600 dark:text-zinc-400'>
                  I’m Spencer, a software designer and entrepreneur based in New
                  York City. I’m the founder and CEO of Planetaria, where we
                  develop technologies that empower regular people to explore
                  space on their own terms.
                </p>
                <div className='flex flex-wrap items-center pt-12 '>
                  {[0, 1, 2].map((i) => (
                    <div
                      className='mr-3 rounded-full border border-zinc-200 bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm text-white md:mr-4'
                      key={i}
                    >
                      NextJS
                    </div>
                  ))}
                </div>
              </article>
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
}
