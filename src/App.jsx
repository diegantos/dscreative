import './App.scss'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Photography } from './components/Photography/Photography'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (

    <div className="App">

      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Photography /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/photography' element={<Photography />} />
      </Routes>
    
    </div>
  )
}

export default App
