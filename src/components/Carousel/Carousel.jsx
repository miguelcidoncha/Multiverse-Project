import { Carousel } from '@mantine/carousel';

function NewCarousel() {
  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      height={200}
      dragFree
      slideGap="md"
      align="start"
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default NewCarousel;