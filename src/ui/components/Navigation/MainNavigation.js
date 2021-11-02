import React, {useContext} from "react";
import MainHeader from "./MainHeader";
import { AuthContext } from "../../context/auth-context";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

const MainNavigation = (props) => {
  const auth = useContext(AuthContext);

  return (
    <MainHeader>
      <Navbar bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">ÖZTÜRK</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/u1/places" >Places</Nav.Link>
              <Nav.Link href="/places/new">New Places</Nav.Link>
              {!auth.isLoggedIn && <NavDropdown title="Authenticate" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Signin">Signin</NavDropdown.Item>
                <NavDropdown.Item href="/Signup">
                  Signup
                </NavDropdown.Item>
                
              </NavDropdown>}
              {auth.isLoggedIn && <Nav.Link onClick={auth.logout}>Logout</Nav.Link>}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </MainHeader>
  );
};

export default MainNavigation;
