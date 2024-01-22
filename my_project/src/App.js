import { useState, useEffect } from 'react';
import './App.css';

// const Person = (props) => {

//   return(
//     <>
//       <h1>Name: {props.name} </h1>
//       <h2>Last Name: {props.LastName} </h2>
//       <h2>Age: {props.Age} </h2>
//     </>
//   )

// }

const App = () => {

  //const name = 'joao';

  const [counter,setCounter] = useState(0);

  useEffect(() => {
    alert('changed counter');
  }, [counter]);

  return (
    <div className="App">

      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>

      {/* <Person name='John' LastName='Doe' Age={30}/>
      <Person name={'Josh'} LastName={'Stuart'} Age={27}/>
      <Person /> */}

      {/* <h1>Hello, React!</h1>
      { name ? (
        <>
        <h1>{name}</h1>
        </>
      ) : (
        <>
        <h1>test</h1>
        <h2>no name found</h2>
        </>
      )} */}

    </div>
  );
}

export default App;
