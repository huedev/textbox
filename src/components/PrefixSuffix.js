import Button from './Button';
import { useState, createRef } from "react"
import MySwitch from './MySwitch';

const PrefixSuffix = () => {
  const textInput = createRef();
  const prefixInput = createRef();
  const suffixInput = createRef();

  const [skipEmptyLines, setSkipEmptyLines] = useState(true);

  function handleSkipEmptyLinesChange(value) {
    setSkipEmptyLines(value);
  }

  function applyPrefixSuffix() {
    const str = textInput.current.value;
    const arr = str.split(/\r?\n/);
    for (let i = 0; i < arr.length; i++) {
      if ((skipEmptyLines && arr[i].length) || !skipEmptyLines) {
        arr[i] = prefixInput.current.value + arr[i] + suffixInput.current.value;
      }
    }
    textInput.current.value = arr.join('\r\n');
  }

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Add Prefix &amp; Suffix</h2>
        <div className="flex flex-row-reverse mt-6">
          <MySwitch label="Skip blank lines" default={skipEmptyLines} onChange={handleSkipEmptyLinesChange} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <label className="block text-sm">
            <span className="text-slate-600 dark:text-slate-400">Prefix</span>
            <input
              ref={prefixInput}
              className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              type="text"
            />
          </label>
          <label className="block text-sm">
            <span className="text-slate-600 dark:text-slate-400">Suffix</span>
            <input
              ref={suffixInput}
              className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              type="text"
            />
          </label>
        </div>
        <label className="block mt-6 text-sm">
          <span className="text-slate-600 dark:text-slate-400">Input/Output</span>
          <textarea
            ref={textInput}
            className="w-full h-80 p-2 mt-1 shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            spellCheck="false"
          >
          </textarea>
        </label>
        <div className="flex flex-row-reverse mt-4">
          <Button name="Apply" onClick={applyPrefixSuffix} />
        </div>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">
          Add the desired prefix at the start of each line and the desired suffix at the end of each line.<br />
          If <strong className="font-semibold">Skip blank lines</strong> is enabled, the prefix and suffix will only be added to lines with text.
        </p>
      </div>
    </main>
  )
}

export default PrefixSuffix
