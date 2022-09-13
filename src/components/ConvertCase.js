import MyListbox from './MyListbox'

const options = [
  { name: 'Uppercase' },
  { name: 'Lowercase' },
];

const ConvertCase = () => {
    return (
      <main className="py-8">
        <div className="bg-white rounded-none shadow lg:rounded-lg max-w-5xl mx-auto p-8">
          <h2 className="text-xl font-semibold">Convert Case</h2>
          <div className="flex mt-6">
            <MyListbox data={options} label="Options" />
          </div>
          <label htmlFor="input" className="inline-block mt-6 text-slate-600 text-sm">Input</label>
          <textarea
            id="input"
            className="w-full h-80 p-2 mt-1 shadow border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 sm:text-sm"
            spellCheck="false"
          >
          </textarea>
        </div>
      </main>
    )
  }
  
  export default ConvertCase
  