import { useState } from "react"

const TextStats = () => {
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [charactersExcludingSpaces, setCharactersExcludingSpaces] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [lines, setLines] = useState(0);

  function populateStats(event) {
    setWords(getWords(event.target.value));
    setCharacters(getCharacters(event.target.value));
    setCharactersExcludingSpaces(getCharactersExcludingSpaces(event.target.value));
    setSentences(getSentences(event.target.value));
    setLines(getLines(event.target.value));
  }

  function getWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
  }

  function getCharacters(str) {
    return str.length;
  }

  function getCharactersExcludingSpaces(str) {
    return str.replace(/\s+/g, '').length;
  }

  function getSentences(str) {
    if (str.match(/[\w|)][.?!]+(\s|$)/g) == null) {
      return 0;
    } else {
      return str.match(/[\w|)][.?!]+(\s|$)/g).length;
    }
  }

  function getLines(str) {
    if ((str.match(/\n/g) || '') == null || str.length === 0) {
      return 0;
    } else {
      return (str.match(/\n/g) || '').length + 1;
    }
  }

  return (
    <main className="max-w-7xl mx-auto">
      <div className="border border-transparent xl:border-slate-300 rounded-md p-6">
        <h2 className="text-xl mb-6">Word Count</h2>
        <textarea
            className="w-full h-64 p-2 shadow-sm border border-slate-300 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            spellCheck="false"
            onChange={populateStats}>
        </textarea>
        <dl className="gap-x-2 gap-y-1">
          <dt className="font-semibold">Words</dt>
          <dd>{words}</dd>
          <dt className="font-semibold">Characters</dt>
          <dd>{characters}</dd>
          <dt className="font-semibold">Characters (excluding spaces)</dt>
          <dd>{charactersExcludingSpaces}</dd>
          <dt className="font-semibold">Sentences</dt>
          <dd>{sentences}</dd>
          <dt className="font-semibold">Lines</dt>
          <dd>{lines}</dd>
        </dl>
      </div>
    </main>
  );
}

export default TextStats
