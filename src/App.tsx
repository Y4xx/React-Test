import { useState } from 'react'
import './App.css'
import  {NavBar}  from './Components/NavBar';
import  {DisplayCarts}  from './Components/DisplayCarts';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <DisplayCarts />
    </>
  )
}

export default App
