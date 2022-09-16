import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="px-4 text-slate-600 dark:text-slate-400 text-sm">
      <div className="border-t border-slate-300 dark:border-slate-700 max-w-5xl mx-auto py-6">
        <div className="flex justify-between">
          <span>&copy; 2022 huedev</span>
          <Link to="/about" className="hover:text-slate-700 dark:hover:text-slate-300">About</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
