import Button from './Button';
import MyListbox from './MyListbox'
import MySwitch from './MySwitch';
import StatusInfo from './StatusInfo';
import { useEffect, useState } from "react"
import { useTimeoutFn } from 'react-use'

const AlphanumericEncoder = require('alphanumeric-encoder')

const PrefixSuffix = () => {
  const options = [
    "Numbers",
    "Letters",
  ];

  const [formData, setFormData] = useState(
    {
      countStyle: options[0],
      uppercase: true,
      startAt: 1,
      prefix: "",
      suffix: ". ",
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

  useEffect(() => {
    switch (formData.countStyle) {
      case "Numbers":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            startAt: 1
          }
        });
        break;
      case "Letters":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            startAt: formData.uppercase ? "A" : "a"
          }
        });
        break;
      default:
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            startAt: 1
          }
        });
    }
  }, [formData.countStyle, formData.uppercase])

  function handleSubmit(event) {
    event.preventDefault();
    const encoder = new AlphanumericEncoder()
    const arr = formData.text.split(/\r?\n/);
    let i = isNaN(encoder.decode(formData.startAt)) ? 0 : encoder.decode(formData.startAt) - 1;
    const output = arr.map((line) => {
      i++;
      switch (formData.countStyle) {
        case "Numbers":
          return `${formData.prefix}${i}${formData.suffix}${line}`;
        case "Letters":
          return `${formData.prefix}${encoder.encode(i)}${formData.suffix}${line}`;
        default:
          return line;
      }
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
        <h2 className="text-2xl font-semibold">Add Line Numbers</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row-reverse items-center gap-6 mt-6">
            <MyListbox
              label="Style"
              data={options}
              handleChange={handleHeadlessUIChange}
              name="countStyle"
              currentValue={formData.countStyle}
            />
            {
              formData.countStyle !== "Numbers" &&
              <div className="mt-6">
                <MySwitch
                  label="Uppercase"
                  handleChange={handleHeadlessUIChange}
                  name="uppercase"
                  currentValue={formData.uppercase}
                />
              </div>
            }
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
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
              <span className="block text-slate-600 dark:text-slate-400 text-sm">Start at</span>
              <input
                className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="text"
                onChange={handleChange}
                name="startAt"
                value={formData.startAt}
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
            <StatusInfo isShowing={isStatusShowing} text={`Line numbers added`} />
          </div>
        </form>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">
          Add sequential numbers or letters at the beginning of each line.
        </p>
        <h3 className="text-xl font-semibold mt-8">Examples</h3>
        <p className="leading-7 mt-6">
          Using style set to <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">Numbers</code>, prefix set to blank, starting at <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">1</code>, and suffix set to <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">. </code>.
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          1. List item<br />
          2. List item<br />
          3. List item<br />
          4. List item<br />
          5. List item
        </pre>
        <p className="leading-7 mt-6">
          Using style set to <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">Letters</code>, prefix set to <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">(</code>, starting at <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">A</code>, and suffix set to <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">) </code>.
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          (A) List item<br />
          (B) List item<br />
          (C) List item<br />
          (D) List item<br />
          (E) List item
        </pre>
      </div>
    </main>
  )
}

export default PrefixSuffix
