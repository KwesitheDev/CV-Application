import { useState } from 'react'
import Header from './components/Header'
import Education from './components/Education'
import About from './components/About'
import Experience from './components/Experience'


function App() {
  const [data, setData] = useState({
    about: [],
    experience: [],
    education: [],
  })

  const handleDataChange = (key, value) => setData({ ...data, [key]: value })

  return (
    <>
      <Header />
      <div className="flex flex-wrap mb-2.5 flex-col sm:flex-row  ">
        <Experience onChange={handleDataChange} />
        {/* <Education onChange={handleDataChange} /> */}
        <About onChange={handleDataChange} />
      </div>


    </>
  )
}

export default App
