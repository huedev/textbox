import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header className="bg-indigo-500 px-4 py-3 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          <a href="/" className="flex items-center text-2xl text-white">
            <WrenchScrewdriverIcon className="w-6 h-6 mr-1" />
            <h1>Textbox</h1>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
