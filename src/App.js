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
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={10}>
        <Navbar />
        <Grid minH="100vh" p={3}>
          <Hero />
        </Grid>
        <Grid minH="100vh" p={3}>
          <Hero id='blah'/>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
