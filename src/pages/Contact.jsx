import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Contact Us</Heading>
        <Text fontSize="lg">We would love to hear from you! Please reach out with any questions or feedback.</Text>
        <Box>
          <Text>Email: support@electroshop.com</Text>
          <Text>Phone: (123) 456-7890</Text>
          <Text>Address: 123 ElectroShop St, Tech City, TX 12345</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;