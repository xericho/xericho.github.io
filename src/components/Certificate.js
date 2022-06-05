import {
  Text,
  Image,
  useColorModeValue,
  Box,
  chakra,
  VStack,
  Flex,
} from '@chakra-ui/react';

export const Certificate = ({ img, date, program, title, credentialId, url }) => {
  const boxShadowColor = useColorModeValue('blue-50', 'gray-900') 

  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <Flex maxW={'400px'} >
      <Box
        onClick={(e) => handleLinkClick(e, url)}
        cursor="pointer"
        borderWidth="1px"
        transition={'all .4s ease'}
        _hover={{ 
          boxShadow: `12px 12px 2px 1px var(--chakra-colors-${boxShadowColor})` ,
          transform: 'translate3D(0,-1px,0) scale(1.03)',
          transition: 'all .2s ease',
        }}
        rounded="lg"
        bg={useColorModeValue('white', 'gray.700')}
      >
        <Image
          src={img}
          objectFit="cover"
          w="100%"
        />
        <Box p={{ base: 3, sm: 5 }}>
          <Text fontSize="sm" pb={2}>
            {date}
          </Text>
          <VStack spacing={2} mb={3} textAlign="left">
            <chakra.h1
              fontSize={{ base: 'l', md: 'xl'}}
              lineHeight={1.2}
              fontWeight="bold"
              w={'100%'}
            >
              {title}
            </chakra.h1>
            <chakra.h2
              fontSize={{ base: 'md', md: 'l'}}
              lineHeight={1.2}
              fontWeight="bold"
              pb={3}
              w={'100%'}
            >
              {program}
            </chakra.h2>
            {
              credentialId ? 
              <Text w={'100%'} fontSize={'md'}>Credential ID: {credentialId}</Text> :
              <></>
            }
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}