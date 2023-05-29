import { useState } from "react";
import {  useEffect } from "react";
import {
  Box,
  UnstyledButton,
  Container,
  Title,
  Text,
  Flex,
  Drawer,
} from "@mantine/core";
import { IconMenu2 } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import GJCEILogo from "../assets/Logo/GNDULogo.png";
import GNDULogo from "../assets/Logo/logo.png";

const Nav = () => {
  const [opened, setOpened] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  const isDesktop = useMediaQuery("(min-width: 992px)");

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Mandate",
      path: "/AboutUs",
    },
    {
      label:"Infrastructure",
      path:"/Infrastructure"
    },
    {
      label:"Organizational Structure",
      path:"/OrganizationalStructure"
    },
    {
      label:"Student Council",
      path:"/StudentCouncil"
    },
    {
      label:"News & Events",
      path:"/NewsEvents"
    },
    {
      label:"Activities",
      path:"/Activities"
    },
    {
      label:"Linkage Form",
      path:"/ContactUs"
    },
    {
      label:"Startup Form",
      path:"/StartupForm"
    },

  ];
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
 
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
    isDesktop?(windowHeight > 370 ? setSticky(true) : setSticky(false)):(windowHeight > 85 ? setSticky(true) : setSticky(false));
    }
  };
  return (
 
 <div >
    <>
    <Box
       style={{margin:"0"}}
      >
        <div style={{backgroundColor:"#10243e",padding:"20px"}}>
          <Title style={!isDesktop?{fontSize:"8px"}:{fontSize:"30px"}} align="center" order={2} color="white">
         <img style={!isDesktop?{height:"30px",marginRight:"16px" }:{height:"100px",marginRight:"20px" }} src={GJCEILogo}></img>Golden Jubilee Centre For Entrepreneurship And Innovation 
         <img style={!isDesktop?{height:"30px",marginLeft:"10px" }:{height:"100px",marginLeft:"10px" }} src={GNDULogo}></img>
       <br></br><span style={!isDesktop?{fontSize:"8px"}:{fontSize:"20px"}}>(Infinity)
         <br></br>Under <br></br>
         RUSA 2.0 Component 4<br></br>
         Quality and Excellence in Select State Universities</span>
       
        
          </Title>
        </div>
      </Box>
      <Box
        sx={(theme) => ({
          paddingBlock: theme.spacing.md,
          backgroundColor: "rgb(223,223,223)",
          position: sticky ? "fixed" : "static",
          top: 0,
          left: 0,
          right: 0,
          inlineSize: "100%",
          zIndex: 9,
        })}
      >
        <Container >
          <Flex align="center">
            {!isDesktop ? (
              <>
                <UnstyledButton
                  onClick={() => setOpened(true)}
                  sx={(theme) => ({
                    borderRadius: theme.radius.sm,

                    color: "#fff",
                  })}
                >
                  <Flex align="center" gap="sm">
                    <IconMenu2 style={{color:"black"}}/>
                    <Text style={{color:"black"}}>Menu</Text>
                  </Flex>
                </UnstyledButton>
                {/* Drawer  */}
                <Drawer
                  opened={opened}
                  onClose={() => setOpened(false)}
                  title="Pages"
                  padding="xl"
                  size="xl"
                  position="top"
                  transition="slide-down"
                  styles={{
                    drawer: {
                      height: "20 `rem",
                    },
                  }}
                >
                  <Flex wrap="wrap" gap="md">
                    {navLinks.map((item, idx) => (
                      <UnstyledButton
                        key={idx}
                        sx={(theme) => ({
                          display: "inline-flex",
                          padding: ".75rem 1rem",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: theme.colors.gray[1],
                          color: theme.fn.primaryColor(),
                          borderRadius: 2,
                        })}
                        onClick={() => {
                          setOpened(false);
                          navigate(item.path);
                        }}
                      >
                        {item.label}
                      </UnstyledButton>
                    ))}
                  </Flex>
                </Drawer>
              </>
            ) : (
              <Flex sx={{ order: 1 }}>
                <Flex wrap="wrap" gap="md">
                  {navLinks.map((item, idx) => (
                    <UnstyledButton
                      key={idx}
                      sx={(theme) => ({
                        display: "inline-flex",
                    
                        justifyContent: "center",
                        alignItems: "center",
                     
                        color: "black",
                        borderRadius: 5,
                        transition: "background-color 200ms ease-in-out",
                        "&:hover": {
                          textDecoration:"underline",
                        },
                      })}
                      onClick={() => {
                        setOpened(false);
                        navigate(item.path);
                      }}
                    >
                      {item.label}
                    </UnstyledButton>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
        </Container>
      </Box>
    </>
    </div>
  

   
   
    
  );
};

export default Nav;
