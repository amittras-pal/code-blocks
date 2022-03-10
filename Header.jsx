import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';

function Header() {
  return (
    <Container maxW={'full'} px={0} h={'90vh'}>
      <Container
        maxW={'container.xl'}
        as={Flex}
        h={'full'}
        py={24}
        justifyContent={'center'}
        alignItems={'flex-end'}
        flexDirection={'column'}
      >
        <Heading
          fontSize={'4xl'}
          mb={2}
          as={'h1'}
          w={'full'}
          textAlign={'start'}
          textTransform={'uppercase'}
        >
          Heavendrop
        </Heading>
        <Text color={'gray.500'} mb={6} w={'full'} textAlign={'start'}>
          The place where fun takes a funnier turn...
        </Text>
        {/* <Box w={'full'} h={'auto'}> */}
        <Box position={'relative'} w={'full'} h={'inherit'}>
          <Flex
            direction={'column'}
            p={4}
            w={['95%', '40%']}
            bgColor={'whiteAlpha.600'}
            borderRadius={'2xl'}
            backdropFilter={'blur(5px)'}
            boxShadow={'lg'}
            flex={1}
            position={'absolute'}
            top={['90%', '40%']}
            left={['50%', 0]}
            transform={'auto'}
            translateY={['-100%', '-50%']}
            translateX={['-50%', 0]}
            zIndex={2}
          >
            <Heading>CrazyTainment</Heading>
            <Text color={'blue.500'}>
              Not just your regular youtube content
            </Text>
            <HStack gap={2} justifyContent={'space-between'} mt={[16, 24]}>
              <Button colorScheme={'red'} mr={'auto'}>
                Watch Latest video
              </Button>
              <Menu placement="top-end">
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button} ml={'auto'}>
                      Share
                    </MenuButton>
                    <MenuList boxShadow={'lg'} p={1} border={'none'}>
                      <MenuItem borderRadius={'md'}>Download</MenuItem>
                      <MenuItem
                        borderRadius={'md'}
                        onClick={() => alert('Kagebunshin')}
                      >
                        Create a Copy
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </HStack>
          </Flex>
          <Box
            w={['full', '75%']}
            //   h={[48, 64]}
            bgColor={'green.100'}
            boxShadow={'lg'}
            flex={1}
            right={0}
            position={'absolute'}
            top={[0, '50%']}
            transform={'auto'}
            translateY={[0, '-50%']}
            borderRadius={['1.25rem', '2rem']}
            overflow={'hidden'}
            zIndex={1}
          >
            <Image
              src={'https://source.unsplash.com/random/1280x720'}
              w={'full'}
            />
          </Box>
          {/* </Box> */}
        </Box>
      </Container>
    </Container>
  );
}

export default Header;
