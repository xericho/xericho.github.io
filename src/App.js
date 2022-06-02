import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" py={8}>
        <Navbar theme={theme} />
        <Grid minH="100vh" p={3}>
          <Hero />
        </Grid>
        <About id="about" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
