import { Box, Title, Paper, Text, Container, Flex } from "@mantine/core";
import Infra from "../Components/Infra";
// Images
import one from "../assets/InfrastructureImg/IMGA.jpg";
import two from "../assets/InfrastructureImg/IMGB.jpg";
import three from "../assets/InfrastructureImg/IMGC.jpeg";
import four from "../assets/InfrastructureImg/IMGD.jpeg";
import five from "../assets/InfrastructureImg/IMGE.jpeg";
import six from "../assets/InfrastructureImg/IMGF.jpeg";
import seven from "../assets/InfrastructureImg/IMGG.jpeg";
import eight from "../assets/InfrastructureImg/IMGH.jpeg";
import nine from "../assets/InfrastructureImg/IMGI.jpeg";
import ten from "../assets/InfrastructureImg/IMGJ.jpeg";
import eleven from "../assets/InfrastructureImg/IMGK.jpeg";
import infra1 from "../assets/InfrastructureImg/Infra1.jpg";
import infra2 from "../assets/InfrastructureImg/Infra2.jpg";
import infra3 from "../assets/InfrastructureImg/Infra3.jpg";
import infra4 from "../assets/InfrastructureImg/Infra5.jpg";
import infra5 from "../assets/InfrastructureImg/Infra6.jpg";
import infra6 from "../assets/InfrastructureImg/Infra4.jpg";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Infrastructure = () => {
  const data = [one, two, three, four, five, six, seven, ten, eleven];

  return (
    <Box>
      <Carousel images={data} />

      <Container>
       
       
          <div className="grid-row">
            <div  data-aos='fade-up' data-aos-duration="1000" >
              <div className="grid-item">
                <Infra
                  image={infra6}
                  title="Startup Cell"
                  description="The startup rooms are located upstairs where students can sit and work with their team on their startup ideas. The rooms are made functional with high-speed internet and good air-conditioning."
                />
              </div>
            </div>

            <div  data-aos='fade-up' data-aos-duration="1000" >
              <div className="grid-item">
                <Infra
                  image={infra2}
                  title="IPR Cell"
                  description="To facilitate IPR (Intellectual Property Rights) related activities, an IPR cell has also been made functional at the centre, under the guidance of Dr. (prof.) Harkirandeep Kaur."
                />
              </div>
            </div>

            <div  data-aos='fade-up' data-aos-duration="1000" >
              <div className="grid-item">
                <Infra
                  image={infra4}
                  title="Skill Labs 2"
                  description="The skill lab-II is located downstairs and has a classroom- like setup, with a whiteboard, perfect for holding business meetings and to explain a budding entrepreneurial idea. The lab  is fully air-conditioned and is also equipped with a high-speed internet facility."
                />
              </div>
            </div>
            <div  data-aos='fade-up' data-aos-duration="1000" >
              <div className="grid-item">
                <Infra
                  image={seven}
                  title="Co-working space"
                  description="The co-working space is located upstairs and currently contains 36 computers, a projector and a whiteboard to present findings or to pitch a business idea. Various competitions organised by our centre, like idea pitching competitions are held there."
                />
              </div>
            </div>
            <div  data-aos='fade-up' data-aos-duration="1000" >
              <div className="grid-item">
                <Infra
                  image={infra5}
                  title="Discovery Lab"
                  description="The discovery lab is a high-tech lab containing a bunch of high-end technological gear. The lab is fully air-conditioned and has 5 electric workstations, which are the computers that are specifically configured to meet the most demanding technical computing requirements. Along with this, the discovery lab has 3-D scanners, photocopier machines and 3-D printer with a capacity to develop 3D prototypes having dimensions of 600*600*600 mm3, in addition to the 11 computers provided"
                />
              </div>
            </div>
            <div  data-aos='fade-up' data-aos-duration="1000" >
              <div className="grid-item">
                <Infra
                  image={eleven}
                  title="Skill Labs 1"
                  description="Located downstairs, the skill lab-I of GJCEI provides its students and various entrepreneurs with a fully air conditioned room, equipped with 32 computers and a whiteboard fordisplaying and demonstrating their work. It provides them with all the important facilities including a high-speed internet facility which is required by entrepreneurs to start their businesses."
                />
              </div>
            </div>
          </div>
          <Paper>
          <Text style={{ fontSize: "30px", color: "#10243f", fontWeight: "700",textAlign:"center",margin:"30px" }}>
          About Infrastructure
        </Text>
            <Text style={{ lineHeight: "2", fontSize: "20px" }}>
              Golden Jubilee Centre for Entrepreneurship and Innovation (GJCEI)
              established at Guru Nanak Dev University under component-4
              (Quality and Excellence in Select State Universities) of RUSA 2.0
              is actively engaged in building an ecosystem of entrepreneurship
              and innovation which will catalyze the economy of the state and
              country at large. Aligned with the mandate of the centre, a state
              of the art infrastructure has been created. Around 120 All in One
              computers, servers, printers, workstations, and photocopier
              machines have been procured by the centre. A high-speed internet
              facility has been provided to the centre for its routine
              functioning.
              <br />
              <br />
              Further, the centre has set up a 3D printing facility with a
              capacity to develop 3D prototypes having dimensions of 600*600*600
              mm3. In addition, a 3D Scanning facility has also been developed
              which can scan and develop 3D models of any micro/macro object.
              Furthermore, to help the young minds in developing their own 3D
              models and in printing 3D prototypes, ANSYS and SOLIDWORKS
              software have also been made available at the centre. The centre
              has also set up a discovery lab equipped with PCB Design Machine,
              Electronic Workbenches and numerous other equipment necessary for
              developing a working electronic model/prototype.
              <br />
              <br />
              To impart skill-based training for generating employability and
              enhancing entrepreneurship, the centre has developed two skill
              labs. To promote start-up activities, a coworking space and
              adequate start-up cabins have been designed at the centre. To
              facilitate IPR (Intellectual Property Rights) related activities,
              an IPR cell has also been made functional at the centre. Besides
              these, a video conferencing facility to hold online meetings and
              interact with various stakeholders has been set up.
            </Text>
          </Paper>
     
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Infrastructure;
