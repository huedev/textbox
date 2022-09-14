import MyListbox from './MyListbox'
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
    const sentences = input.match(/[^.?!]+[.!?]+[\])'"`’”]*\s+|$|.+/g);
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].substr(1);
    }
    return sentences.join("");
  }

  function startCase(str) {
    const input = str.toLowerCase();
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
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
    <main className="py-8">
      <div className="bg-white rounded-none shadow lg:rounded-lg max-w-5xl mx-auto p-8">
        <h2 className="text-xl font-semibold">Convert Case</h2>
        <div className="flex mt-6">
          <MyListbox label="Conversion" data={options} onChange={handleConversionChange} />
        </div>
        <label htmlFor="input" className="inline-block mt-6 text-slate-600 text-sm">Input/Output</label>
        <textarea
          ref={textInput}
          className="w-full h-80 p-2 mt-1 shadow border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
          spellCheck="false"
        >
        </textarea>
        <div className="flex flex-row-reverse mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 sm:text-sm font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={convert}
          >
            Convert
          </button>
        </div>
      </div>
    </main>
  )
}
  
export default ConvertCase
