import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
} from '@chakra-ui/react';
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Certificates } from './components/Certificates'
import theme from './theme';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" py={8}>
        <Navbar theme={theme} />
        <Grid minH="100vh" p={3}>
          <Hero />
        </Grid>
        <About id="about" />
        <Experience id="experience" />
        <Certificates id="certificates" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
