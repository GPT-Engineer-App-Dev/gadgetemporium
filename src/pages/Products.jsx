import { Box, Container, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";

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

const Products = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h2" size="xl" mb={8}>Our Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
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

export default Products;