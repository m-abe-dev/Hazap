import React from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <EventDashboard />
    </div>
  );
}

export default App;
