import { createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `.5rem`,
    borderRadius: theme.radius.md,
    maxWidth: "50rem",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `0.16rem solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    margin: "auto",
    marginTop: "0.9rem",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
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
}));

export function CoordinatorMessage() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Text fw={500} fz="lg" mb={5}>
          Prof. (Dr.) P.K. Pati
        </Text>
        <Text fz="sm" c="dimmed">
          Guru Nanak Dev University has set up Golden Jubilee Centre For Entrepreneurship And Innovation to create an
          innovation-driven ecosystem on the campus and in the region. It promotes
          the generation of new knowledge, fosters innovation and entrepreneurship.
          It is an honor and privilege to be a part of the GJCEI Family and contribute
          towards its ultimate goal. I welcome all of you to this family and
          request you to shape it as a vibrant center. Best Wishes!
        </Text>
      </div>
      <img
        style={{ borderRadius: "8px", maxWidth: "40%" }}
        src="http://online.gndu.ac.in/Candimg/Faculty/Faculty_2015101833.jpg"
        alt="Coordinator"
      />
    </div>
  );
}
