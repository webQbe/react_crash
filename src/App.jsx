import React from 'react'

const App = () => {

  /* Adding a dynamic variable */
  const name = 'John';

  return (
    <>
      <div className='text-5xl'>App</div>
      <p>Hello {name}</p>
    </>
    /* <p>Hello</p> Error: Must have one parent element 
      You can wrap multiple elements inside a parent div
      If you don't want an actual parent div, you can use empty html tag <> </> 
    */
  )
}

export default App 