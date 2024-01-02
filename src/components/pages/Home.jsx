import React, {useState} from 'react';


const Home = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Home</h1>
      <p>Count: {count}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
};

export default Home;