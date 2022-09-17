import { useState } from "react"

const Stat = (props) => {
  return (
    <div className="flex justify-between space-x-3 px-3 py-2 border-b [&:nth-last-child(-n+1)]:border-transparent sm:[&:nth-last-child(-n+2)]:border-transparent border-slate-300 dark:border-slate-900 text-sm">
      <span className="font-semibold">{props.label}</span>
      <span>{props.data}</span>
    </div>
  )
}

const WordCount = () => {
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [charactersWithoutSpaces, setcharactersWithoutSpaces] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [lines, setLines] = useState(1);

  function populateStats(event) {
    setWords(getWords(event.target.value));
    setCharacters(getCharacters(event.target.value));
    setcharactersWithoutSpaces(getcharactersWithoutSpaces(event.target.value));
    setSentences(getSentences(event.target.value));
    setParagraphs(getParagraphs(event.target.value));
    setLines(getLines(event.target.value));
  }

  function getWords(str) {
    if (!str) {
      return 0;
    } 
    return (str.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length;
  }

  function getCharacters(str) {
    return str.length;
  }

  function getcharactersWithoutSpaces(str) {
    return str.replace(/\s+/g, '').length;
  }

  function getSentences(str) {
    if (!str) {
      return 0;
    }
    return (str.match(/[\w|)][.?!]+(\s|$)/g) || []).length;
  }

  function getParagraphs(str) {
    if (!str) {
      return 0;
    }
    return (str.match(/\n+/g) || []).length + 1;
  }

  function getLines(str) {
    if (!str) {
      return 1;
    }
    return (str.match(/\n/g) || []).length + 1;
  }

  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Word Count</h2>
        <label className="block mt-6 text-sm">
          <span className="text-slate-600 dark:text-slate-400">Input</span>
          <textarea
            className="w-full h-80 p-2 mt-1 shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-transparent dark:border-t-white/5 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            spellCheck="false"
            onChange={populateStats}
          >
          </textarea>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 bg-slate-200 dark:bg-slate-800 shadow-inner rounded-lg p-4 mt-4">
          <Stat label="Words" data={words} />
          <Stat label="Sentences" data={sentences} />
          <Stat label="Characters" data={characters} />
          <Stat label="Characters (without spaces)" data={charactersWithoutSpaces} />
          <Stat label="Paragraphs" data={paragraphs} />
          <Stat label="Lines" data={lines} />
        </div>
      </div>
    </main>
  );
}

export default WordCount
