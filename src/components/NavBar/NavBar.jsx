import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from '../Carrito/Carrito'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="danger" expand="lg">
      <Container className='contenedorNavBar' >
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Remeras</Nav.Link>
            <Nav.Link href="#link">Pantalones</Nav.Link>
            <Nav.Link href="#link2">Zapatillas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Carrito className='carrito' />
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar