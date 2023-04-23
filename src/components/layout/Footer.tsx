import { AiFillGithub, AiFillHeart, AiFillLinkedin } from 'react-icons/ai';
const navigation = [
  {
    name: 'Linkedin',
    href: '#',
    icon: AiFillLinkedin,
  },

  {
    name: 'GitHub',
    href: '#',
    icon: AiFillGithub,
  },
];

export const Footer = () => {
  return (
    <footer className='border-t border-black bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='hover:text-palette-green text-black'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0 '>
          <span className='flex items-center text-center text-sm leading-5 text-gray-500'>
            &copy; {new Date().getFullYear()} | Developed with
            <AiFillHeart size={16} className='text-palette-pink mx-1' /> by
            Alice Anglesjö
          </span>
        </div>
      </div>
    </footer>
  );
};
