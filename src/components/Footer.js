import { Link } from 'react-router-dom'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

const Footer = () => {
  return (
    <footer className="px-4 text-slate-600 dark:text-slate-400 text-sm">
      <div className="border-t border-slate-300 dark:border-slate-700 max-w-5xl mx-auto py-6">
        <div className="flex justify-between">
          <span>&copy; 2022 huedev</span>
          <nav className="flex space-x-4 text-indigo-600 dark:text-indigo-400">
            <Link to="/about" className="hover:text-indigo-700 dark:hover:text-indigo-300">
              About
            </Link>
            <a href="https://github.com/huedev/textbox" target="_blank" rel="noreferrer" className="flex items-center hover:text-indigo-700 dark:hover:text-indigo-300">
              GitHub
              <ArrowTopRightOnSquareIcon className="ml-1 h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
