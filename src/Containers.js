import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Containers() {
  return (
    <Container fluid>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>a of b</Col>
        <Col>b of b</Col>
      </Row>
    </Container>

    
  );
}

export default Containers;
