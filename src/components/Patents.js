import { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  useColorModeValue,
  Collapse,
} from '@chakra-ui/react';

export const Patents = ({ id }) => {
  const accentColor = useColorModeValue('blue.100', 'gray.600');
  const accentLinkColor = useColorModeValue('blue-100', 'gray-600');
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Container maxW={'5xl'} id={id} pb={'5rem'}>
      <Heading
        display={{ base: '', lg: 'flex' }}
        lineHeight={1.1}
        fontWeight={600}
        textAlign={'center'}
        fontSize={{ base: '3xl', sm: '3xl', lg: '4xl' }}>
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            bg: accentColor,
            zIndex: -1,
          }}>
          Patents
        </Text>
      </Heading>

      <Stack pt={5} position={'relative'}>
        <Box p={5} >
          <Text
            fontSize={{ base: 'md', md: 'lg' }}>
            Issued Oct 28, 2021 • US11334794B2
          </Text>
          <Heading
            backgroundImage={`linear-gradient(transparent 50%, var(--chakra-colors-${accentLinkColor}))`}
            backgroundRepeat='no-repeat'
            backgroundSize='0% 100%'
            backgroundPosition={'100% 0'}
            transition='background-size 0.3s'
            _hover={{
              backgroundSize: '100% 100%',
              backgroundPosition: '0 100%',
            }}
            as={Link}
            style={{
              textDecoration: 'none'
            }}
            href="https://patents.google.com/patent/US11334794B2/en"
            isExternal
            mt={2}
            fontSize={{ base: 'lg', md: '2xl' }}>
            Artificial-intelligence-based waterway information system
          </Heading>
          <Box pt={2}>
              <Collapse startingHeight={55} in={show}>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Artificial-intelligence-based river information system. In an embodiment, a first training dataset is used to train a travel time prediction model to predict a travel time along the waterway for a given trip. In addition, a second training dataset is used to train a river level prediction model to predict a river level along the waterway for a given time. For each of a plurality of trips, a request is received that specifies the trip and a time of the trip, and, in response to the request, the travel time prediction model is used to predict a travel time for the trip, and the river level prediction model is used to predict a river level of the waterway at one or more points along the trip. Then, a voyage plan is generated based on one or both of the predicted travel time and the predicted river level.
              </Text>
              </Collapse>
              <Button size='sm' onClick={handleToggle}  variant='ghost'>
                Show {show ? 'Less' : 'More'}
              </Button>
          </Box>
          <Button
            mt={4}
            as={Link}
            w={'auto'}
            style={{
              textDecoration: 'none'
            }}
            href="https://patents.google.com/patent/US11334794B2/en"
            isExternal
          >
            See patent
          </Button>

        </Box>
      </Stack>

    </Container>
  )
}
