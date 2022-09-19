import React from 'react';
import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { logoIcon } from '../../shared/components/LogoIcon';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Box width="100%" justify="end" align="center">
      <Flex align="center" justify="end" p="1rem 0.5rem 1rem 0">
        <Link to="/therapisthome">
          <Flex flexDirection="column" align="end" mr="1rem">
            <Icon as={logoIcon} boxSize="4rem" />
            <Heading size="md">My HEP</Heading>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}

export default Header;
