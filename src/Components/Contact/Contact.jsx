import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
const Contact = () => {
  return (
    <>
      <Box m={20}>
        <Heading textAlign={"center"} p={10}>Contact Us</Heading>
        <Container>
          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              <option>US</option>
              <option>India</option>
            </Select>
          </FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
            </InputLeftElement>
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
