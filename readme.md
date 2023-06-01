useReducer is a hook that is used for state management in React
useReducer is related to reducer functions
useReducer hook will accept two parameters: a reducer function and an initial state

## reduce method vs useReducer hook

#### reduce in JavaScript

- array.reduce(reducer, initialValue)
- singleValue = reducer(accumulator, itemValue)
- reduce method returns a single value

#### useReducer in React

- useReducer(reducer, initialState)
- newState = reducer(currentState, action)
- useReducer returns a pair of values: [newState, dispatch]

# Tutorial
This is a simple expample for implementing the useReducer hook in React with a simple state and simple action.

#1 import the useReducer hook to the component
#2 within our component we call useReducer and pass in two parameters: a reducer function and an initial state

```javascript
useReducer(reducer, initialState);
```

#3 declare the initialState

```javascript
const initialState = 0;
```

#4 declare the reducer function that accepts two parameters: state and action. It will return a new state depending on the action c

```javascript
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
```

#5 A call to useReducer will return a pair of values: newState & dispatch. We can destructure the values using the array destructuring syntax

```javascript
const [count, dispatch] = useReducer(reducer, initialState);
```

#6 We can now use dispatch method with a payload to dispatch the apropiate action based on what button the user clicked. The action will trigger the state transition. When the state changes, the component will re-render and the correct value is displayed on the browser

```javascript
<div>Count: {count}</div>
<button onClick={() => dispatch('increment')}>Increment</button>
<button onClick={() => dispatch('decrement')}>Decrement</button>
<button onClick={() => dispatch('reset')}>Reset</button>
```
