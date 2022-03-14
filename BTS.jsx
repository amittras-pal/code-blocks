import { Container, Grid, GridItem, Image } from '@chakra-ui/react';
import img1 from '../../resources/i1.jpg';
import img2 from '../../resources/i2.jpg';
import img3 from '../../resources/i3.jpg';
import img4 from '../../resources/i4.jpg';
import img5 from '../../resources/i5.jpg';
import img6 from '../../resources/i6.jpg';
import img7 from '../../resources/i7.jpg';
import img8 from '../../resources/i8.jpg';
import img9 from '../../resources/i9.jpg';
import React from 'react';

function BTS() {
  return (
    <>
      <Container
        maxW={'full'}
        pt={[4, 8]}
        px={[4, 8]}
        as={Grid}
        gap={[2, 4]}
        bgColor={'gray.100'}
        gridTemplateColumns={['repeat(3, 1fr)', 'repeat(7, 1fr)']}
        gridTemplateRows={['repeat(7, 1fr)', 'repeat(3, 1fr)']}
        gridTemplateAreas={{
          base: `"a a a" "a a a" "a a a" "b b c" "b b d" "e g g" "f g g"`,
          md: `"a a b b b c d" 
             "a a b b b e e" 
             "f g b b b e e"`,
        }}
        h={['full']}
        maxH={['100vh', '85vh']}
      >
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'a'}
          overflow={'hidden'}
        >
          <Image src={img1} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'b'}
          overflow={'hidden'}
        >
          <Image src={img5} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        {/* <GridItem
        // maxH={14}
        borderRadius={'xl'}
        gridArea={'h'}
        overflow={'hidden'}
      >
        <Image src={img8} objectFit={'cover'} h={'full'} w={'full'} />
      </GridItem> */}
        {/* <GridItem
        // maxH={14}
        borderRadius={'xl'}
        gridArea={'i'}
        overflow={'hidden'}
      >
        <Image src={img9} objectFit={'cover'} h={'full'} w={'full'} />
      </GridItem> */}
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'c'}
          overflow={'hidden'}
        >
          <Image src={img2} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'d'}
          overflow={'hidden'}
        >
          <Image src={img4} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'e'}
          overflow={'hidden'}
        >
          <Image src={img3} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'f'}
          overflow={'hidden'}
        >
          <Image src={img7} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'g'}
          overflow={'hidden'}
        >
          <Image src={img6} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
      </Container>
      <Container
        maxW={'full'}
        pt={[2, 4]}
        pb={[4, 8]}
        px={[4, 8]}
        as={Grid}
        gap={[2, 4]}
        bgColor={'gray.100'}
        gridTemplateColumns={['repeat(3, 1fr)', 'repeat(7, 1fr)']}
        gridTemplateRows={['repeat(7, 1fr)', 'repeat(3, 1fr)']}
        gridTemplateAreas={{
          base: `"a a a" "a a a" "a a a" "b b c" "b b d" "e g g" "f g g"`,
          md: `"f g b b b e e" 
             "a a b b b e e" 
             "a a b b b c d"`,
        }}
        h={['full']}
        maxH={['100vh', '85vh']}
      >
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'a'}
          overflow={'hidden'}
        >
          <Image src={img1} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'b'}
          overflow={'hidden'}
        >
          <Image src={img5} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        {/* <GridItem
        // maxH={14}
        borderRadius={'xl'}
        gridArea={'h'}
        overflow={'hidden'}
      >
        <Image src={img8} objectFit={'cover'} h={'full'} w={'full'} />
      </GridItem> */}
        {/* <GridItem
        // maxH={14}
        borderRadius={'xl'}
        gridArea={'i'}
        overflow={'hidden'}
      >
        <Image src={img9} objectFit={'cover'} h={'full'} w={'full'} />
      </GridItem> */}
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'c'}
          overflow={'hidden'}
        >
          <Image src={img2} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'d'}
          overflow={'hidden'}
        >
          <Image src={img4} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'e'}
          overflow={'hidden'}
        >
          <Image src={img3} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'f'}
          overflow={'hidden'}
        >
          <Image src={img7} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
        <GridItem
          // maxH={14}
          borderRadius={'xl'}
          gridArea={'g'}
          overflow={'hidden'}
        >
          <Image src={img6} objectFit={'cover'} h={'full'} w={'full'} />
        </GridItem>
      </Container>
    </>
  );
}

export default BTS;
