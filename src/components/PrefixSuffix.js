import Button from './Button';
import MySwitch from './MySwitch';
import StatusInfo from './StatusInfo';
import { useState, createRef } from "react"
import { useTimeoutFn } from 'react-use'

const PrefixSuffix = () => {
  const textInput = createRef();
  const prefixInput = createRef();
  const suffixInput = createRef();

  const [skipEmptyLines, setSkipEmptyLines] = useState(true);
  const [isStatusShowing, setIsStatusShowing] = useState(false);
  const [, , resetIsStatusShowing] = useTimeoutFn(() => setIsStatusShowing(false), 5000);

  function handleSkipEmptyLinesChange(value) {
    setSkipEmptyLines(value);
  }

  function addPrefixSuffix() {
    const str = textInput.current.value;
    const arr = str.split(/\r?\n/);
    const output = arr.map((line) => {
      if ((skipEmptyLines && line.length) || !skipEmptyLines) {
        return `${prefixInput.current.value}${line}${suffixInput.current.value}`;
      }
      return line;
    });
    textInput.current.value = output.join('\r\n');
    setIsStatusShowing(true);
    resetIsStatusShowing();
  }

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Add Prefix &amp; Suffix</h2>
        <div className="flex flex-row-reverse mt-6">
          <MySwitch label="Skip blank lines" default={skipEmptyLines} handleChange={handleSkipEmptyLinesChange} />
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
        <div className="flex flex-row-reverse items-center space-x-6 space-x-reverse mt-4">
          <Button name="Add" handleClick={addPrefixSuffix} />
          <StatusInfo isShowing={isStatusShowing} text={`Prefix and suffix added`} />
        </div>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">
          Add the desired prefix at the start of each line and the desired suffix at the end of each line.
        </p>
        <h3 className="text-xl font-semibold mt-8">Examples</h3>
        <p className="leading-7 mt-6">
          If <strong className="font-semibold">Skip blank lines</strong> is enabled, the prefix and suffix will only be added to lines with text.<br />
          Using prefix: <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">&lt;li&gt;</code> and suffix: <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">&lt;/li&gt;</code>.
        </p>
        <p className="leading-7 mt-6">
          Before:
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          Milk<br />
          <br />
          Eggs<br />
          <br />
          Bread
        </pre>
        <p className="leading-7 mt-6">
          <strong className="font-semibold">Skip blank lines</strong> enabled:
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          &lt;li&gt;Milk&lt;/li&gt;<br />
          <br />
          &lt;li&gt;Eggs&lt;/li&gt;<br />
          <br />
          &lt;li&gt;Bread&lt;/li&gt;
        </pre>
        <p className="leading-7 mt-6">
          <strong className="font-semibold">Skip blank lines</strong> disabled:
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          &lt;li&gt;Milk&lt;/li&gt;<br />
          &lt;li&gt;&lt;/li&gt;<br />
          &lt;li&gt;Eggs&lt;/li&gt;<br />
          &lt;li&gt;&lt;/li&gt;<br />
          &lt;li&gt;Bread&lt;/li&gt;
        </pre>
      </div>
    </main>
  )
}

export default PrefixSuffix
