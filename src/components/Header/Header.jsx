"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  BookmarkIcon,
  BellIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { ButtonToolbar, InputGroup, NavbarBrand } from "react-bootstrap";
import styles from "./header.module.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
      <Container>
        <NavbarBrand href="#">
          <img src={"/hobby-logo.jpg"} width={200} />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <ButtonToolbar aria-label="Toolbar with Button groups">
            <InputGroup className="d-flex input-group">
              <Form.Control
                type="text"
                placeholder="Search here"
                aria-label="search here"
                aria-describedby="btnGroupAddon"
              />
              <Button variant="custom">
                <MagnifyingGlassIcon height={20} />
              </Button>
            </InputGroup>
          </ButtonToolbar>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <Nav
            className=" my-2 my-lg-2 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title={<span className={styles.dropdownItem}>Explore</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#">People Community</NavDropdown.Item>
              <NavDropdown.Item href="#">Places - Venues</NavDropdown.Item>
              <NavDropdown.Item href="#">Programs - Events</NavDropdown.Item>
              <NavDropdown.Item href="#">Products - Store</NavDropdown.Item>
              <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className={styles.dropdownItem}>Hobbies</span>}
              id="navbarScrollingDropdown"
            >
              {" "}
            </NavDropdown>
            <Nav.Link href="#" disabled>
              <BookmarkIcon height={20} color="#8064a2" />
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <BellIcon height={20} color="#8064a2" />
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <ShoppingCartIcon height={20} color="#8064a2" />
            </Nav.Link>
            {pathname.includes("landing") ? (
              <Button variant="outline-custom">Sign In</Button>
            ) : (
              <>
                <Image
                  src={"/no-avatar.svg"}
                  alt="avatar logo"
                  width={80}
                  height={44}
                  className="rounded-full"
                />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
