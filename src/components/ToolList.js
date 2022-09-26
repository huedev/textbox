import ToolListItem from "./ToolListItem"
import { ListBulletIcon, ViewColumnsIcon, ArrowsRightLeftIcon, ArrowPathIcon, CalculatorIcon, DocumentMagnifyingGlassIcon, BarsArrowDownIcon } from "@heroicons/react/24/outline"

const ToolList = () => {
  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="uppercase font-semibold text-slate-600 dark:text-slate-400 tracking-wide">Text Manipulation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ToolListItem
            destination="/convert-case"
            name="Convert Case"
            icon={<ArrowPathIcon />}
            description="Convert text letter case to several different formats."
          />
          <ToolListItem
            destination="/find-replace"
            name="Find &amp; Replace"
            icon={<DocumentMagnifyingGlassIcon />}
            description="Replace all instances of a string with a different string."
          />
        </div>
        <h2 className="uppercase font-semibold text-slate-600 dark:text-slate-400 tracking-wide mt-8">List Manipulation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ToolListItem
            destination="/sort-list"
            name="Sort List"
            icon={<ListBulletIcon />}
            description="Sort items in a list using various sorting methods."
          />
          <ToolListItem
            destination="/prefix-suffix"
            name="Add Prefix &amp; Suffix"
            icon={<ArrowsRightLeftIcon />}
            description="Add characters to the start and/or end of each line."
          />
          <ToolListItem
            destination="/line-numbers"
            name="Add Line Numbers"
            icon={<BarsArrowDownIcon />}
            description="Add sequential numbers or letters at the beginning of each line."
          />
          <ToolListItem
            destination="/sort-column"
            name="Sort Column"
            icon={<ViewColumnsIcon />}
            description="Sort items by column in a delimited list using various sorting methods."
          />
        </div>
        <h2 className="uppercase font-semibold text-slate-600 dark:text-slate-400 tracking-wide mt-8">Text Analysis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ToolListItem
            destination="/word-count"
            name="Word Count"
            icon={<CalculatorIcon />}
            description="Enter some text and get a word count and other info."
          />
        </div>
      </div>
    </main>
  )
}

export default ToolList
