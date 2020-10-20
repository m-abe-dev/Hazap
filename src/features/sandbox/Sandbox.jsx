import React from "react";
import { useSelector } from "react-redux";

function Sandbox() {
  const data = useSelector((state) => state.data);
  return (
    <>
      <h1>testing 123</h1>
      <h3>the data is: {data}</h3>
      {/* <Button
        onClick={() => dispatch(increment(20))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(20))}
        content="Decrement"
        color="red"
      /> */}
    </>
  );
}

export default Sandbox;
