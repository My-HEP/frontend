import React from 'react';
import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Image,
  Button,
} from '@chakra-ui/react';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function HEPs() {
  const HEPdata = [
    {
      title: 'Tendon Glides',
      handout:
        'https://images.unsplash.com/photo-1566927467984-6332be7377d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Exercise number 2',
      handout:
        'https://images.unsplash.com/photo-1638513848528-fe762cee75b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
    },
    {
      title: 'Exercise number 3',
      handout:
        'https://images.unsplash.com/photo-1591860455878-5458e029601e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Exercise number 4',
      handout:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      title: 'Exercise number 5',
      handout:
        'https://images.unsplash.com/photo-1636278697183-89bd33b92cf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80',
    },
  ];

  return (
    <>
      <SideNav />
      <BottomNav />
      <Link to="/therapisthome">
        <Header />
      </Link>

      <Flex
        height="100%"
        direction="column"
        justify="flex-start"
        marginLeft={['10', '10', '20%']}
        marginRight={['10', '10', '20%']}
        paddingTop="2rem"
        paddingBottom="100px"
      >
        <Heading marginBottom="3rem">HEPs</Heading>
        <Flex>
          <Button variant="outline" size="lg" maxWidth="350px" bg="#2C7A7B">
            Add New HEP
          </Button>
        </Flex>
        <SimpleGrid minChildWidth="120px" spacing="40px">
          {HEPdata.map(item => {
            return (
              <Box height="200px">
                <Image
                  boxSize="200px"
                  objectFit="cover"
                  src={item.handout}
                  alt="HEP handout"
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default HEPs;
