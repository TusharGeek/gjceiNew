import React, { useState } from "react";
import {
  Box,
  Text,
  Container,
  Button,
  Flex,
} from "@mantine/core";
import Carousel from "../Components/Carousel";
import { IconArrowBadgeDownFilled, IconArrowBadgeUpFilled } from "@tabler/icons-react";

import Footer from ".././Components/Footer";
import "../Pages/Home.css";
import "../Components/coordinatorMessage.css";
// Images
import one from "../assets/HomePageImg/Home.jpg";
import two from "../assets/HomePageImg/Home2-.jpeg";
import three from "../assets/HomePageImg/Home3.jpg";
import four from "../assets/HomePageImg/Home4.jpeg";

import six from "../assets/HomePageImg/Home6.jpg";
// Linkage Images
import Linkage1 from "../assets/linkageImg/linkageIMG1.png";
import Linkage2 from "../assets/linkageImg/linkageIMG2.jpg";
import Linkage3 from "../assets/linkageImg/linkageIMG3.png";
import Linkage4 from "../assets/linkageImg/linkageIMG4.jpg";
import Linkage5 from "../assets/linkageImg/linkageIMG5.jpeg";
import Linkage6 from "../assets/linkageImg/linkageIMG6.png";
import Linkage7 from "../assets/linkageImg/linkageIMG7.png";
import Linkage8 from "../assets/linkageImg/linkageIMG8.jpeg";
import Linkage9 from "../assets/linkageImg/linkageIMG9.jpeg";
import Linkage10 from "../assets/linkageImg/linkageIMG10.png";
import Linkage11 from "../assets/linkageImg/linkageIMG11.jpeg";

import { CoordinatorMessage } from "../Components/Coordinatormessage";
import { UpcomingEvent } from "../Components/Events";
import { Events } from "../../data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {

  const [showEvents, setShowEvents] = useState(false);
  const data = ["https://online.gndu.ac.in/assets/images/slider/pic5_NAAC_Certificate.png"]
  return (
    <Box>
      <div data-aos="fade-up" data-aos-duration="1000">
      <Carousel
        images={data}
      />
        <Container>
          {new Date(Events[0].date) >= Date.now() && (
            <Text
              style={{
                fontSize: "30px",
                color: "#10243f",
                fontWeight: "700",
                margin: "50px 0",
                textAlign: "center",
              }}
            >
            <Flex justify="center">
            <Button
  variant="default"
  onClick={() => setShowEvents(!showEvents)}
  style={{ display: "flex", alignItems: "center" }}
>
  {showEvents ? (
    <>
      <IconArrowBadgeUpFilled style={{ marginRight: "5px" }} />
      Hide Upcoming Events
    </>
  ) : (
    <>
      <IconArrowBadgeDownFilled style={{ marginRight: "5px" }} />
      Show Upcomming Events
    </>
  )}
</Button>
            </Flex>
            </Text>
          )}
          {showEvents &&
            Events.map((event) => {
              console.log(event);
              if (new Date(event.date) >= Date.now()) {
                return <UpcomingEvent data={event} />;
              }
            })}
        </Container>
        
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <Text
            style={{
              fontSize: "30px",
              color: "#10243f",
              fontWeight: "700",
              margin: "50px 0",
              textAlign: "center",
            }}
          >
            {" "}
            Coordinator Message{" "}
          </Text>
          <CoordinatorMessage />
        </Container>
      </div>

      <Container>
        <Text
          style={{
            fontSize: "30px",
            color: "#10243f",
            fontWeight: "700",
            margin: "50px 0",
            textAlign: "center",
          }}
        >
          Industrial Linkage
        </Text>
        <div className="cards">
          <div className="card">
            <img
              className="LinkageImg"
              style={{ height: "200px" }}
              src={Linkage11}
            ></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage2}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage3}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage4}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage5}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage6}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage7}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage8}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage9}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage10}></img>
          </div>
          <div className="card">
            <img className="LinkageImg" src={Linkage1}></img>
          </div>
        </div>
      </Container>

   

      <Footer />
    </Box>
  );
};

export default Home;
