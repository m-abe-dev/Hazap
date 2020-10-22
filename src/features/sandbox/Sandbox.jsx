import React from "react";
import { useSelector } from "react-redux";
// import { Button } from "semantic-ui-react";
// import { openModal } from "../../app/common/modals/modalReducer";
// import { increment, decrement } from "../sandbox/testReducer";

function Sandbox() {
  // const dispatch = useDispatch();
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
      />
      <Button
        onClick={() => dispatch(openModal)}
        content="Open Modal"
        color="teal"
      /> */}
    </>
  );
}

export default Sandbox;
