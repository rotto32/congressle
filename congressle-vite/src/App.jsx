import { useState } from 'react'
import { APP_TITLE, WELCOME_MSG } from './constants/lang'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-bold">{APP_TITLE}</h1>
      <p>{WELCOME_MSG}</p>
      <div>
        
      </div>
    </>
  )
}

export default App
