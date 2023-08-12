import { useState } from 'react'
import { NavBar } from './components/NavBar';
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar  />
      <div className="main-body"></div>

    </>
  )
}

export default App
