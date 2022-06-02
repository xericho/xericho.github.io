import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        // bg: 'blue.100',
        border: '15px solid',
        borderColor: mode("blue.100", "gray.700")(props),
      }
    })
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