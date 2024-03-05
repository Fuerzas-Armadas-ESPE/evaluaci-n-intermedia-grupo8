import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Inicio() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="display-4">Grupo 08</h1>
          <p className="lead">Prueba Intermedia </p>

          <p>Integrantes:</p>
          <ul>
            <li>Patricia Anchapaxi</li>
            <li>Jonathan Cortez</li>
            <li>Luciana Guerra</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
