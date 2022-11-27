import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './appbar.css';
function AppBar(){
    return (
        <Navbar className="app-bar" collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand href="#home">
    <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/loginerror_preeventavailable/u47.png?token=7ea9765b19ae6be02d17151bb148b81b959bf5e563b9dc99c76f92a148b291b0"
        width="322px"
        height="117px"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
  
  </Container>
  {/* <br/>
  <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/T2Y1HZ/e0/d2/9d/e0d29de844d349a69fa8cd8f5177cce6/images/loginerror_preeventavailable/u40.png?token=04f401793f7849ddc44400fd20ef77d15f2041353b76360d02b4b007ddfcced9"
  width="100px"/> */}
</Navbar>
    )
}

export default AppBar;