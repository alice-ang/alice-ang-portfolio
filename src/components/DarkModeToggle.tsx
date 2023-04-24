import { MdDarkMode } from 'react-icons/md';

export const DarkModeToggle = () => {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none');
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle('dark');

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type='button'
      aria-label='Toggle dark mode'
      className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={toggleMode}
    >
      <MdDarkMode
        className='hover:fill-palette-green dark:fill-palette-yellow fill-black'
        size={18}
      />
    </button>
  );
};
