import {
  Container,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Certificate } from './Certificate';
import dl_cert from '../assets/DeepLearning.AI_TF_Developer.jpg'

const certificates = [{
    img: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/39247619',
    date: 'September 2021',
    program: 'Tensorflow Certficate Program',
    title: 'TensorFlow Developer Certificate',
    credentialId: '39247619',
    url: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/39247619',
  }, {
    img: dl_cert,
    date: 'September 2021',
    program: 'DeepLearning.AI',
    title: 'DeepLearning.AI TensorFlow Developer',
    credentialId: '',
    url: 'https://coursera.org/share/6786f60d16c4a8e0081e4467da529d2f',
  }
]


export const Certificates = ({ id }) => {
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
          Certificates
        </Text>
      </Heading>

      <Stack 
        pt={10}
        align={'center'}
        spacing={5}
        direction={{ base: 'column', md: 'row' }}
      >
        {
          certificates.map((cert) => (
            <Certificate {...cert} key={cert.title} />
          ))
        }
      </Stack>
    </Container>
  )
}