import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IconHome, IconUsers, IconBarbell } from '@tabler/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const BottomNav = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      zIndex="10"
      bg="#2C7A7B"
      height="85px"
      width="100%"
      bottom="0"
      display={{ base: 'block', md: 'none' }}
    >
      <Flex direction="row" bottom="0" height="100%" justify="center">
        <HStack spacing="19" align="center">
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
          <Link to="/exerciselibrary">
            <Button variant="ghost">
              <IconBarbell size={35} />
            </Button>
          </Link>
          <ColorModeSwitcher />
        </HStack>
      </Flex>
    </Box>
  );
};

export default BottomNav;
