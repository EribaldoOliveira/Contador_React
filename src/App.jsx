import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Contador</h1>
      <p>Valor: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Resetar</button>
      </div>
    </div>
  );
  
}

export default App;
