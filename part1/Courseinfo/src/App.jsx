const Header = (props) => {
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}
const Content= (props) => {
  console.log(props)
  return(
    <div>
      <h2>{props.part1}</h2>
      <p>{props.exercises1}</p>
      <h2>{props.part2}</h2>
      <p>{props.exercises2}</p>
      <h2>{props.part3}</h2>
      <p>{props.exercises3}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App