import { Box, Title, Paper, Text, Container, Flex, Image } from "@mantine/core";
// Images
import one from "../assets/NewsEventsImg/NewsEventImg1.jpeg";
import two from "../assets/NewsEventsImg/NewsEventImg2.jpeg";
import three from "../assets/NewsEventsImg/NewsEventImg3.jpeg";
import four from "../assets/NewsEventsImg/NewsEventsImg4-.jpeg";
import five from "../assets/NewsEventsImg/NewsEvents5.jpg";
import { Events } from "../../data";
// Poster images
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { UpcomingEvent, FormerEvents } from "../Components/Events";
const NewsEvents = () => {
  const data = [one, two, four, five];
  return (
    <Box>
      <Carousel images={data} />
      <Container>
        <Text style={{ fontSize: "30px", color: "#10243f", fontWeight: "700" }}>
          News And Events
        </Text>

        {/*Upcoming Event */}
        <Container  >
          <Box mt={40} py={40}>
            <Title order={2} mb={24}>
              Upcoming Events
            </Title>
              {Events.map((event) => {
              let Dat = Date.now();
              let date = new Date(event.date);
              console.log(event);
              if (date >= Dat) {
                return <UpcomingEvent data={event} />;
              }
            })}
            <Flex
              gap="sm"
              sx={(theme) => ({
                flexDirection: "column",
                [theme.fn.largerThan("md")]: {
                  flexDirection: "row",
                },
              })}
            ></Flex>
          </Box>
        </Container>

        {/* former Events */}
        <Box   mt={40} py={40}>
          <Title order={2} mb={24}>
            Former Events
          </Title>
          <Text style={{ lineHeight: "2", fontSize: "20px" }}>
            The incubation center acts as a tech hub, which welcomes budding
            ideas. It promotes the concept of entrepreneurship; hence it holds
            various events, seminars and webinars to carry the approach to the
            youth. To list few:
          </Text>

          <Flex
            gap="sm"
            sx={(theme) => ({
              flexDirection: "column",
              [theme.fn.largerThan("md")]: {
                flexDirection: "row",
              },
            })}
          >
            {Events.map((event) => {
              let Dat = Date.now();
              let date = new Date(event.date);
              console.log(event);
              if (date < Dat) {
                return <FormerEvents data={event} />;
              }
            })}
          </Flex>
        </Box>

        <Box mt={32}>
          <Paper></Paper>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default NewsEvents;
