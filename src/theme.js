import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
      }
    }
  }
})

export default theme