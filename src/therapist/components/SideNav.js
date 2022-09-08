import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IconHome, IconUsers, IconBarbell } from '@tabler/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const SideNav = () => {
  return (
    <Box
      as="nav"
      height="100%"
      bg="#2C7A7B"
      position="fixed"
      zIndex="10"
      left="0"
      display={{ base: 'none', md: 'block' }}
    >
      <Flex direction="column" height="100%" justify="center">
        <VStack spacing="10" inInLine="true" align="center">
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
          {/* <ColorModeSwitcher /> */}
        </VStack>
        <Box position="absolute" bottom="30px" align="center">
          <ColorModeSwitcher />
        </Box>
      </Flex>
    </Box>
    // </Box>
  );
};

export default SideNav;
