import  { useState } from 'react';
import './Service.css'

function ServicePage() {
  
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
   setCount(count + 100);
  };

  const handleDecrement = () => {
    
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Event handler for resetting the count
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <div className="all-btn">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default ServicePage;