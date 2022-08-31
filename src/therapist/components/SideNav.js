import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  VStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IconHome, IconUsers, IconBarbell } from '@tabler/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

// const SideNav = () => {
//     const isDesktop = useBreakpointValue({ base: false, lg: true })
//     return (
//       <Box as="section" position="absolute" height="100vh" left="0" pb={{ base: '12', md: '24' }}>
//         <Box as="nav" height="100vh" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
//           <Container height="100vh" py={{ base: '4', lg: '5' }}>
//             <VStack spacing="3" inInLine="true" align="center">
//               {isDesktop ? (
//                 <Flex align="center">
//                   <ButtonGroup variant="link" spacing="8">
//                     {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
//                       <Button key={item}>{item}</Button>
//                     ))}
//                   </ButtonGroup>
//                   <VStack spacing="3">
//                     <Button variant="ghost">Sign in</Button>
//                     <Button variant="primary">Sign up</Button>
//                   </VStack>
//                 </Flex>
//               ) : (
//                 <IconButton
//                   variant="ghost"
//                   icon={<FiMenu fontSize="1.25rem" />}
//                   aria-label="Open Menu"
//                 />
//               )}
//             </VStack>
//           </Container>
//         </Box>
//       </Box>
//     )
//   }

const SideNav = () => {
  return (
    <Box as="section" position="absolute" height="100vh" left="0">
      <Box as="nav" height="100%" bg="#2C7A7B">
        <Flex direction="column" height="100%" justify="center">
          <VStack spacing="19" inInLine="true" align="center">
            <Link to="/therapisthome">
              <Button variant="ghost">
                <IconHome size={35} />
              </Button>
            </Link>
            <Link to="/patients">
              <Button variant="ghost">
                <IconUsers size={35} />
              </Button>
            </Link>
            <Link to="/HEPs">
              <Button variant="ghost">
                <IconBarbell size={35} />
              </Button>
            </Link>
            <ColorModeSwitcher />
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideNav;
