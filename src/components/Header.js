import { Link } from 'react-router-dom'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-indigo-500 shadow-lg px-4 py-3">
      <div className="max-w-5xl mx-auto">
        <div className="flex">
          <Link to="/" className="flex items-center text-2xl text-white">
            <WrenchScrewdriverIcon className="w-6 h-6 mr-1" />
            <h1>Textbox</h1>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
