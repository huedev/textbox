import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import WordCount from './components/WordCount'
import About from './components/About'
import ConvertCase from './components/ConvertCase'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<WordCount />} />
        <Route path='/convert-case' element={<ConvertCase />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
