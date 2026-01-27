import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from './components/biodata'
import Prf from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Prf/>
      </div>
    </>
  )
}

export default App
