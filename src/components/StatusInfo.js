import { Transition } from '@headlessui/react'

const StatusInfo = (props) => {
  return (
    <Transition
      show={props.isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <span className="text-indigo-600 dark:text-indigo-400 text-sm">
        {props.text}
      </span>
    </Transition>
  )
}

export default StatusInfo
