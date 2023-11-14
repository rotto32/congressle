import { useState } from 'react'
import { APP_TITLE, WELCOME_MSG } from './constants/lang'
import congressData from './data/2023congress.json'
import { Member } from './components/member';
import { Position } from './components/position';
import { getRandomMemberData } from './helpers/dailyMember';

function App() {
  // const [count, setCount] = useState(0)
  const todaysMember = getRandomMemberData(congressData);
  const [currentMember, setMember] = useState(todaysMember);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-bold">{APP_TITLE}</h1>
        <p>{WELCOME_MSG}</p>
        <div>
          <Member memberData={currentMember} />

          <Position memberData={currentMember} />
          
        </div>
      </div>
    </>
  )
}

export default App
