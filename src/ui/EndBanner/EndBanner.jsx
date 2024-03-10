import Image from "next/image";
import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import styles from "./endBanner.module.css";

export default function EndBanner() {
  return (
    <Container fluid className={styles.container}>
      <Container>
        <Stack direction="vertical" gap="4">
          <h1>Your Hobby,Your Community</h1>
          <Button variant="custom" className={styles.button}>
            Get Started
          </Button>
          <Image
            layout="responsive"
            src={"/end-banner.png"}
            width={300}
            height={400}
          />
        </Stack>
      </Container>
    </Container>
  );
}
