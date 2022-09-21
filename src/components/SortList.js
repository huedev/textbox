import MyListbox from './MyListbox'
import Button from './Button';
import StatusInfo from './StatusInfo';
import { useState, createRef } from "react"
import { useTimeoutFn } from 'react-use'

const SortList = () => {
  const textInput = createRef();
  const options = [
    "Natural (Ascending)",
    "Natural (Descending)",
    "Alphabetical (Ascending)",
    "Alphabetical (Descending)",
    "Length (Ascending)",
    "Length (Descending)",
    "Reverse Order",
    "Random Order",
  ];

  const [sorting, setSorting] = useState(options[0]);
  const [lastSortApplied, setLastSortApplied] = useState(options[0]);
  const [isStatusShowing, setIsStatusShowing] = useState(false);
  const [, , resetIsStatusShowing] = useTimeoutFn(() => setIsStatusShowing(false), 5000);

  function handleSortChange(option) {
    setSorting(option);
  }

  function sort() {
    switch (sorting) {
      case "Natural (Ascending)":
        textInput.current.value = sortNatural(textInput.current.value, false);
        break;
      case "Natural (Descending)":
        textInput.current.value = sortNatural(textInput.current.value, true);
        break;
      case "Alphabetical (Ascending)":
        textInput.current.value = sortAlphabetical(textInput.current.value, false);
        break;
      case "Alphabetical (Descending)":
        textInput.current.value = sortAlphabetical(textInput.current.value, true);
        break;
      case "Length (Ascending)":
        textInput.current.value = sortLength(textInput.current.value, false);
        break;
      case "Length (Descending)":
        textInput.current.value = sortLength(textInput.current.value, true);
        break;
      case "Reverse Order":
        textInput.current.value = sortReverse(textInput.current.value);
        break;
      case "Random Order":
        textInput.current.value = sortRandom(textInput.current.value);
        break;
      default:
        break;
    }
    setLastSortApplied(sorting);
    setIsStatusShowing(true);
    resetIsStatusShowing();
  }

  function sortNatural(str, reverse) {
    const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    const arr = str.split(/\r?\n/).filter(element => element);
    if (reverse) {
      return arr.sort(collator.compare).reverse().join('\r\n');
    } else {
      return arr.sort(collator.compare).join('\r\n');
    }
  }

  function sortAlphabetical(str, reverse) {
    const arr = str.split(/\r?\n/).filter(element => element);
    if (reverse) {
      return arr.sort().reverse().join('\r\n');
    } else {
      return arr.sort().join('\r\n');
    }
  }

  function sortLength(str, reverse) {
    const arr = str.split(/\r?\n/).filter(element => element);
    if (reverse) {
      return arr.sort((a, b) => b.length - a.length || b.localeCompare(a)).join('\r\n');
    } else {
      return arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\r\n');
    }
  }

  function sortReverse(str) {
    const arr = str.split(/\r?\n/).filter(element => element);
    return arr.reverse().join('\r\n');
  }

  function sortRandom(str) {
    const arr = str.split(/\r?\n/).filter(element => element);
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('\r\n');
  }

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Sort List</h2>
        <div className="flex mt-6">
          <MyListbox label="Sort" data={options} handleChange={handleSortChange} />
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
          <Button name="Sort" handleClick={sort} />
          <StatusInfo isShowing={isStatusShowing} text={`Sorted by ${lastSortApplied}`} />
        </div>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">There are several sorting methods to choose from:</p>
        <ul className="list-disc list-inside leading-7 -indent-4 ml-4 mt-6">
          <li><strong className="font-semibold">Natural</strong> - A human-friendly sorting method that works well with numbered lists, as it treats multi-digit numbers as a single number. For example, 2 would appear before 10 in an ascending list.</li>
          <li><strong className="font-semibold">Alphabetical</strong> - A sorting method that sorts alphabetically from A-Z and numerically from 0-9.</li>
          <li><strong className="font-semibold">Length</strong> - A sorting method that sorts by character length, then alphabetically to resolve ties.</li>
          <li><strong className="font-semibold">Reverse Order</strong> - A sorting method that simply reverses the order of the list.</li>
          <li><strong className="font-semibold">Random Order</strong> - A sorting method that randomly shuffles the order of the list. Just for fun!</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8">Examples</h3>
        <p className="leading-7 mt-6"><strong className="font-semibold">Natural</strong></p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          A1<br />
          A2<br />
          A10
        </pre>
        <p className="leading-7 mt-6"><strong className="font-semibold">Alphabetical</strong></p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          A1<br />
          A10<br />
          A2
        </pre>
        <p className="leading-7 mt-6"><strong className="font-semibold">Length</strong></p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          A<br />
          AA<br />
          AAA
        </pre>
      </div>
    </main>
  )
}

export default SortList
