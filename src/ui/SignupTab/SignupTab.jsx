"use client";
import Signin from "@/components/SignIn/Signin";
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import styles from "./signuptab.module.css";

export default function SignupTab({ children }) {
  return (
    <div>
      {" "}
      <Container fluid>
        <Tab.Container defaultActiveKey="login">
          <Tabs defaultActiveKey="login" className="mb-3" justify>
            <Tab
              eventKey="login"
              title={<span className={styles.tabButton}>Sign In</span>}
            >
              <Signin />
            </Tab>
            <Tab
              eventKey="register"
              title={<span className={styles.tabButton}>Join In</span>}
            >
              <Signin />
            </Tab>
          </Tabs>
        </Tab.Container>
      </Container>
    </div>
  );
}
