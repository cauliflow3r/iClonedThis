import React, { createContext, useState } from "react";

export const counterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <counterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;
