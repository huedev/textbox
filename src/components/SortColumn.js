import MyListbox from './MyListbox'
import Button from './Button';
import StatusInfo from './StatusInfo';
import { useState } from "react"
import { useTimeoutFn } from 'react-use'

const SortList = () => {
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

  const [formData, setFormData] = useState(
    {
      sorting: options[0],
      sortColumn: 1,
      columnDelimiter: ",",
      text: "",
    },
  );
  const [lastSortApplied, setLastSortApplied] = useState(options[0]);
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
    switch (formData.sorting) {
      case "Natural (Ascending)":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortNatural(prevFormData.text, false)
          }
        })
        break;
      case "Natural (Descending)":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortNatural(prevFormData.text, true)
          }
        })
        break;
      case "Alphabetical (Ascending)":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortAlphabetical(prevFormData.text, false)
          }
        })
        break;
      case "Alphabetical (Descending)":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortAlphabetical(prevFormData.text, true)
          }
        })
        break;
      case "Length (Ascending)":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortLength(prevFormData.text, false)
          }
        })
        break;
      case "Length (Descending)":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortLength(prevFormData.text, true)
          }
        })
        break;
      case "Reverse Order":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortReverse(prevFormData.text)
          }
        })
        break;
      case "Random Order":
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            text: sortRandom(prevFormData.text)
          }
        })
        break;
      default:
        break;
    }
    setLastSortApplied(formData.sorting);
    setIsStatusShowing(true);
    resetIsStatusShowing();
  }

  function sortNatural(str, reverse) {
    const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    const lines = str.split(/\r?\n/).filter(element => element);
    const table = lines.map(line => {
      return line.split(formData.columnDelimiter).filter(element => element);
    });
    const sortedTable = table.sort((a, b) => {
      return collator.compare(a[formData.sortColumn - 1], b[formData.sortColumn - 1]);
    });
    
    if (reverse) {
      sortedTable.reverse();
    }

    const output = sortedTable.map(row => {
      return row.join(formData.columnDelimiter);
    }).join('\r\n');
    return output;
  }

  function sortAlphabetical(str, reverse) {
    const lines = str.split(/\r?\n/).filter(element => element);
    const table = lines.map(line => {
      return line.split(formData.columnDelimiter).filter(element => element);
    });
    const sortedTable = table.sort((a, b) => {
      if (a[formData.sortColumn - 1] < b[formData.sortColumn - 1]) {
        return -1;
      }
      if (a[formData.sortColumn - 1] > b[formData.sortColumn - 1]) {
        return 1;
      }
      return 0;
    });
    
    if (reverse) {
      sortedTable.reverse();
    }
    
    const output = sortedTable.map(row => {
      return row.join(formData.columnDelimiter);
    }).join('\r\n');
    return output;
  }

  function sortLength(str, reverse) {
    const lines = str.split(/\r?\n/).filter(element => element);
    const table = lines.map(line => {
      return line.split(formData.columnDelimiter).filter(element => element);
    });
    const sortedTable = table.sort((a, b) => {
      if (!a[formData.sortColumn - 1] || !b[formData.sortColumn - 1]) {
        return 0;
      }
      if (a[formData.sortColumn - 1].length < b[formData.sortColumn - 1].length) {
        return -1;
      }
      if (a[formData.sortColumn - 1].length > b[formData.sortColumn - 1].length) {
        return 1;
      }
      return a[formData.sortColumn - 1].localeCompare(b[formData.sortColumn - 1]);
    });
    
    if (reverse) {
      sortedTable.reverse();
    }
    
    const output = sortedTable.map(row => {
      return row.join(formData.columnDelimiter);
    }).join('\r\n');
    return output;
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
        <h2 className="text-2xl font-semibold">Sort Column</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-6 mt-6">
            <MyListbox
              label="Sort"
              data={options}
              handleChange={handleHeadlessUIChange}
              name="sorting"
              currentValue={formData.sorting}
            />
            <label>
              <span className="block text-slate-600 dark:text-slate-400 text-sm">Column number</span>
              <input
                className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="text"
                onChange={handleChange}
                name="sortColumn"
                value={formData.sortColumn}
              />
            </label>
            <label>
              <span className="block text-slate-600 dark:text-slate-400 text-sm">Delimiter</span>
              <input
                className="w-full p-2 mt-1 block shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="text"
                onChange={handleChange}
                name="columnDelimiter"
                value={formData.columnDelimiter}
              />
            </label>
          </div>
          <label className="block mt-6 text-sm">
            <span className="text-slate-600 dark:text-slate-400">Input/Output</span>
            <textarea
              className="w-full h-80 p-2 mt-1 shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              spellCheck="false"
              onChange={handleChange}
              name="text"
              value={formData.text}
            />
          </label>
          <div className="flex flex-row-reverse items-center space-x-6 space-x-reverse mt-4">
            <Button name="Sort" />
            <StatusInfo isShowing={isStatusShowing} text={`Sorted by ${lastSortApplied}`} />
          </div>
        </form>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">There are several sorting methods to choose from:</p>
        <ul className="list-disc list-inside leading-7 -indent-4 ml-4 mt-6">
          <li><strong className="font-semibold">Natural</strong> - A human-friendly sorting method that works well with numbered lists, as it treats multi-digit numbers as a single number. For example, 2 would appear before 10 in an ascending list.</li>
          <li><strong className="font-semibold">Alphabetical</strong> - A sorting method that sorts alphabetically from A-Z and numerically from 0-9.</li>
          <li><strong className="font-semibold">Length</strong> - A sorting method that sorts by character length, then alphabetically to resolve ties.</li>
          <li><strong className="font-semibold">Reverse Order</strong> - A sorting method that simply reverses the order of the list.</li>
          <li><strong className="font-semibold">Random Order</strong> - A sorting method that randomly shuffles the order of the list. Just for fun!</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8">Delimiter</h3>
        <p className="leading-7 mt-6">
          A <strong className="font-semibold">delimiter</strong> is a character or string that separates each column.<br />
          In the example below, comma <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">,</code> is the delimiter.
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          Column 1,Column 2,Column 3<br />
          Column 1,Column 2,Column 3<br />
          Column 1,Column 2,Column 3
        </pre>
        <h3 className="text-xl font-semibold mt-8">Examples</h3>
        <p className="leading-7 mt-6">
          Sort a list of names by last name.<br />
          Sort is <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">Natural (Ascending)</code>, column number is <code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap">2</code>, delimiter is space (<code className="bg-white dark:bg-slate-800 rounded-lg px-1 whitespace-pre-wrap"> </code>).
        </p>
        <pre className="bg-white dark:bg-slate-800 rounded-lg p-4 whitespace-pre-wrap">
          John Doe<br />
          Alice Margatroid<br />
          Jane Smith
        </pre>
      </div>
    </main>
  )
}

export default SortList
