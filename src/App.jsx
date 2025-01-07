import React from 'react'

const App = () => {

  /* Adding a dynamic variable */
  const name = 'John';

  /* Adding x + y expression */
  const x = 10;
  const y = 20;

  /* Looping through arrays */
  const names = ['Brad', 'Mary', 'Joe', 'Sara'];

  /* Using Conditionals */
  const loggedIn = true;

  /* Using variables for styling  */
  const styles = {
    color: 'red',
    fontSize: '55px'
  }


  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={ styles }>Hello {name}</p>
      <p>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        { names.map((name, index) => (
          <li key={index}>{ name }</li>
        ))}  
      </ul>
      { loggedIn ? <h1>Hello Member!</h1> : <h1>Hello Guest!</h1> }
      { loggedIn && <h1>Hello Member!</h1> }
    </>
    /* 
      Parent Element
      - Can only have one parent element 
      - You can wrap multiple elements inside a parent <div>
      - If you don't want an actual parent <div>, you can use empty html tag <> </> 

      Conditionals
      - { loggedIn && <h1>Hello Member!</h1> } : <h1> is displayed if loggedIn is True

    */
  )
}

export default App 