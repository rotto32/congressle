import { useState } from 'react'
import { APP_TITLE, WELCOME_MSG } from './constants/lang'
import congressData from './data/2023congress.json'
import { Member } from './components/member';

function App() {
  // const [count, setCount] = useState(0)
  const testdata = congressData.pop();
  const [currentMember, setMember] = useState(testdata);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-bold">{APP_TITLE}</h1>
        <p>{WELCOME_MSG}</p>
        <div>
          <Member memberData={currentMember} />
          
        </div>
      </div>
    </>
  )
}

export default App
