import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ToolList from './components/ToolList'
import SortList from './components/SortList'
import ConvertCase from './components/ConvertCase'
import WordCount from './components/WordCount'
import About from './components/About'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<ToolList />} />
        <Route path='/sort-list' element={<SortList />} />
        <Route path='/convert-case' element={<ConvertCase />} />
        <Route path='/word-count' element={<WordCount />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
