import React, { useState } from 'react';

const Main = () => {
  const [book, setBook] = useState(0);
  return (
    <>
      <h3 className="title">{book}</h3>
      <button onClick={() => setBook((prev) => prev + 1)}>증가</button>
    </>
  );
};

export default Main;
