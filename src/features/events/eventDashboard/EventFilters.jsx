import React from "react";
import { Header, Menu } from "semantic-ui-react";
import Calendar from "react-calendar";

function EventFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Events" />
        <Menu.Item content="行きます" />
        <Menu.Item content="ホストです" />
      </Menu>
      <Header icon="calendar" attached color="teal" content="Select date" />
      <Calendar />
    </>
  );
}

export default EventFilters;
