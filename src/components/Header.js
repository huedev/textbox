import { Link } from 'react-router-dom'
import { WrenchScrewdriverIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import useDarkMode from '../hooks/useDarkMode'

const Header = () => {
  const [currentTheme, setTheme] = useDarkMode();

  return (
    <header className="sticky top-0 z-30 bg-indigo-500 dark:bg-slate-800 shadow-lg px-4 py-3">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between text-white dark:text-slate-200">
          <Link to="/" className="flex items-center text-2xl hover:text-indigo-100 dark:hover:text-slate-300">
            <WrenchScrewdriverIcon className="w-6 h-6 mr-1" />
            <h1>Textbox</h1>
          </Link>
          <button onClick={() => setTheme(currentTheme)} className="hover:text-indigo-100 dark:hover:text-slate-300">
            {currentTheme === "light" ? (
              <MoonIcon className="w-6 h-6" />
            ) : (
              <SunIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
