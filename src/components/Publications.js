import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

export const Publications = ({ id }) => {
  const accentColor = useColorModeValue('blue.100', 'gray.600');
  const accentLinkColor = useColorModeValue('blue-100', 'gray-600');

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
          Publications
        </Text>
      </Heading>

      <Stack pt={5} position={'relative'}>
        <Box p={5} >
          <Text
            fontSize={{ base: 'md', md: 'lg' }}>
            March 2018 • IEEE Transactions on Cognitive and Developmental Systems
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
            href="https://ieeexplore.ieee.org/document/8328848/"
            isExternal
            mt={2}
            fontSize={{ base: 'lg', md: '2xl' }}>
            Quantifying Gaze Behavior during Real World Interactions using Automated Object, Face, and Fixation Detection
          </Heading>
          <UnorderedList mt={2}
            fontSize={{ base: 'md', md: 'lg' }}>
            <ListItem>Utilized Faster R-CNN with Caffe framework to detect and locate specific objects with 77% accuracy</ListItem>
            <ListItem>Implemented a face recognition and object recognition system with eye tracking glasses</ListItem>
            <ListItem>Lead a 5 student team in creating and labeling training and test sets in Matlab</ListItem>
          </UnorderedList>
          <Button 
            mt={4}
            as={Link}
            w={'75px'}
            style={{
              textDecoration: 'none'
            }}
            href="https://ieeexplore.ieee.org/document/8328848/"
            isExternal
          >
            DOI
          </Button>
                
        </Box>
      </Stack>

    </Container>
  )
}