import React, { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0)
  function increment(){
    setcount(count+1);
  }
  return (
    <>
      <Toggle increment={increment} /> {count}
      <Toggle increment={increment} /> {count}
      <Toggle increment={increment} /> {count}
    </>

  )
}


const Toggle = (props) => {
  return <button onClick={props.increment}>Toggle</button> 

}

export default App
