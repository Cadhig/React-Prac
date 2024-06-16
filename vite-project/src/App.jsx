import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"
import Toggle from "./components/Toggle"
import LoginButton from "./components/LoginButton"
import Input from "./components/Input"

function App() {


  return (
    <div>
      <h1>Hello</h1>
      <Button text="hello" />
      <Toggle text="theme" />
      <LoginButton />
      <Input />
    </div>
  )
}

export default App
