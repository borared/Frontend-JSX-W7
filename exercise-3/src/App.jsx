import React,{ useState} from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [isInput, setIsInput] = useState(false); 
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [sum , setSum] = useState("");
  /* You will need some function to handle the key pressed and button events */
  
  const onA = (event) => {
    if(event.key == "Enter"){
      calculate();
    }
  }

  const onB = (event) => {
    if(event.key == "Enter"){
      calculate();
    }
  }


  const calculate = () => {
  if (inputA == "" || inputB == "") {
    setSum("Error: Please enter both numbers");
  } else if (isNaN(Number(inputA)) || isNaN(Number(inputB))) {
    setSum("Error: A & B must be numbers");
  }
  else{
    setSum(Number(inputA) + Number(inputB));
  }
  setIsInput(true); 
  };

  
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input 
      value={inputA}
      onChange={(e) => setInputA(e.target.value)}
      onKeyUp={onA} />

      <label>B =</label>
      <input 
      value={inputB}
      onChange={(e) => setInputB(e.target.value)}
      onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input 
      value={isInput ? sum : ""} 
      style={{ color: typeof sum === 'string' ? "red" : "white" }}
      disabled />
      <button
      onClick={calculate}
      >Compute</button>
    </main>
  );
}

export default App;