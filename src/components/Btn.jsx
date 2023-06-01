import {Context} from "../App";
import { useContext } from "react";


export default function Btn() {

    const [signedIn, setSignedIn] = useContext(Context)
  
  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "Click to sign in" : "Click to sign out"}
    </button>
  );
}
