const Header = (props) => {
 
  return(
    <h1>{props.course}</h1>
  )
}
const Content= () => {
 
  return(
    <div>
    <Part1/>
    <Part2/>
    <Part3/>
    </div>
  )
}

const Part1=() =>{
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  return(
    <div>
       <h3> Tittle : {part1}</h3>
       <p>No. of exercises {exercises1}</p>
    </div>
   
  )
}

const Part2=() =>{
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  return(
    <div>
       <h3> Tittle : {part2}</h3>
       <p>No. of exercises {exercises2}</p>
    </div>
   
  )
}

const Part3=() =>{
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
       <h3> Tittle : {part3}</h3>
       <p>No. of exercises {exercises3}</p>
    </div>
   
  )
}

const Total= (props) => {
  return(
    <div>
      <p>Total of exercises are : {props.total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
     <Header course={course}/>
     <Content/>
     <Total total={10+7+14}/>
    </div>
  )
}

export default App