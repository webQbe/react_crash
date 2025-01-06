import React from 'react'

const App = () => {

  /* Adding a dynamic variable */
  const name = 'John';

  /* Adding x + y expression */
  const x = 10;
  const y = 20;

  return (
    <>
      <div className='text-5xl'>App</div>
      <p>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
    </>
    /* <p>Hello</p> Error: Must have one parent element 
      You can wrap multiple elements inside a parent div
      If you don't want an actual parent div, you can use empty html tag <> </> 
    */
  )
}

export default App 