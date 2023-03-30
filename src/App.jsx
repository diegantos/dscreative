import './App.scss'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Photography } from './components/Photography/Photography'
import { Videography } from './components/Videography/Videography'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { NotFound } from './components/PageNotFound/NotFound'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='photography' element={<Photography />} />
          <Route path='video' element={<Videography />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
