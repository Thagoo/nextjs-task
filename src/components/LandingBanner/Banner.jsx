import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";

export default function LandingBanner() {
  return (
    <Container fluid className={styles.container}>
      <h1 className={styles.bannerTitle}>Explore your hobby or passion</h1>

      <p className={styles.bannerText}>
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities...{" "}
      </p>
      <p className={styles.bannerText}>
        If you are an expert or a seller, you can Add your Listing and promote
        yourself, your students, products, services or events. Hop on your
        hobbyhorse and enjoy the ride.
      </p>
    </Container>
  );
}
