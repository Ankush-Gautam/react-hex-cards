import React, {useState} from 'react'
import Cards from './components/Cards'

const App = () => {

  const [isCardRefresh,setIsCardRefresh] = useState(false);

  function refreshCards() {
    setIsCardRefresh(prevState => !prevState);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className='project-title'>Hex-Color Generator</h1>
        <p>React Project #1 - By Ag</p>
      </div>

      <button onClick={refreshCards} className='refresh-btn'>Refresh</button>

      <div className="main">
       <Cards refresh={isCardRefresh}/>
      </div>

      
    </div>
  )
}

export default App
