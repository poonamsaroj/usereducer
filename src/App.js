import { useReducer } from 'react';

function reducer (state, action) {
  switch(action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };  // ordering of spread matters, this will overwrite name
    case 'UPDATE_AGE':
      return { ...state, age: action.payload+1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { name: 'John Doe', age: 29 });

  const handleButtonClick = () => {
    dispatch({ type: 'UPDATE_AGE', payload: state.age });
  };

  return (
    <>
      <input type='text' value={state.name} onChange={(e) => dispatch({ type: 'UPDATE_NAME', payload: e.target.value })} />
      <p>My name is {state.name} and I'm {state.age} years old.</p>
      <button onClick={handleButtonClick}>Submit</button>
    </>
  );
}

export default App;
