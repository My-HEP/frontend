import React from 'react';
import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { logoIcon } from '../../shared/components/LogoIcon';
import { Link } from 'react-router-dom';
import { useFirebaseAuth } from '../../context/FirebaseAuthContext';


function Header() {
  const { userRole } = useFirebaseAuth() ?? {};
  const formattedUserRole = userRole?.toLowerCase();

  return (
    <Box as="header" width="100%" justify="end" align="center">
      <Flex align="center" justify="end" p="1rem 0.5rem 1rem 0">
        <Link to={`/${formattedUserRole}/home`}>
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
