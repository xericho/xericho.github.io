import React from 'react'
import {
  Box, 
  useColorModeValue,
  Button,
  Icon,
} from '@chakra-ui/react'; import { FiArrowUpCircle as Arrow } from 'react-icons/fi'
import { animateScroll as scroll } from 'react-scroll';

export const ScrollUpBtn = () => {
  const accentColor = useColorModeValue('blue.200', 'gray.600')
  
  return (
    <Box>
      <Button
        style={{
          padding: 0,
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          transition: 'opacity 0.5s ease-in-out 0s, right',
          cursor: 'pointer',
          opacity: 0.5,
          color: accentColor,  // TODO: Fix color
        }}
        variant='ghost'
        onClick={scroll.scrollToTop}
      >
        <Icon as={Arrow} width={50} height={50} />
      </Button>
    </Box>
  )
}