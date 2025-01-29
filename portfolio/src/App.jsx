import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Sidebar/>
        <MainContent/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
