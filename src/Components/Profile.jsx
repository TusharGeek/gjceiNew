import { Avatar, Text, Button, Paper } from '@mantine/core';



function Profile(props) {
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={props.avatar} size={120} radius={120} mx="auto" />
      <Text ta="center" fz="lg" weight={500} mt="md">
        {props.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
      {props.job} • {props.Department} 
      </Text>
    </Paper>
  );
}

export default Profile;
