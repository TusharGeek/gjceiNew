import { useState } from 'react';
import {
  createStyles,
  Text,
  Title,
  Paper,
  Button,
  Image,
  Group,
  Container,
  Box
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `1rem`,
    borderRadius: theme.radius.md,
    maxWidth: "69rem",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `0.16rem solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    margin: "auto",
    marginTop: "0.9rem",
    textAlign: "left",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "50%",
    objectFit: "contain",
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `2rem`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  control: {
    borderRadius: "2%",
  },
  Description:{
    maxWidth:"69rem",

  }
}));


export function UpcomingEvent({ data }) {
  const { classes } = useStyles();
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Container data-aos='fade-up' data-aos-duration="1000" className={classes.wrapper}>
  <Box className={classes.body}>
    <Title className={classes.title}>{data.title}</Title>
    <Text mb={5} className={classes.Description}>
       {data.Description}
      
    </Text>
    <br />
    <Text style={{ fontWeight: "bold" }} fz="sm">Date: {data.date}</Text>
    <Text style={{ fontWeight: "bold" }} fz="sm">Venue: {data.venue}</Text>
    </Box>
  <Image src={data.image} style={{ width: "400px" }} className={classes.image} maintainAspectRatio={true} />
  
</Container>
  );
}




const useStyles2 = createStyles((theme) => ({
  card: {
    height: "27.5rem",
    maxWidth: "18rem",
    width: "18rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.2,
    fontSize: "2rem",
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.01,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export function FormerEvents({ data }) {
  const { classes } = useStyles2();
  const [opened, { open, close }] = useDisclosure(false);

  const handleclick = () => {};
  return (
    <div data-aos='fade-up' data-aos-duration="3000" >
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        sx={{ backgroundImage: `url(${data.image})` }}
        className={classes.card}
      >
        <div></div>
        <>
          <Modal opened={opened} onClose={close} title={data.title}>
            <Text fw={500} fz="lg" mb={5}>
              {data.Description}
            </Text>
            <br />
            <Text fz="sm">date:{data.date}</Text>
            <Text fz="sm">Venue:{data.venue}</Text>
          </Modal>

          <Group position="center">
            <Button onClick={open}>Read More</Button>
          </Group>
        </>
      </Paper>
    </div>
  );
}
