"use client";
import React from "react";
import { Button, Card, Container, Stack } from "react-bootstrap";
import { ImQuotesLeft } from "react-icons/im";
import styles from "./testimonial.module.css";

export default function Testimonial() {
  return (
    <Card className={styles.container}>
      <Card.Body className={styles.testimoni}>
        <Stack direction="vertical" gap={4}>
          <Container className="d-flex">
            {" "}
            <ImQuotesLeft size={30} color="#8064a2" className="me-2" />
            <Card.Title className={styles.title}>Testimonials</Card.Title>
          </Container>
          <Card.Text className={styles.text}>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </Card.Text>
        </Stack>
      </Card.Body>
    </Card>
  );
}
