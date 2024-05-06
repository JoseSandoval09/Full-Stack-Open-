import { useState } from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.Header}</h1>
    </div>
  )
}

const Button = (props) =>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>

  
)



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setnewGood = (newgood) => {
    console.log(newgood)
    setGood(newgood)
    
  }

  const setnewNeutral = (newNeutral) => {
    console.log(newNeutral)
    setNeutral(newNeutral)
    
  }

  const setnewBad = (newBad) => {
    console.log(newBad)
    setBad(newBad)
    
  }

  return (
    <div>
      <Header Header='Give feedback'/>
      <Button handleClick={() => setnewGood(good+1)} text='Good' />
      <Button handleClick={() => setnewNeutral(neutral+1)} text='Neutral'/>
      <Button handleClick={() => setnewBad(bad+1)}text='Bad'/>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      
      

      
    
    </div>
  )
}

export default App