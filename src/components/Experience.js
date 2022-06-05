import {
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Timeline } from './Timeline'

export const Experience = ({ id }) => {
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
					Experience
				</Text>
			</Heading>
			<Timeline accentColor={accentColor} />
		</Container>
	)
}
