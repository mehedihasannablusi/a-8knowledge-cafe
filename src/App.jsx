import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componnent/navbar/Nav'
import Main from './componnent/main-content/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav></Nav>
     <Main></Main>
    </div>
  )
}

export default App
