import Button from './Button';
import MySwitch from './MySwitch';
import StatusInfo from './StatusInfo';
import { useState } from "react"
import { useTimeoutFn } from 'react-use'

const PrefixSuffix = () => {
  const [formData, setFormData] = useState(
    {
      matchCase: false,
      find: "",
      replace: "",
      text: "",
    },
  );
  const [replacementCount, setReplacementCount] = useState(0);
  const [isStatusShowing, setIsStatusShowing] = useState(false);
  const [, , resetIsStatusShowing] = useTimeoutFn(() => setIsStatusShowing(false), 5000);

  function handleChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function handleHeadlessUIChange(value, name) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const regex = formData.matchCase ? new RegExp(formData.find, 'g') : new RegExp(formData.find, 'gi');
    
    const count = formData.text.split(regex).length - 1;
    setReplacementCount(count);

    const output = formData.text.replace(regex, formData.replace);
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        text: output
      }
    });

    setIsStatusShowing(true);
    resetIsStatusShowing();
  }

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Find &amp; Replace</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row-reverse mt-6">
            <MySwitch
              label="Match case"
              handleChange={handleHeadlessUIChange}
              name="matchCase"
              currentValue={formData.matchCase}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <label>
              <span className="block text-slate-600 dark:text-slate-400 text-sm">Find text</span>
              <input
                className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="text"
                onChange={handleChange}
                name="find"
                value={formData.find}
              />
            </label>
            <label>
              <span className="block text-slate-600 dark:text-slate-400 text-sm">Replace with</span>
              <input
                className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="text"
                onChange={handleChange}
                name="replace"
                value={formData.replace}
              />
            </label>
          </div>
          <label className="block mt-6">
            <span className="block text-slate-600 dark:text-slate-400 text-sm">Input/Output</span>
            <textarea
              className="w-full h-80 p-2 mt-1 shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              spellCheck="false"
              onChange={handleChange}
              name="text"
              value={formData.text}
            />
          </label>
          <div className="flex flex-row-reverse items-center space-x-6 space-x-reverse mt-4">
            <Button name="Replace" />
            <StatusInfo
              isShowing={isStatusShowing}
              text={replacementCount > 0 ? `Made ${replacementCount} replacements` : "No matches found"}
            />
          </div>
        </form>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">
          Find all instances of a string and replace them with a different string.
        </p>
        <h3 className="text-xl font-semibold mt-8">Match case</h3>
        <p className="leading-7 mt-6">
          If <strong className="font-semibold">Match case</strong> is enabled, all occurances of the string are replaced regardless of the letter case.<br />
          Using find: <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">h</code> and replace: <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">X</code>.
        </p>
        <p className="leading-7 mt-6">
          Before:
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          Hello World!
        </pre>
        <p className="leading-7 mt-6">
          <strong className="font-semibold">Match case</strong> enabled:
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          Hello World!
        </pre>
        <p className="leading-7 mt-6">
          <strong className="font-semibold">Match case</strong> disabled:
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          Xello World!
        </pre>
      </div>
    </main>
  )
}

export default PrefixSuffix
