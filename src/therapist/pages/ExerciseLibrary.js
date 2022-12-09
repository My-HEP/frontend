import React, { useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  SimpleGrid,
  Box,
  Tag,
  TagLabel,
  Skeleton,
  SkeletonText,
  Fade,
  HStack,
} from '@chakra-ui/react';
import SideNav from '../components/SideNav';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ViewHEPModal from '../../patient/ViewHEPModal';

import AddHEPModal from '../components/AddHEPModal';

function ExerciseLibrary() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setIsLoaded(false);
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/therapist/exercises');
      const exercises = await response.json();
      setData(exercises);
      setIsLoaded(true);
    };
    fetchData();
  }, []);

  const handleSearch = event => {
    setSearch(event.target.value);
  };
  const searchData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  {
    if (!isLoaded) {
      return (
        <>
          <Flex height="100vh" alignContent="center" justifyContent="center">
            <Flex
              direction="column"
              width={['80%', '80%', '50%']}
              height="100%"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              padding="none"
            >
              <Skeleton
                height="2rem"
                width="100%"
                maxWidth="500px"
                marginBottom="3rem"
              />
              <Flex
                gap="2rem"
                flexWrap="wrap"
                alignContent="center"
                justifyContent="center"
              >
                <HStack>
                  <Skeleton height="10rem" width="10rem" />
                  <Skeleton height="10rem" width="10rem" />
                  <Skeleton height="10rem" width="10rem" />
                </HStack>
                <HStack>
                  <Skeleton height="10rem" width="10rem" />
                  <Skeleton height="10rem" width="10rem" />
                  <Skeleton height="10rem" width="10rem" />
                </HStack>
                <HStack>
                  <Skeleton height="10rem" width="10rem" />
                  <Skeleton height="10rem" width="10rem" />
                  <Skeleton height="10rem" width="10rem" />
                </HStack>
                {/* <Skeleton height="10rem" width="10rem" />

                <Skeleton height="10rem" width="10rem" />
                <Skeleton height="10rem" width="10rem" />
                <Skeleton height="10rem" width="10rem" />
                <Skeleton height="10rem" width="10rem" />
                <Skeleton height="10rem" width="10rem" /> */}
              </Flex>
            </Flex>
          </Flex>
        </>
      );
    }
  }
  return (
    <>
      <SideNav />
      <BottomNav />
      <Header />

      <Fade in={isLoaded}>
        <Flex
          height="100%"
          direction="column"
          justify="flex-start"
          marginLeft={['10', '10', '20%']}
          marginRight={['10', '10', '15%']}
          paddingTop="2rem"
          paddingBottom="100px"
        >
          <SkeletonText isLoaded={isLoaded} noOfLines={6} spacing="7">
            <Flex
              direction={['column', 'column', 'row', 'row']}
              align={['center', 'center', 'left']}
              justifyContent="space-between"
              maxWidth="800px"
              marginBottom="4rem"
            >
              <Heading
                paddingBottom={['2rem', '2rem', '0', '0']}
                width={{ base: '100%' }}
                textAlign={['center', 'center', 'left']}
              >
                Home Exercise Library
              </Heading>

              <AddHEPModal />
            </Flex>
            <Flex justifyContent={['center', 'center', 'left']}>
              <SearchBar handleSearch={handleSearch} />
            </Flex>

            <SimpleGrid
              minChildWidth="200px"
              spacingX="20px"
              spacingY="20px"
              transition="200ms"
              zIndex="-10"
            >
              {searchData.map(item => {
                return (
                  <Box
                    key={item.id}
                    height="fit-content"
                    margin="1rem"
                    minWidth="200px"
                  >
                    <Skeleton isLoaded={isLoaded}>
                      <ViewHEPModal 
                      key={item.url}
                      boxSize="250px"
                      objectFit="cover"
                      src={item.url}
                      url={item.url}
                      hepTitle={item.title}
                      alt="HEP handout"
                      borderRadius="7px"
                       /> 
                    </Skeleton>
                    <Skeleton isLoaded={isLoaded}>
                      <label key={item.title}>{item.title}</label>
                    </Skeleton>
                    <Flex
                      justify="space-between"
                      flexWrap="wrap
                "
                    >
                      {item.tags.map(tag => {
                        return (
                          <Tag
                            key={tag.id}
                            size="sm"
                            variant="subtle"
                            colorScheme="gray"
                            width="fit-content"
                            margin=".2rem"
                            borderRadius="full"
                          >
                            <TagLabel key={tag.title} fontSize=".7rem">
                              {tag.title.toUpperCase()}
                            </TagLabel>
                          </Tag>
                        );
                      })}
                    </Flex>
                  </Box>
                );
              })}
            </SimpleGrid>
          </SkeletonText>
        </Flex>
      </Fade>
    </>
  );
}

export default ExerciseLibrary;
