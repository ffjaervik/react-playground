import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleRefClick() {
    countRef.current = countRef.current + 1;
  }

  return (
    <>
      <h1>count is: {count}</h1>
      <h1>countRef is: {countRef.current}</h1>
      <button onClick={handleClick}>increase count</button>
      <button onClick={handleRefClick}>increase countRef</button>
      <p>
        See how clicking the countRef button does not increase the countRef
        value?
        <br /> This is because it is updating the value of CountRef but not
        re-rendering the component.
        <br />Once you click the count button, the component re-renders and the countRef value is updated.
      </p>
    </>
  );
}

export default App;
