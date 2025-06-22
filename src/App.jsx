import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white min-h-screen min-height-screen
       flex flex-col gap-3'>
        <div>
        <Navbar/>
        </div>
        <div>
          <Homepage/>
        </div>
        </div>
    </>
  )
}
export default App
