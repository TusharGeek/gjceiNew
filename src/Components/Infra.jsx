import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
} from '@mantine/core';
import React, { useState } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: "100%",
    margin: "auto"
  },
  section: {
    borderBottom: `solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  like: {
    color: theme.colors.red[6],
  },
  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

function BadgeCard(props) {
  const { classes, theme } = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    if (isExpanded) {
      return props.description; // Render the full content if expanded
    } else if (props.description.length > 92) {
      return props.description.slice(0, 92) + '...'; // Truncate the content to 200 characters if needed
    } else {
      return props.description; // Render the full content if it's already shorter than 200 characters
    }
  };

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={props.image} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <h3>{props.title}</h3>
          <p style={{ textAlign: "left" }}>{renderContent()}
          {props.description.length > 100 && (
          <p style={{color:'blue'}} onClick={handleToggleExpand}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </p>
        )}</p>
        </Group>
        
      </Card.Section>
    </Card>
  );
}

export default BadgeCard;
