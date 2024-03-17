import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Stack,
  InputGroup,
} from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import styles from "./footer.module.css";
import { FaTelegram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <Container fluid className="p-0">
      <Container>
        <Row className="py-4">
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className={styles.listHeading}>Hobbycue</h5>
            <ul className={`${styles.listContainer} list-unstyled`}>
              <li className="mb-1">About us</li>
              <li className="mb-1">Our services</li>
              <li className="mb-1">Work with Us</li>
              <li className="mb-1">FAQ</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className={styles.listHeading}>Column 2</h5>
            <ul className={`${styles.listContainer} list-unstyled`}>
              <li className="mb-1">About us</li>
              <li className="mb-1">Our services</li>
              <li className="mb-1">Work with Us</li>
              <li className="mb-1">FAQ</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className={styles.listHeading}>Column 3</h5>
            <ul className={`${styles.listContainer} list-unstyled`}>
              <li className="mb-1">About us</li>
              <li className="mb-1">Our services</li>
              <li className="mb-1">Work with Us</li>
              <li className="mb-1">FAQ</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className={styles.listHeading}>Social Media</h5>
            <div className="mt-2">
              <Stack direction="horizontal" gap={4}>
                <FaFacebookF />

                <FaTwitter />

                <FaInstagram />

                <FaLinkedinIn />
                <FaTelegram />
                <FaYoutube />
              </Stack>
            </div>

            <Form className="mt-4">
              <InputGroup className="d-flex input-group">
                <Form.Control
                  type="text"
                  placeholder="Email ID"
                  aria-label="email ID"
                  aria-describedby="btnGroupAddon"
                />
                <Button variant="custom">Invite</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center bg-light ">
        <Container>
          <p className={styles.copyright}>
            Lohith. Copyrights 2024. All rights reserved
          </p>
        </Container>
      </Container>
    </Container>
  );
}
