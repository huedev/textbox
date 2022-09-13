import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="px-4 text-slate-600">
      <div className="border-t border-slate-100 max-w-6xl mx-auto py-4">
        <div className="flex justify-between">
          <span>&copy; 2022 huedev</span>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
