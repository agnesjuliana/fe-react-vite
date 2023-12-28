import { useState } from 'react'
import Navbar from './components/organisms/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
			<h1 className="text-[64px] font-normal text-center text-green-300">
		    Hello world! Agnes
		  </h1>
    </>
  )
}

export default App