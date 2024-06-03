import { Box, Container, Flex, Heading, Text, VStack, SimpleGrid, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">ElectroShop</Link>
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>Home</Link>
          <Link as={RouterLink} to="/products" p={2} mx={2}>Products</Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2}>Contact Us</Link>
        </Flex>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
        {sampleProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.imageUrl} alt={product.name} />
            <Box p={6}>
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text mt={4}>{product.description}</Text>
              <Text mt={4} fontWeight="bold">{product.price}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;