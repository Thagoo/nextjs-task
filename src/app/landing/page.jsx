import Navigation from "@/components/Header/Header";
import LandingBanner from "@/components/LandingBanner/Banner";
import Decoration from "@/ui/DecorationCards/Card";
import EndBanner from "@/ui/EndBanner/EndBanner";
import Footer from "@/ui/Footer/Footer";

import SignupTab from "@/ui/SignupTab/SignupTab";
import Testimonial from "@/ui/Testimonial/Testimonial";
import Image from "next/image";
import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

export default function Page() {
  const decorations = [
    {
      title: "People",
      text: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      button: "Connect",
      icon: <FaPeopleGroup color="#8064a2" size={40} className="me-2" />,
    },
    {
      title: "Place",
      text: " Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      button: "Meet up",
      icon: <MdPlace size={40} color="#c0504d" className="me-2" />,
    },
    {
      title: "Product",
      text: "  Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      button: "Get it",
      icon: <IoBagHandleSharp size={40} color="#c0504d" className="me-2" />,
    },
    {
      title: "Program",
      text: " Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      button: "Attend",
      icon: <FaCalendarCheck size={40} color="#0096c8" className="me-2" />,
    },
  ];

  const addYourOwn = {
    title: "Add you own",
    text: "Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page Add new",
    button: "Add new",
    icon: <IoMdAddCircle size={40} color="#0096c8" className="me-2" />,
  };

  return (
    <>
      <Navigation />
      <Stack direction="vertical" gap={5}>
        <Container className="landingContainer" fluid>
          <Container>
            <Row>
              <Col xs={12} lg={7}>
                <Stack direction="vertical" gap={2}>
                  <LandingBanner />
                  <div className="desktopImage">
                    <Image
                      src={"/banner.png"}
                      width={600}
                      height={300}
                      layout="responsive"
                    />
                  </div>
                </Stack>
              </Col>

              <Col>
                <Stack direction="vertical" gap={2}>
                  <SignupTab />
                  <div className="mobileImage">
                    <Image
                      src={"/banner.png"}
                      width={600}
                      height={300}
                      layout="responsive"
                    />
                  </div>
                </Stack>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Row>
            {decorations.map((data) => {
              return (
                <>
                  <Col xs={12} lg={6} className="mb-4">
                    <Decoration data={data} />
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
        <Container
          style={{ padding: "40px", backgroundColor: "#f7fdff" }}
          fluid
        >
          <Container>
            <Decoration data={addYourOwn} />
          </Container>
        </Container>
        <Container>
          <Testimonial />
        </Container>

        <EndBanner />
        <Footer />
      </Stack>
    </>
  );
}
