import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // bg: 'red.100',
        border: '15px solid',
        borderColor: 'red.100',
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          'box-shadow': 'none'
        }
      }
    },
    Link: {
      baseStyle: {
        _focus: {
          'box-shadow': 'none'
        }
      },
    }
  }
})

export default theme