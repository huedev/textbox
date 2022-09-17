import { Link } from "react-router-dom"

const ToolListItem = (props) => {
  return (
    <Link to={props.destination} className="rounded-lg overflow-hidden border border-slate-300 dark:border-transparent dark:border-t-white/5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 px-6 py-6 shadow">
      <div className="flex items-center space-x-1">
        <span className="w-6 h-6">{props.icon}</span>
        <h3 className="text-xl font-semibold">{props.name}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm">{props.description}</p>
    </Link>
  )
}

export default ToolListItem
