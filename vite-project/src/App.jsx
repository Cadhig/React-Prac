import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"
import Toggle from "./components/Toggle"
import LoginButton from "./components/LoginButton"
import Input from "./components/Input"
import PlayButton from "./components/PlayButton"

function App() {
  const [state, setState] = React.useState(false)

  return (
    <div>
      <input type="checkbox" onChange={() => setState(!state)} />
      <h1>Hello</h1>
      <Button text="hello" />
      <Toggle text="theme" />
      <LoginButton />
      <Input />
      <PlayButton />
    </div>
  )
}

export default App
