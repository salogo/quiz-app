import React from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";

import Header from "./Header";
import Navigation from "./Navigation";
import Card from "./Card";

const Layout = () => {
  return (
    <Container fluid={true} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Row>
        <Col lg={12} md={12}>
          <Header>
            <Navigation />
          </Header>
        </Col>
      </Row>
      <Container style={{ paddingTop: 20, paddingBottom: 10 }}>
        <Row>
          <Col xs={{ number: 12, offset: 2 }} md={{ number: 12, offset: 0 }}>
            <CardDeck>
              <Card />
              <Card />
              <Card />
            </CardDeck>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={{ number: 12, offset: 2 }} md={{ number: 12, offset: 0 }}>
            <CardDeck>
              <Card />
              <Card />
              <Card />
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Layout;
