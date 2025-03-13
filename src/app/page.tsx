'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Col, Container, Image, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { Cart, Facebook, Instagram, Twitter, Yelp } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <NavbarBrand>
        <Nav.Link href="#"><Image src="/wod-ko-hana-logo.png" alt="Ko Hana Logo" width="200px" /></Nav.Link>
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#"><u>OUR JOURNEY</u></Nav.Link>
          <Nav.Link href="#">SHOP</Nav.Link>
          <Nav.Link href="#">CORPORATE GIFTING</Nav.Link>
          <Nav.Link href="#">VISIT</Nav.Link>
          <Nav.Link href="#">&apos;OHANA RUM CLUB</Nav.Link>
          <Nav.Link href="#">WHERE TO BUY</Nav.Link>
          <Nav.Link href="#">RECIPES</Nav.Link>
          <Nav.Link href="#">
            <Cart />
            {' '}
            0
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const CenterImage = () => (
  <Container fluid className="centerImage align-items-center position-relative">
    <Row className="align-items-center">
      <h1 className="text-center">OUR JOURNEY</h1>
    </Row>
    <div className="book-now-container">
      <Image src="/booknowbutton.png" alt="Book Now" className="book-now-button" />
    </div>
  </Container>
);

const BottomMenu = () => (
  <div className="bg-dark footer mt-auto">
    <Container>
      <Row className="py-3">
        <Col xs={6}>
          <Image src="/wod-ko-hana-logo.png" alt="Ko Hana Logo" width="200px" />
          <Row>
            <Nav>
              <Nav.Link href="#">ALOHA@KOHANARUM.COM</Nav.Link>
              <Nav.Link href="#">(808) 649-0830</Nav.Link>
              <Nav.Link href="#">92-1770 Kunia Rd., #227, Kunia, HI 96759, USA</Nav.Link>
            </Nav>
          </Row>
        </Col>
        <Col xs={2} />
        <Col className="rightCol justify-content-end">
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link href="#"><Instagram size="30px" /></Nav.Link>
              <Nav.Link href="#"><Facebook size="30px" /></Nav.Link>
              <Nav.Link href="#"><Twitter size="30px" /></Nav.Link>
              <Nav.Link href="#"><Yelp size="30px" /></Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link href="#">TERMS & CONDITIONS</Nav.Link>
              <Nav.Link href="#">PRIVACY POLICY</Nav.Link>
            </Nav>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <TopMenu />
      <CenterImage />
      <BottomMenu />
    </main>
  );
}
