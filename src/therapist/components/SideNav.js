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
        <VStack spacing="10" align="center">
          <Link to="/home">
            <Button variant="ghost">
              <IconHome size={35} />
            </Button>
          </Link>
          <Link to="/patients">
            <Button variant="ghost">
              <IconUsers size={35} />
            </Button>
          </Link>
          <Link to="/exerciselibrary">
            <Button variant="ghost">
              <IconBarbell size={35} />
            </Button>
          </Link>
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
