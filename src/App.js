import './App.css';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <h1>Counter App</h1>
      <button1 onClick={() =>setCount(count+1)}>Increment</button1>
      <h2>{count}</h2>
      <button2 onClick={() => count > 0 && setCount(count - 1)}>Decrement</button2>
      <button onClick={() => setCount(0)} >Reset</button>
    </div>
  );
}

export default App;
