import { useEffect, useState } from "react";

function AboutPage() {
  useEffect(() => {
    document.title = 'Register - About'
  })

  const [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count +1)
  }

  const handledecrese = () => {
    if (count > 0) {
      setcount(count -1)
    }
  }

  const reset = () => {
    setcount(0)
  }
  
  return (
    <>
      <h1>This is the about page</h1>
      
      <button onClick={handleClick}>Add</button>
      <button onClick={handledecrese}>Remove</button>
      <button onClick={reset}>Reset</button>
      <p>Add to cart: { count}</p>
    </>
  );
}

export default AboutPage;