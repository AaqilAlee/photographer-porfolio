import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";

const Events = () => {
  return (
    <>
      <section>
        <SectionTitle title="events" subtitle="events" />
        <Container >
          <Row>
            <Col lg={3}>dsfsfsdfsdfsdfs</Col>
            <Col lg={9}>sdfsdfsdfs</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
