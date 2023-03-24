import './App.scss'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Photography } from './components/Photography/Photography'
import { Videography } from './components/Videography/Videography'
import { Route, Switch } from 'react-router-dom'

function App() {

  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/photography' element={<Photography />} />
        <Route path='/video' element={<Videography />} />
      </Routes>
    
    </div>
  )
}

export default App
