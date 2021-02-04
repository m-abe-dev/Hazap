import React from "react";
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          Hazap
        </Header>
        <div style={{ height: 100, width: "100%"}} >
        <p style={{ 'font-weight': 'bolder' }}>
          Hazap とは旅行や地域のイベント通じて人と人の繋がりや出会いを作るサービスです。 
        <br/>また、友達との旅行の計画も簡単にまとめることもできます。
        </p>
        </div>     
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
