import { useState } from 'react'
import './App.css'
import { APP_TITLE, WELCOME_MSG } from './constants/lang'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{APP_TITLE}</h1>
      <p>{WELCOME_MSG}</p>
      <div className="game">
        
      </div>
    </>
  )
}

export default App
