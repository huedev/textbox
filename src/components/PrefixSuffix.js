import Button from './Button';
import MySwitch from './MySwitch';
import StatusInfo from './StatusInfo';
import { useState } from "react"
import { useTimeoutFn } from 'react-use'

const PrefixSuffix = () => {
  const [formData, setFormData] = useState(
    {
      skipEmptyLines: true,
      prefix: "",
      suffix: "",
      text: "",
    },
  );
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
    const arr = formData.text.split(/\r?\n/);
    const output = arr.map(line => {
      if ((formData.skipEmptyLines && line.length) || !formData.skipEmptyLines) {
        return `${formData.prefix}${line}${formData.suffix}`;
      }
      return line;
    });
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        text: output.join('\r\n')
      }
    });
    setIsStatusShowing(true);
    resetIsStatusShowing();
  }

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Add Prefix &amp; Suffix</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row-reverse mt-6">
            <MySwitch
              label="Skip blank lines"
              handleChange={handleHeadlessUIChange}
              name="skipEmptyLines"
              currentValue={formData.skipEmptyLines}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <label>
              <span className="block text-slate-600 dark:text-slate-400 text-sm">Prefix</span>
              <input
                className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="text"
                onChange={handleChange}
                name="prefix"
                value={formData.prefix}
              />
            </label>
            <label>
              <span className="block text-slate-600 dark:text-slate-400 text-sm">Suffix</span>
              <input
                className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="text"
                onChange={handleChange}
                name="suffix"
                value={formData.suffix}
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
            <Button name="Add" />
            <StatusInfo isShowing={isStatusShowing} text={`Prefix and suffix added`} />
          </div>
        </form>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">
          Add the desired prefix at the start of each line and the desired suffix at the end of each line.
        </p>
        <h3 className="text-xl font-semibold mt-8">Skip blank lines</h3>
        <p className="leading-7 mt-6">
          If <strong className="font-semibold">Skip blank lines</strong> is enabled, the prefix and suffix will only be added to lines with text.<br />
          In the example below, prefix is <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">&lt;li&gt;</code> and suffix is <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">&lt;/li&gt;</code>.
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
