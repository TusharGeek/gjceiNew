import { Box, Title, Paper, Text, Container } from "@mantine/core";

import "./StudentCouncil.css";
// Images
import SC0 from ".././assets/StudentCouncilImg/SC0.jpg";
import Student1 from ".././assets/StudentCouncilImg/Students1.jpeg";
import Student2 from ".././assets/StudentCouncilImg/Students2.jpeg";
import Student3 from ".././assets/StudentCouncilImg/Students3.jpg";
import Student4 from ".././assets/StudentCouncilImg/Students4.jpg";
import Student5 from ".././assets/StudentCouncilImg/Students5.jpg";
import Student6 from ".././assets/StudentCouncilImg/Students6.jpg";
import Student7 from ".././assets/StudentCouncilImg/Students7.jpeg";

import Profile from "../Components/Profile";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import { StudentCouncill } from "../../data";

const StudentCouncil = () => {
  const data = [
    SC0,
    Student1,
    Student2,
    Student3,
    Student4,
    Student5,
    Student6,
    Student7,
  ];

  const Profiles = (props) => {
    StudentCouncill.map((event) => {
      if (event.club == props.Club) {
        return (
          <div className="grid-item">
            <Profile
              avatar={event.profileURL}
              name={event.name}
              // job="Innovation and event Management, Promotion and Outreach activities"
              Department={event.department}
            ></Profile>
          </div>
        );
      }
    });
  };

  return (
    <Box>
      <Carousel images={data}></Carousel>
      <Container>
        <Text
          style={{
            fontSize: "30px",
            color: "#10243f",
            fontWeight: "700",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Student Council
        </Text>
        <Box mt={32}>
          <Paper>
            <Text>
              <div class="section">
                <div class="container">
                  <Text
                    style={{
                      fontSize: "25px",
                      color: "#10243f",
                      fontWeight: "500",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  >
                    Startups events and main holdings
                  </Text>
                  <div class="grid-row">
                    {StudentCouncill.map((event) => {
                      if (event.club === "Startups events") {
                        return (
                          <div className="grid-item">
                            <Profile
                              avatar={event.profileURL}
                              name={event.name}
                              // job="Innovation and event Management, Promotion and Outreach activities"
                              Department={event.department}
                            ></Profile>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <Text
                    style={{
                      fontSize: "25px",
                      color: "#10243f",
                      fontWeight: "500",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  >
                    E-Prayas
                  </Text>
                  <div class="grid-row">
                    {StudentCouncill.map((event) => {
                      if (event.club === "E-Prayas") {
                        return (
                          <div className="grid-item">
                            <Profile
                              avatar={event.profileURL}
                              name={event.name}
                              // job={event.role}
                              Department={event.department}
                            ></Profile>
                          </div>
                        );
                      }
                    })}
                  </div>

                  <Text
                    style={{
                      fontSize: "25px",
                      color: "#10243f",
                      fontWeight: "500",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  >
                    E-Chupal
                  </Text>
                  <div class="grid-row">
                    {/* Event And Innovation */}
                    {StudentCouncill.map((event) => {
                      if (event.club === "E-Chupal") {
                        return (
                          <div className="grid-item">
                            <Profile
                              avatar={event.profileURL}
                              name={event.name}
                              // job={event.role}
                              Department={event.department}
                            ></Profile>
                          </div>
                        );
                      }
                    })}
                  </div>

                  <Text
                    style={{
                      fontSize: "25px",
                      color: "#10243f",
                      fontWeight: "500",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  >
                    E-Spotlight
                  </Text>
                  <div class="grid-row">
                    {StudentCouncill.map((event) => {
                      if (event.club === "E-Spotlight") {
                        return (
                          <div className="grid-item">
                            <Profile
                              avatar={event.profileURL}
                              name={event.name}
                              // job={event.role}
                              Department={event.department}
                            ></Profile>
                          </div>
                        );
                      }
                    })}
                  </div>

                  <Text
                    style={{
                      fontSize: "25px",
                      color: "#10243f",
                      fontWeight: "500",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  >
                    I-Buzz
                  </Text>
                  <div class="grid-row">
                    {StudentCouncill.map((event) => {
                      if (event.club === "I-Buzz") {
                        return (
                          <div className="grid-item">
                            <Profile
                              avatar={event.profileURL}
                              name={event.name}
                              // job={event.role}
                              Department={event.department}
                            ></Profile>
                          </div>
                        );
                      }
                    })}
                  </div>
                  <Text
                    style={{
                      fontSize: "25px",
                      color: "#10243f",
                      fontWeight: "500",
                      margin: "20px",
                      textAlign: "center",
                    }}
                  >
                    IT and Web
                  </Text>

                  <div class="grid-row">
                    {StudentCouncill.map((event) => {
                      if (event.club === "IT and Web") {
                        return (
                          <div className="grid-item">
                            <Profile
                              avatar={event.profileURL}
                              name={event.name}
                              // job={event.role}
                              Department={event.department}
                            ></Profile>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </Text>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default StudentCouncil;
