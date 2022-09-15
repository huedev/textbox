import { Link } from "react-router-dom"

const ToolListItem = (props) => {
  return (
    <Link to={props.destination} className="rounded-lg overflow-hidden bg-white px-6 py-6 shadow hover:shadow-lg">
      <div className="flex items-center space-x-1">
        <span className="w-6 h-6">{props.icon}</span>
        <h2 className="text-xl font-semibold">{props.name}</h2>
      </div>
      <p className="text-slate-600 mt-4 text-sm">{props.description}</p>
    </Link>
  )
}

export default ToolListItem
