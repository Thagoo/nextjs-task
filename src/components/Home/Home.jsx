"use client";
import React from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./home.module.css";
import { FaCalendarCheck, FaPeopleGroup } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";

const homeDecorationData = [
  {
    title: "People",
    text: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    icon: <FaPeopleGroup size={40} className="me-2" />,
  },
  {
    title: "Place",
    text: " Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues.",
    icon: <MdPlace size={40} className="me-2" />,
  },
  {
    title: "Product",
    text: "  Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores.",
    icon: <IoBagHandleSharp size={40} className="me-2" />,
  },
  {
    title: "Program",
    text: " Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    icon: <FaCalendarCheck size={40} className="me-2" />,
  },
];
export default function Home() {
  return (
    <>
      <Container
        fluid
        className={`${styles.container} bg-light d-flex justify-content-center align-items-center`}
      >
        <Row className={styles.flexContainer}>
          <div className={styles.header}>
            <IoMdAddCircle color="#0096c8" size={40} className="me-2" />
            <span>Add Your Listing</span>
          </div>

          {homeDecorationData.map((data, index) => {
            const rectangleClass = `rectangle-${index + 1}`;
            return (
              <Col xs={12} md={6} key={index} className="mb-4">
                <div
                  className={`${styles.rectangle} ${styles[rectangleClass]}`}
                >
                  <Stack direction="vertical" gap={4}>
                    <div className={`${styles.iconTitle} ${styles.icon} `}>
                      {data.icon}
                      <span className={styles.title}>{data.title}</span>
                    </div>
                    <p>{data.text}</p>
                  </Stack>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
