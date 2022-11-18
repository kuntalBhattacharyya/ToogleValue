import { useState } from "react";
import "./styles.css";

export default function App() {
  const [showValue, setShowValue] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setShowValue(!showValue)}>
        {showValue ? "You clicked me 😎 Cool" : "Please click me"}
      </button>
    </div>
  );
}
