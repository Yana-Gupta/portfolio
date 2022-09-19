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
          <Route index element={<Home />} />
        </Route>
        <Route path='/about' element={<Layout />}>
          <Route index element={<About/>} />
        </Route>
        <Route path='/contact' element={<Layout />}>
          <Route index element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
