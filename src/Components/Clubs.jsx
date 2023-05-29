import { createStyles, Card, Image, Avatar, Text, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));



export function ArticleCardVertical(props) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <Image src={props.image} height={140} width={140} />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="lg">
            {props.club}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {props.title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={props.avatar} />
              <Text size="xs">{props.name}</Text>
            </Group>
          
           
          </Group>
        </div>
      </Group>
    </Card>
  );
}