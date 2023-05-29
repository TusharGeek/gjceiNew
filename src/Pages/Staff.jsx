import { Box, Title, Paper, Text, Container, Flex } from "@mantine/core";
import {ArticleCardVertical} from "../Components/Clubs";
import "./Staff.css";
import { useNavigate } from "react-router-dom";
// Images
import SC0 from ".././assets/StudentCouncilImg/SC0.jpg";
import St1 from ".././assets/StaffImg/St1.png";
import St2 from ".././assets/StaffImg/St2.png";
import St3 from ".././assets/StaffImg/St3.png";
import St4 from ".././assets/StaffImg/St4.png";
import St5 from ".././assets/StaffImg/St5.png";
import St6 from ".././assets/StaffImg/St6.png";
import St7 from ".././assets/StaffImg/St7.png";
import St8 from ".././assets/StaffImg/St8.png";
import St9 from ".././assets/StaffImg/St9.png";
import St10 from ".././assets/StaffImg/St10.png";
import St11 from ".././assets/StaffImg/St11.png";
import St12 from ".././assets/StaffImg/St12.png";
import S13 from ".././assets/StaffImg/S13.png";


// Images


import Profile from "../Components/Profile";
import Footer from "../Components/Footer";

const Committee = () => {
  const navigate = useNavigate();




  function handleClick(){
   
    navigate("/Page")
  }
  return (
    <Box>
      <Container>
        <Text
          style={{
            fontSize: "30px",
            color: "#10243f",
            fontWeight: "700",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Organizational Structure
        </Text>
        <Box mt={32}>
          <Paper>
            <Flex justify="center">
              <Profile
                avatar={S13}
                name="Prof. (Dr.) Jaspal Singh Sandhu"
                job="Vice chancellor"
              />
            </Flex>
            <Flex
              justify="space-around"
              sx={(theme) => ({
                flexDirection: "column",
                alignItems: "center",
                [theme.fn.largerThan("md")]: {
                  flexDirection: "row",
                },
              })}
            >
              <Profile
                avatar={St12}
                name="Prof. Sarabjot Singh behl"
                job="Nodal Officer Rusa 2.0"
              />

              <Profile
                avatar ={St8}
                name="Prof. (Dr) P.K. Pati"
                job="Coordinator, GJCEI"
              />
            </Flex>

            <Text>
              <div class="section">
                <div className="container">
                  <div className="grid-row">
                    <div className="grid-item"></div>
                  </div>
                  <div className="grid-row">
                    <div class="grid-item"></div>
                    <div className="grid-item"></div>
                  </div>
                </div>
                <div class="container">
                  <Text
                    style={{
                      fontSize: "30px",
                      color: "#10243f",
                      fontWeight: "700",
                      marginTop: "40px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Faculty Mentors
                  </Text>
                  <div class="grid-row">
                    <div class="grid-item">
                      <Profile
                        avatar={St2}
                        name="Ms. Harkirandeep Kaur"
                        job="Incharge IPR Cell GJCEI"
                        Department="Department of Laws"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        avatar={St1}
                        name="Dr. Swati Mehta"
                        job="Startup and Promotions"
                        Department="Punjab School of Economics"
                      ></Profile>
                    </div>

                    <div className="grid-item">
                      <Profile
                        avatar={St3}
                        name="Dr. Prabhpreet Singh"
                        job="Facility Mentor for Startup Activities"
                        Department="Department of Chemistry"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        avatar={St10}
                        name="Dr. Kuldeep Singh Brar"
                        job="Faculty Mentor for Discovery Lab"
                        Department="Department of Electronics Technology"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        avatar={St11}
                        name="Dr. Rajdeep Singh Sohal"
                        job="Faculty Mentor for Discovery Lab"
                        Department="Department of Electronics Technology"
                      ></Profile>
                    </div>
                  </div>
                </div>
                <div className="container" style={{marginTop:"20px"}}>
                  <Text
                  style={{
                    fontSize: "30px",
                    color: "#10243f",
                    fontWeight: "700",
                    marginTop: "40px",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}>
                  E-Clubs
                  </Text>
                  <div className="grid-row">
                  <div class="grid-item">
                  <ArticleCardVertical
                  club="E-Startup"
                  />
                    </div>
                    <div class="grid-item" onClick={()=>{navigate("/page")}}>
                  <ArticleCardVertical
                  club="E-Pryas"
                  />
                    </div>
                    <div class="grid-item">
                  <ArticleCardVertical
                  club="E-Spotlight"/>
                    </div>
                    <div class="grid-item">
                  <ArticleCardVertical
                  club="E-Chopal"/>
                    </div>
                    <div class="grid-item">
                  <ArticleCardVertical
                  club="I-Buzz"/>
                    </div>
                    <div class="grid-item">
                  <ArticleCardVertical
                  club="GJCEI Web"/>
                    </div>
                  </div>
                  
                
                </div>
                <div className="container" style={{ marginTop: "20px" }}>
                  <Text
                    style={{
                      fontSize: "30px",
                      color: "#10243f",
                      fontWeight: "700",
                      marginTop: "40px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                   Office Staff
                  </Text>
                  <div className="grid-row">
                    <div class="grid-item">
                      <Profile
                        avatar={St4}
                        name="Dr. Hardesh Kumar"
                        job="Senior Technician"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        avatar={St9}
                        name="Pardeep Dutta"
                        job="Data Entry Operator"
                      ></Profile>
                    </div>
                    <div class="grid-item">
                      <Profile
                        avatar={St5}
                        name="Gurmeet Kaur"
                        job="Data Entry Operator"
                      ></Profile>
                    </div>
                    <div className="grid-item">
                      <Profile
                        avatar={St6}
                        name="Bikram Singh"
                        job="Staff"
                      ></Profile>
                    </div>

                  </div>
                </div>

                <Container>
              
                  <Box mt={32}>
                   
                  </Box>
                </Container>
              </div>
            </Text>
          </Paper>
        </Box>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Committee;
