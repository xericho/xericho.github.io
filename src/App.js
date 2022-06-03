import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import theme from './theme';

function App() {
  const accentColor = useColorModeValue('blue.100', 'gray.600');

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" py={8}>
        <Navbar theme={theme} />
        <Grid minH="100vh" p={3}>
          <Hero />
        </Grid>
        <About id="about" />
        <Experience id="experience" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
