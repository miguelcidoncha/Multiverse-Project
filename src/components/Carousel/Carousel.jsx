import React from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(450), 
    width: rem(300),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Show More
      </Button>
    </Paper>
  );
}

const data = [
    {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949895/Venom.jpg',
        title: 'Venom',
        category: 'Poster',
      },
      {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949939/Invencible_was8bi.jpg',
        title: 'Invencible',
        category: 'Comic',
      },
      {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692949958/FunkoSpiderman.png',
        title: 'Funko Pop Spiderman',
        category: 'Funko Pops',
      },  {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692955083/cami_one_2-removebg-preview_hhwjnb.png',
        title: 'One Piece',
        category: 'Shirts',
      }, {
        image:
          'https://res.cloudinary.com/duwenv0yr/image/upload/v1692955148/The_Witcher_qqbxel.jpg',
        title: 'The Witcher',
        category: 'Poster',
      },     
];

function NewCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default NewCarousel;
