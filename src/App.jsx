import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Checkout from './pages/Checkout'

function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </>
  )
}

export default App
