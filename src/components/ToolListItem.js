import { Link } from "react-router-dom"

const ToolListItem = (props) => {
  return (
    <Link to={props.destination} className="flex flex-row rounded-lg overflow-hidden shadow hover:shadow-lg">
      <div className="grow bg-white px-6 py-6">
        <h2 className="text-xl font-semibold">{props.name}</h2>
        <p className="text-slate-600 mt-4 sm:text-sm">{props.description}</p>
      </div>
    </Link>
  )
}

export default ToolListItem
