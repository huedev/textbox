const Button = (props) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 dark:bg-indigo-700 py-2 px-4 text-sm font-semibold text-white shadow hover:bg-indigo-600 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900"
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  )
}

export default Button
