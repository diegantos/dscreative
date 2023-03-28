import './App.scss'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Photography } from './components/Photography/Photography'
import { Videography } from './components/Videography/Videography'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='photography' element={<Photography />} />
          <Route path='video' element={<Videography />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
