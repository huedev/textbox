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
    "Invert Case",
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
      case "Invert Case":
        textInput.current.value = invertCase(textInput.current.value);
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
    const output = sentences.map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.substr(1);
    });
    return output.join("");
  }

  function startCase(str) {
    const input = str.toLowerCase();
    const words = (input.match(/\S+\s*/g) || []);
    const output = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    });
    return output.join("");
  }

  function invertCase(str) {
    const arr = str.split('');
    const output = arr.map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      }
      return char = char.toUpperCase();
    });
    return output.join("");
  }

  function randomizeCase(str) {
    const arr = str.split('');
    const output = arr.map((char) => {
      const coinflip = Math.floor(Math.random() * 2);
      switch (coinflip) {
        case 0:
          return char.toUpperCase();
        case 1:
          return char.toLowerCase();
        default:
          return char;
      }
    });
    return output.join("");
  }
  
  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Convert Case</h2>
        <div className="flex mt-6">
          <MyListbox label="Conversion" data={options} onChange={handleConversionChange} />
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
          <li><strong className="font-semibold">Invert Case</strong> - A style where lowercase letters made capitalized and capital letters are made lowercase.</li>
          <li><strong className="font-semibold">Random Case</strong> - A style where each letter is randomly set to capital or lowercase. Just for fun!</li>
        </ul>
      </div>
    </main>
  )
}
  
export default ConvertCase
