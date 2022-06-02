import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher'
import logo from '../assets/EH_logo_v2.webp'

export const Navbar = ({ theme }) => {
  const { isOpen, onToggle } = useDisclosure();
  const invertImg = useColorModeValue({}, {filter: 'invert(1)'})
  // theme.styles.global.body.bg = 'red.100'

  return (
    <Container maxW={'5xl'}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href={'#'}>
            <Image
              alt={'EH_logo'}
              fit={'cover'}
              align={'center'}
              w={'3rem'}
              h={'3rem'}
              src={logo}
              style={invertImg}
            />
          </Link>
        </Flex>

        <Stack
          flex={{ base: 1, md: 'none' }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
            <ColorModeSwitcher />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const linkAccentHoverColor = useColorModeValue('red.100', 'gray.600');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            className='underline'
            m={2}
            href={navItem.href ?? '#'}
            fontSize={'md'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              color: linkHoverColor,
            }}
            _before={{
              backgroundColor: linkAccentHoverColor,
            }}
            >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Education',
    href: '#education'
  },
  {
    label: 'Certificates',
    href: '#certificates',
  },
  {
    label: 'Publications',
    href: '#publications',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];