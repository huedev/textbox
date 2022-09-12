import { useState } from "react"

const TextStats = () => {
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [charactersExcludingSpaces, setCharactersExcludingSpaces] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [lines, setLines] = useState(1);

  function populateStats(event) {
    setWords(getWords(event.target.value));
    setCharacters(getCharacters(event.target.value));
    setCharactersExcludingSpaces(getCharactersExcludingSpaces(event.target.value));
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

  function getCharactersExcludingSpaces(str) {
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
    <main className="p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl mb-6 font-semibold">Word Count</h2>
        <label htmlFor="input" className="text-slate-600">Input</label>
        <textarea
            id="input"
            className="w-full h-80 p-2 mt-1 mb-6 shadow-sm border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            spellCheck="false"
            onChange={populateStats}>
        </textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 bg-slate-100 shadow-inner rounded-lg p-4">
          <div className="flex justify-between px-3 py-2">
            <span className="font-semibold">Words</span>
            <span>{words}</span>
          </div>
          <div className="flex justify-between px-3 py-2 border-t border-slate-200 sm:border-t-0">
            <span className="font-semibold">Sentences</span>
            <span>{sentences}</span>
          </div>
          <div className="flex justify-between px-3 py-2 border-t border-slate-200">
            <span className="font-semibold">Characters</span>
            <span>{characters}</span>
          </div>
          <div className="flex justify-between px-3 py-2 border-t border-slate-200">
            <span className="font-semibold">Characters (without spaces)</span>
            <span>{charactersExcludingSpaces}</span>
          </div>
          <div className="flex justify-between px-3 py-2 border-t border-slate-200">
            <span className="font-semibold">Paragraphs</span>
            <span>{paragraphs}</span>
          </div>
          <div className="flex justify-between px-3 py-2 border-t border-slate-200">
            <span className="font-semibold">Lines</span>
            <span>{lines}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TextStats
