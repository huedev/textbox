import MyListbox from './MyListbox'
import Button from './Button';
import { useState, createRef } from "react"

const ConvertCase = () => {
  const textInput = createRef();
  const options = [
    "Uppercase",
    "Lowercase",
    "Sentence Case",
    "Start Case",
    "Random Case",
  ];

  const [conversion, setConversion] = useState(options[0]);

  function handleConversionChange(option) {
    setConversion(option);
  }

  function convert() {
    switch (conversion) {
      case "Uppercase":
        textInput.current.value = textInput.current.value.toUpperCase();
        break;
      case "Lowercase":
        textInput.current.value = textInput.current.value.toLowerCase();
        break;
      case "Sentence Case":
        textInput.current.value = sentenceCase(textInput.current.value);
        break;
      case "Start Case":
        textInput.current.value = startCase(textInput.current.value);
        break;
      case "Random Case":
        textInput.current.value = randomizeCase(textInput.current.value);
        break;
      default:
        break;
    }
  }

  function sentenceCase(str) {
    const input = str.toLowerCase();
    const sentences = input.match(/[^.?!]+[.!?]+[\])'"`’”]*\s*|$|.+/g);
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].substr(1);
    }
    return sentences.join("");
  }

  function startCase(str) {
    const input = str.toLowerCase();
    const words = (input.match(/\S+\s*/g) || []);
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }
    return words.join("");
  }

  function randomizeCase(str) {
    const output = [];
    for (let i = 0; i < str.length; i++) {
      const coinflip = Math.floor(Math.random() * 2);
      switch (coinflip) {
        case 0:
          output[i] = str[i].toUpperCase();
          break;
        case 1:
          output[i] = str[i].toLowerCase();
          break;
        default:
          output[i] = str[i];
      }
    }
    return output.join("");
  }
  
  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Convert Case</h2>
        <div className="flex mt-6">
          <MyListbox label="Conversion" data={options} onChange={handleConversionChange} />
        </div>
        <label htmlFor="input" className="inline-block mt-6 text-slate-600 dark:text-slate-400 text-sm">Input/Output</label>
        <textarea
          id="input"
          ref={textInput}
          className="w-full h-80 p-2 mt-1 shadow bg-white dark:bg-slate-800 border border-slate-300 dark:border-none dark:highlight-white/5 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-sm"
          spellCheck="false"
        >
        </textarea>
        <div className="flex flex-row-reverse mt-4">
          <Button name="Convert" onClick={convert} />
        </div>
        <h3 className="text-xl font-semibold mt-16">About</h3>
        <p className="leading-7 mt-6">There are several case conversion styles to choose from:</p>
        <ul className="list-disc list-inside leading-7 -indent-4 ml-4 mt-6">
          <li><strong className="font-semibold">Uppercase</strong> - A style with all capital letters.</li>
          <li><strong className="font-semibold">Lowercase</strong> - A style with all lowercase letters.</li>
          <li><strong className="font-semibold">Sentence Case</strong> - A style where the first letter of each sentence is capitalized.</li>
          <li><strong className="font-semibold">Start Case</strong> - A style where the first letter of each word is capitalized.</li>
          <li><strong className="font-semibold">Random Case</strong> - A style where each letter is randomly set to capital or lowercase. Just for fun!</li>
        </ul>
      </div>
    </main>
  )
}
  
export default ConvertCase
