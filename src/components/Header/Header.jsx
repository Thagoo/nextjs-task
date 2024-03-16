"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FiMenu } from "react-icons/fi";
import { MdExplore } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { FaBookmark, FaBell, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

import {
  ButtonToolbar,
  InputGroup,
  NavbarBrand,
  Offcanvas,
} from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navigation() {
  // this is a just a sample method to show Sign in button
  // in reality authentication is implemented using auth.js library
  // and authorize by calling auth() function
  const pathname = usePathname();

  return (
    <Navbar
      expand="lg"
      variant="light"
      className="fixed-top mb-1 "
      style={{
        backgroundColor: "white",
        zIndex: `1040`,
        boxShadow: `0 2px 10px rgba(0,0,0,.25)`,
      }}
    >
      <Container className="flex-nowrap">
        <Nav className="my-2 my-lg-2 flex-row me-auto">
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ border: "none" }}
            className=" mx-2"
          >
            {" "}
            <span>
              <FiMenu />
            </span>
          </Navbar.Toggle>
          <NavbarBrand href="#">
            <Image
              src={"/hobby-logo-mobile.jpg"}
              height={30}
              width={35}
              className="d-lg-none"
            />
            <Image
              src={"/hobby-logo.jpg"}
              height={40}
              width={150}
              className="d-none d-lg-block"
            />
          </NavbarBrand>
        </Nav>
        <Nav.Link href="#" className="d-lg-none order-1 mx-2">
          <FaMagnifyingGlass size={20} color="#8064a2" />
        </Nav.Link>
        <Nav.Link href="#" className="d-lg-none order-2 mx-2 ">
          <FaBell size={20} color="#8064a2" />
        </Nav.Link>

        {pathname.includes("landing") ? (
          <Nav.Link href="#" className=" d-lg-none  order-3 mx-3 ">
            <FaUser height={30} color="#8064a2" />
          </Nav.Link>
        ) : (
          <>
            <Image
              src={"/girl-avatar.png"}
              alt="avatar logo"
              width={25}
              height={25}
              className="rounded-circle d-lg-none order-3 mx-3"
            />
          </>
        )}
        <Navbar.Collapse id="navbarScroll">
          <Navbar.Offcanvas placement="start">
            <Offcanvas.Header closeButton>
              <Link href="/">
                <Offcanvas.Title>
                  <Image
                    src={"/hobby-logo.jpg"}
                    height={40}
                    width={150}
                    className="d-lg-none"
                  />
                </Offcanvas.Title>
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="my-2 my-lg-2 d-none d-lg-block me-auto">
                <Form>
                  <ButtonToolbar aria-label="Toolbar with Button groups">
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Search here"
                        aria-label="search here"
                        aria-describedby="btnGroupAddon"
                      />
                      <Button variant="custom">
                        <FaMagnifyingGlass size={20} />
                      </Button>
                    </InputGroup>
                  </ButtonToolbar>
                </Form>
              </Nav>
              <Nav className=" my-2 my-lg-2 d-flex" navbarScroll>
                <NavDropdown
                  title={
                    <span>
                      <MdExplore size={24} color="#8064a2" className="mx-2" />
                      Explore
                    </span>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#">People Community</NavDropdown.Item>
                  <NavDropdown.Divider className="m-0" />
                  <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
                  <NavDropdown.Divider className="m-0" />
                  <NavDropdown.Item href="#">
                    Programs - Events
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="m-0" />
                  <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
                  <NavDropdown.Divider className="m-0" />
                  <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <span>
                      <span>
                        <MdStars size={24} color="#8064a2" className="mx-2" />
                        Hobbies
                      </span>
                    </span>
                  }
                  id="navbarScrollingDropdown"
                >
                  {" "}
                </NavDropdown>
                <Nav.Link href="#" className="d-none d-lg-block mx-2">
                  <FaBookmark size={20} color="#8064a2" />
                </Nav.Link>
                <Nav.Link href="#" className="d-none d-lg-block mx-2">
                  <FaBell size={20} color="#8064a2" />
                </Nav.Link>
                <Nav.Link href="#" className="d-none d-lg-block mx-2">
                  <FaShoppingCart size={20} color="#8064a2" />
                </Nav.Link>
                {pathname.includes("landing") ? (
                  <Button variant="outline-custom">Sign In</Button>
                ) : (
                  <>
                    <Image
                      src={"/girl-avatar.png"}
                      alt="avatar logo"
                      width={40}
                      height={40}
                      className="rounded-circle mx-3 d-none d-lg-block"
                    />
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
