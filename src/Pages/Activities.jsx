import { Box, Title, Paper, Text, Container } from "@mantine/core";

// Images
import one from "../assets/ActivitiesImg/ActivitiesImg1.jpeg";
import two from "../assets/ActivitiesImg/ActivitiesImg2.jpeg";
import three from "../assets/ActivitiesImg/ActivitiesImg3.jpeg";
import four from "../assets/ActivitiesImg/ActivitiesImg4.jpeg";
import five from "../assets/ActivitiesImg/ActivitiesImg5.jpeg";
import six from "../assets/ActivitiesImg/ActivitiesImg6.jpeg";
import seven from "../assets/ActivitiesImg/ActivitiesImg7-.jpeg";
import eight from "../assets/ActivitiesImg/ActivitiesImg8.jpg";
import nine from "../assets/ActivitiesImg/ActivitiesImg9.jpg";
import ten from "../assets/ActivitiesImg/ActivitiesImg10.jpg";
import eleven from "../assets/ActivitiesImg/Activities11.jpeg";

import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";

const Activities = () => {
  const data = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ];

  return (
    <Box>
      <Carousel images={data} />

      <Container>
        <Text style={{ fontSize: "30px", color: "#10243f", fontWeight: "700" }}>
          Out Reach Activities
        </Text>
        <Box mt={32}>
          <Paper>
            <Text
              style={{
                fontSize: "20px",
                color: "#10243f",
                fontWeight: "500",
                marginTop: "30px",
              }}
            >
              The outreach activity is an important part of the incubation
              center's business model. Through outreach activity, people can
              come to learn more about the company's products and services. It
              also serves as an incubation centre for new ideas that need more
              time to develop. The main goal of outreach activity is to increase
              exposure and awareness for a product or service. It can be done
              through social media posts, email marketing and other forms of
              advertising. GJCEI is indulge with various outreach activities to
              reach school students, teachers, college students to increase the
              awareness of the centre. Our council member visits various
              departments of the university and different colleges in Amritsar
              to promote our incubation centre. Also, we welcome our visitors
              with whole heartedly. Any school, college, university can visit us
              anytime and get to know about our centre. If a school or college
              want to send a group of students to visit they are also welcomed.
              We collect the contact details of our visitors, so that we can
              give them a update about our upcoming event or activities.
              <br></br>
              <strong>
                <em>
                  If you are the one who have not visit GJCEI, we are waiting
                  for you, what you’re waiting for?
                </em>{" "}
              </strong>
            </Text>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Activities;
