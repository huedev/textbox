import { Switch } from '@headlessui/react'

const MySwitch = (props) => {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={props.currentValue}
          onChange={event => props.handleChange(event, props.name)}
          className={`${props.currentValue ? 'bg-indigo-500 dark:bg-indigo-700' : 'bg-slate-400 dark:bg-slate-700'}
            relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">{props.label}</span>
          <span
            aria-hidden="true"
            className={`${props.currentValue ? 'translate-x-5' : 'translate-x-0'}
              pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <Switch.Label className="ml-2 text-sm text-slate-600 dark:text-slate-400">{props.label}</Switch.Label>
      </div>
    </Switch.Group>
  )
}

export default MySwitch
