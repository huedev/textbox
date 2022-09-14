import MyListbox from './MyListbox'
import { useState } from "react"

const ConvertCase = () => {
  const options = [
    "Uppercase",
    "Lowercase",
  ];

  const [conversion, setConversion] = useState(options[0]);

  function handleConversionChange(option) {
    setConversion(option);
  }
  
  return (
    <main className="py-8">
      <div className="bg-white rounded-none shadow lg:rounded-lg max-w-5xl mx-auto p-8">
        <h2 className="text-xl font-semibold">Convert Case</h2>
        <div className="flex mt-6">
          <MyListbox label="Conversion" data={options} onChange={handleConversionChange} />
        </div>
        <label htmlFor="input" className="inline-block mt-6 text-slate-600 text-sm">Input/Output</label>
        <textarea
          id="input"
          className="w-full h-80 p-2 mt-1 shadow border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
          spellCheck="false"
        >
        </textarea>
        <div className="flex flex-row-reverse mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 sm:text-sm font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Convert
          </button>
        </div>
      </div>
    </main>
  )
}
  
export default ConvertCase
