import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <Context.Provider value={[signedIn, setSignedIn ]}>
        <Nav />
        <h1>{signedIn ? "Signed in" : "Signed out"}</h1>
      </Context.Provider>
    </>
  );
}

export default App;
