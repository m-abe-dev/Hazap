import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TestMap from "./TestMap";
import TestPlaceInput from "./TestPlaceInput";
// import { Button } from "semantic-ui-react";
// import { openModal } from "../../app/common/modals/modalReducer";
// import { increment, decrement } from "../sandbox/testReducer";

function Sandbox() {
  // const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
  }

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
      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <TestMap location={location} />
      </div>
    </>
  );
}

export default Sandbox;
