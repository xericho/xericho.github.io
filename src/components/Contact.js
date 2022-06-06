import React, { useState } from 'react'
import {
  FormControl,
  Input,
  FormLabel,
  Container,
  HStack,
  Heading,
  Text,
  Image,
  Box,
  useColorModeValue,
  VStack,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
} from '@chakra-ui/react';
import Recaptcha from 'react-google-recaptcha'
import { BsPerson } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import avatar from '../assets/avatar-2fingers-half.png'

const RECAPTCHA_KEY = '6LecAfYbAAAAAKpTuVMSWMgn_Mp-IK4zfTabmGdu'

export const Contact = ({ id }) => {
  const accentColor = useColorModeValue('blue.100', 'gray.600');
  const buttonColor = useColorModeValue('blue.400', 'gray.600');
  const hoverButtonColor = useColorModeValue('blue.500', 'gray.700');
  const [state, setState] = useState({})

  // The button is disabled by default, but on Recaptcha change, the form can be submitted
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const recaptchaRef = React.createRef() // new Ref for reCaptcha

  const encode = data => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&")
  }

  // Save state of each input on change
  const handleChange = e => {
      setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
      e.preventDefault()
      const form = e.target
      const recaptchaValue = recaptchaRef.current.getValue()

      fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
              'form-name': form.getAttribute('name'),
              'g-recaptcha-response': recaptchaValue,
              ...state,
          }),
      })
      .then(() => window.location.reload())
      .catch(error => alert(error))
  }

  return (
    <Container maxW={'5xl'} id={id} pb={'5rem'}>
      <Heading
        display={{ base: '', lg: 'flex' }}
        pb={3}
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
          Contact Me
        </Text>
      </Heading>
      
      <Box p={5} position='relative'>
        <form 
          name="contactForm"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          method="POST"
          id="contactForm"
          bg='gray.50'
        >
          <Image
            alt={'Contact Me Image'}
            fit={'contain'}
            align={'top'}
            top={'-3rem'}
            right={'5rem'}
            w={'7rem'}
            h={'100%'}
            src={avatar}
            position={'absolute'}
            display={{ base: 'none', md: 'block' }}
          />
          <VStack spacing={5} alignItems={'flex-start'} >
            <input type="hidden" name="form-name" value="contactForm" />
            <FormControl isRequired>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input id='name' name='name' type='text' onChange={handleChange} placeholder={"Your Name"} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdEmail />} />
                <Input id='email' name='email' type='email' onChange={handleChange} placeholder={'Your Email'}/>
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor='message'>Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                resize="none"
                onChange={handleChange}
              />
            </FormControl>
            <input type="hidden" className="form-control" placeholder="Favorite food" name="bot-field" />
            <Recaptcha
                ref={recaptchaRef}
                sitekey={RECAPTCHA_KEY}
                size="normal"
                id="recaptcha-google"
                theme={useColorModeValue('light', 'dark')}
                onChange={() => setButtonDisabled(false)}
            />

            <HStack>
              <Button
                bg={buttonColor}
                color="white"
                _hover={{
                  bg: hoverButtonColor
                }}
                disabled={buttonDisabled}
                type='submit'>
                Send Message
              </Button>
              <Button
                variant='ghost'
                type='reset'>
                Clear
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Container>
  )
}