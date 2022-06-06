import {
  IconButton,
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
  HStack,
  Link,
} from '@chakra-ui/react';
import { Blob } from './Blob';
import avatar from '../assets/avatar.png'
import { ImGithub as GithubIcon, ImLinkedin as LinkedInIcon } from 'react-icons/im';

export const Hero = ({ id }) => {
  const accentColor = useColorModeValue('blue.100', 'gray.600');
  const altAccentColor = useColorModeValue('blue.300', 'gray.400');
  const altHoverAccentColor = useColorModeValue('blue.300', 'gray.400');

  return (
    <Container maxW={'7xl'} id={id}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        textAlign={'center'}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text as={'span'} color={altAccentColor}>
              Hey there! 👋
            </Text>
            <br />
            <Text as={'span'} >
              I'm {' '}
            </Text>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: accentColor,
                zIndex: -1,
              }}>
              Eric Ho
            </Text>
            <br />
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.200')}>
              I am a machine learning engineer based in San Diego, CA.
          </Text>
          <HStack justifyContent={'center'}>
            <Link href="https://linkedin.com/in/xericho/" isExternal>
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<LinkedInIcon />}
                color={altAccentColor}
                _hover={{
                  bg: altHoverAccentColor,
                  color: useColorModeValue('white', 'gray.700'),
                }}
              />
            </Link>
            <Link href="https://github.com/xericho" isExternal>
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<GithubIcon />}
                color={altAccentColor}
                _hover={{
                  bg: altHoverAccentColor,
                  color: useColorModeValue('white', 'gray.700'),
                }}
                isRound
              />
            </Link>
          </HStack>
        </Stack>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
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
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'15rem'}
            h={'100%'}
            // height={'300px'}
            rounded={'2xl'}
            src={avatar}
          />
        </Flex>
      </Stack>
    </Container>
  );
}
