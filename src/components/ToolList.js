import ToolListItem from "./ToolListItem"
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline"
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { CalculatorIcon } from "@heroicons/react/24/outline"

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
            description="Change text letter case to uppercase, lowercase, sentence case, start case, or random case."
          />
          <ToolListItem
            destination="/word-count"
            name="Word Count"
            icon={<CalculatorIcon />}
            description="See how many words, sentences, paragraphs, lines, and characters you have written."
          />
        </div>
      </div>
    </main>
  )
}

export default ToolList
