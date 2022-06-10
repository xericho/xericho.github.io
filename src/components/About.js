import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Blob } from './Blob';
import avatar from '../assets/avatar-laying-down.png'

export const About = ({ id }) => {
  const accentColor = useColorModeValue('blue.100', 'gray.600');

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
          About Me
        </Text>
      </Heading>

      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 8 }}
        px={3}
        textAlign="center" 
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          display={{ base: 'none', lg: 'flex' }}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('blue.50', 'gray.700')}
          />
          <Image
            alt={'About Me Image'}
            fit={'cover'}
            align={'center'}
            w={'15rem'}
            h={'100%'}
            src={avatar}
          />
        </Flex>

        <Stack flex={2} spacing={{ base: 5, md: 10 }} fontSize={{ base: 'md', md: 'xl'}}>
          <Text>
              Hello! My name is Eric Ho and I'm a machine learning engineer
              based in San Diego. I went to the University of California, San Diego
              where I got my Masters and Bachelors degree in Electrical Engineering.
              During my academic years, I {' '}
              <Link 
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
                }}
                isExternal
                href="https://ieeexplore.ieee.org/document/8328848">
                published a paper
              </Link> 
              {' '} in object recognition to help children with autism and
              worked at Brain Corporation as a ML engineer intern to improve autonomous cleaning vehicles.
              Previously, I worked at Trabus Technologies as a ML engineer, developing models to
              forecast estimated time of arrivals (ETA) for ships on the U.S. inland waterways.
              Currently, I work at BigBear.ai, building a state-of-the-art autoML software and training 
              various forecast models for hospital admissions. 
          </Text>
          <Text>
            In my freetime, I like to automate things to make my life easier using my 3D printer
            and various microcontrollers. I love to learn new technologies and apply them in practical ways
            such as learning ReactJS to build this website!
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}