import React, { useState } from "react";

function App() {
  const [text, setText] = useState(""); 
  const [isInput, setIsInput] = useState(false); 

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      setIsInput(true);
    }
  };

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPressed}
      />

      <p>
        <label>Here is the text in upper case</label>

        <input
          value={isInput ? text.toUpperCase() : ""}
          disabled
        />
      </p>
    </main>
  );
}

export default App;