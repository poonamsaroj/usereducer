import { useReducer } from 'react';

function reducer (state, action) {
  switch(action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    case 'UPDATE_AGE':
      return { ...state, age: action.payload };
    default:
      return state;
  }
}

function UseReducerState1() {
  // TODO: improvise the initial state to make it more dynamic
  // TODO: add correct form validation method to handle errors
  // TODO: If possible add styling
  const initialState = {
    name: 'Poonam',
    email: 'saroj@.com',
    password: 'Pass@wer',
    age: '12',
    errors: {
      name: '',
      email: 'incorrect',
      password: '',
      age: '',
    },
    isSubmitting: false,
    isSubmitted: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    return;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={(e) => dispatch({ type: 'UPDATE_NAME', payload: e.target.value })} />
        <p>{state.errors.name}</p>

        <input name="email" placeholder="Email" onChange={(e) => dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value })} />
        <p>{state.errors.email}</p>

        <input type="password" name="password" placeholder="Password" onChange={(e) => dispatch({ type: 'UPDATE_PASSWORD', payload: e.target.value })} />
        <p>{state.errors.password}</p>

        <input name="age" placeholder="Age" onChange={(e) => dispatch({ type: 'UPDATE_AGE', payload: e.target.value })} />
        <p>{state.errors.age}</p>

        <button disabled={state.isSubmitting}>
          {state.isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {state.isSubmitted && <p>Form submitted successfully!</p>}
      </form>
      <div>{JSON.stringify(state, null, 2)}</div> 
    </>
  )
}

export default UseReducerState1;
