import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About/Index'
import Contact from './components/Contact/Index'
import Home from './components/Home/Index'
import Layout from './components/Layout/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/home' element={<Home />} />
          <Route path ='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
