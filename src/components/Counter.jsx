import React from "react";
import { useContext } from "react";
import { counterContext } from "../CounterContextProvider";

const Counter = () => {
  const { increment, counter, decrement } = useContext(counterContext);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={decrement}>MINUS</button>
      <button onClick={increment}>PLUS</button>
    </div>
  );
};

export default Counter;
