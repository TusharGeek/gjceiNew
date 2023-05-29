import {
    Box,
    Title,
    Paper,
    Text,
    Container,
    Select,
    Flex,
    TextInput,
    Textarea,
    Button,
  } from "@mantine/core";
  import {
    IconPhone,
    IconMail
  } from "@tabler/icons";
  import Footer from "../Components/Footer";
  import "./ContactUs.css";
  
  const StartupForm = () => {
    return (
      <Box>
        <Container>
          <Text
            style={{
              fontSize: "30px",
              color: "#10243f",
              fontWeight: "700",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
           Start Up Form
          </Text>
          <Box mt={32}>
            <Paper withBorder p="lg">
              <Flex
                direction="column"
                gap="lg"
                align="center"
                maw={300}
                mx="auto"
              >
                {/* 
                <Flex gap="sm" 
                align="center"
                maw={300}
                mx="auto">
                <IconPhone></IconPhone> 01832821378
                </Flex>
                <Flex gap="sm" 
                align="center"
                maw={300}
                mx="auto">
                <IconMail></IconMail> coordinator.gjcei@gndu.ac.in
                </Flex> 
                */}                          
                <TextInput
                  placeholder="Name..."
                  label="Name"
                  required
                  sx={{ width: "100%" }}
                />
                <Flex
                gap={20}
                >
                <TextInput
                  placeholder="Email..."
                  label="Email"
                  required
                  sx={{ width: "100%" }}
                />
                  <TextInput
                  placeholder="Phone..."
                  label="Phone"
                  required
                  sx={{ width: "100%" }}
                />
                </Flex>
           
                <Select
        label="What describes you best?"
        placeholder="Pick one"
        sx={{ width: "100%" }}
        data={[
          { value: 'Startup/Aspiring Entrepreneur', label: 'Startup/Aspiring Entrepreneur' },
          { value: 'Mentor', label: 'Mentor' },
          { value: 'Investor', label: 'Investor' },
          { value: 'Industry/SME', label: 'Industry/SME' },
          { value: 'Business Service Provider', label: 'Business Service Provider' },
        ]}
      />
  
                
  
               <TextInput
                  placeholder="Company Name"
                  label="Company Name"
                  required
                  sx={{ width: "100%" }}
                />
                
                <TextInput
                  placeholder="www.      .com/.org"
                  label="Website/Online Presence"
                  required
                  sx={{ width: "100%" }}
                />
  
    
                <Textarea
                  placeholder="Message"
                  label="Message"
                  required
                  sx={{ width: "100%" }}
                />
  
                <Button sx={{ width: "100%" }}>Submit</Button>
              </Flex>
            </Paper>
          </Box>
        </Container>
        <Footer></Footer>
      </Box>
    );
  };
  
  export default StartupForm;
  