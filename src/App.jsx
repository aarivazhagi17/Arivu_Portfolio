import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Navbar from './Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Portfolio />
    </BrowserRouter>
  )
}

export default App