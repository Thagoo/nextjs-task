"use client";
import React from "react";
import { Button, Col, Container, Row, Card, Stack } from "react-bootstrap";

import styles from "./cards.module.css";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Decoration({ data }) {
  return (
    <>
      <Card className={styles.container}>
        <Card.Body className={styles.card}>
          <Stack direction="vertical" gap={4}>
            <div className={`${styles.iconTitle}`}>
              {data.icon}
              <span className={styles.title}>{data.title}</span>
            </div>

            <Card.Text>{data.text}</Card.Text>
            <Button variant="outline-custom" className={styles.button}>
              {data.button}
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}
