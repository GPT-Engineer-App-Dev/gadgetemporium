import { Container, Text, VStack, Box, SimpleGrid, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Smartwatch",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
  {
    id: 4,
    name: "Headphones",
    image: "https://via.placeholder.com/150",
    price: "$99",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">Welcome to E-Shop</Text>
        <Text>Discover the best electronics at unbeatable prices.</Text>
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Featured Products</Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {sampleProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <VStack p={4} align="start">
                  <Text fontWeight="bold">{product.name}</Text>
                  <Text>{product.price}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Link as={RouterLink} to="/products" color="blue.500">View All Products</Link>
      </VStack>
    </Container>
  );
};

export default Index;