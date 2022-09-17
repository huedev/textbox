import ToolListItem from "./ToolListItem"
import { ArrowsUpDownIcon, ArrowsRightLeftIcon, ArrowPathIcon, CalculatorIcon } from "@heroicons/react/24/outline"
const ToolList = () => {
  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="uppercase font-semibold text-slate-600 dark:text-slate-400 tracking-wide">Basic Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ToolListItem
            destination="/sort-list"
            name="Sort List"
            icon={<ArrowsUpDownIcon />}
            description="Sort a list alphabetically, naturally, or by character length, as well as reverse or randomly shuffle a list."
          />
          <ToolListItem
            destination="/convert-case"
            name="Convert Case"
            icon={<ArrowPathIcon />}
            description="Change text letter case to uppercase, lowercase, sentence case, start case, invert case, or random case."
          />
          <ToolListItem
            destination="/word-count"
            name="Word Count"
            icon={<CalculatorIcon />}
            description="See how many words, sentences, paragraphs, lines, and characters you have written."
          />
        </div>
        <h2 className="uppercase font-semibold text-slate-600 dark:text-slate-400 tracking-wide mt-8">Text Manipulation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ToolListItem
            destination="/prefix-suffix"
            name="Add Prefix &amp; Suffix"
            icon={<ArrowsRightLeftIcon />}
            description="Add characters to the start and/or end of each line."
          />
        </div>
      </div>
    </main>
  )
}

export default ToolList
