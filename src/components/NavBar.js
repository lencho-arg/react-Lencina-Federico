
import { Icono } from '../components/CartWidget';
import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <Navbar bg='light'>
      <Container>
        <Icono />
        <Navbar.Brand href="/">ShopinTravel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/category/Valijas">Valijas</Nav.Link>
            <Nav.Link as={Link} to="/category/Zapatillas">Zapatillas</Nav.Link>
            <Nav.Link as={Link} to="/category/Termos">Termos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;