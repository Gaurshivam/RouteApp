import React from "react";
import './Home.css'
import { Box, Button, Center, Heading, Img } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box className="ConatinerHome">
      <Box className="LeftHome">
      <Heading m={10} color={"blue"} fontSize={70}>Leading MEP & Facility management company in Dubai </Heading>
      <Center m={10}  fontSize={30}>
        Urban Science is always ready to accept your challenges Meeting your
        goals is our main objective. Professional services for facility
        management & MEP works.
      </Center>
      <Box className="btnSet">
        <Button colorScheme='red'p={2}>Company Profile</Button>
        <Button colorScheme='blue' variant='outline'>Watch Video</Button>
      </Box>
      </Box>
      <Box className="RightHome">
        <Img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png"
        h={600} w={700} alt="HomeImage" />
      </Box>
    </Box>
  );
};

export default Home;
