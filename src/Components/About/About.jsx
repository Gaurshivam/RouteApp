import { Box, Button, Center, Heading, Img } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Box>
        <Heading m={5} color={"red"} textAlign={"Center"} position={"absolute"}>
          About Us
        </Heading>
        <Img
          src="https://www.urbansciencemep.com/_next/static/images/about-1-fcabb8ead6b6f55150f09d642c983f7f.jpg"
          h={400}
          w={1700}
        />
        <Center p={5}>
          As the leading MEP company in Dubai, Urban Science has deployed
          projects across the UAE. With a vast experience in the industry, we
          are equipped with 18+ years worth of expertise in mechanical,
          electrical, and plumbing services that have been tested time and time
          again. We provide one-stop services for all your MEP needs at
          affordable prices ,you'll never want to go anywhere else.
          At Urban Science, we don't just provide you with the best services -
          we also ensure that those services are delivered on time, without
          compromising on quality or safety. When you need anything from
          mechanicals to electricals to plumbing, call on us! A Leading MEP
          company in Dubai is Urban Science contracting MEP companies in Dubai.
          For all of your MEP requirements, there is a one-stop shop in Dubai
          which is Urban Science Contracting. Our goal is to offer a good
          service at a very affordable price because we are industry specialists
          with 18+ years of experience. Founded in Dubai. The goal of Urban
          Science contracting is to provide Dubai, UAE with top-notch
          mechanical, electrical, and plumbing MEP. With immense satisfaction,
          Urban Science Contracting would like to present us as one of the
          reputable MEP companies in Dubai, United Arab Emirates that provides
          the best MEP Services in Dubai. Urban Science contracting in Dubai,
          UAE mostly concentrated on MEP services such as mechanical,
          electrical, and plumbing. We have a vast experience in facility
          management as well as your community management. At Urban Science, we
          are 24/7 working for managing your communities so that you can spend
          your team peacefully. Best facility management company in Dubai
        </Center>
        <Button p={2} m={3} colorScheme="blue">
          Explore More
        </Button>
      </Box>
    </>
  );
};

export default About;
