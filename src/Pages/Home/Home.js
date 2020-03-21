import React from 'react';
import { inject, observer } from "mobx-react";
import { Container, Row, Col, Badge } from 'reactstrap';

function Home( props ) {

  return (
    <Container>
      <Row>
        <Col>
          <h1>This is Home</h1>
          <Badge color="primary">{props.userStore.name}</Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default inject("userStore")(observer(Home));