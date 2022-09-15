const Button = (props) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 sm:text-sm font-semibold text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}

export default Button
