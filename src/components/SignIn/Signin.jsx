import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { SiGoogle } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import styles from "./signin.module.css";
import { Button, Container, Form, InputGroup, Stack } from "react-bootstrap";

export default function Signin() {
  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    passwd: yup.string().required("Password is required"),
  });

  // logout the user
  const handleLogout = () => {};
  // login the user
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    // send the email and password to the server

    console.log(values);
  };
  return (
    <div>
      <Formik
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className={styles.formContainer}
          >
            <Stack direction="vertical" gap={2}>
              <Button variant="outline-custom" className={styles.authButton}>
                <Container className={styles.flexContainer}>
                  <SiGoogle size={20} className={styles.iconStart} />
                  <span className={styles.centerText}>
                    Continue with Google
                  </span>{" "}
                </Container>
                <div className={styles.spacer}></div>
              </Button>
              <Button variant="outline-custom" className={styles.authButton}>
                <Container className={styles.flexContainer}>
                  <SiFacebook size={20} className={styles.iconStart} />
                  <span className={styles.centerText}>
                    Continue with Facebook
                  </span>
                </Container>
                <div className={styles.spacer}></div>
              </Button>
              <p className={styles.lineBreak}>Or connect with</p>
              <Form.Group c controlId="validationFormik101">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group c>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <p className={styles.agreementText}>
                By continuing, you agree to our{" "}
                <span style={{ fontWeight: "bold" }}>Terms of Service</span> and{" "}
                <span style={{ fontWeight: "bold" }}>Privacy Policy</span>
              </p>
              <Button variant="custom" style={{ width: `100%` }} type="submit">
                <span style={{ fontWeight: "bold" }}>Agree and Continue</span>
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
}
