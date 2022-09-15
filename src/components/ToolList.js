import { Link } from "react-router-dom"
import ToolListItem from "./ToolListItem"

const ToolList = () => {
  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolListItem
          destination="/word-count"
          name="Word Count"
          description="See how many words, paragraphs, and characters you have written."
        />
        <ToolListItem
          destination="/convert-case"
          name="Convert Case"
          description="Change the letter case of some text to uppercase, lowercase, sentence case, start case, and random case."
        />
      </div>
    </main>
  )
}

export default ToolList
