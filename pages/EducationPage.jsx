import React from 'react'
import Carousel2 from '../components/Carousel/Carousel2'
import { Center, Container } from '@chakra-ui/react'
import HotSale from '../components/HotSale'

 const EducationPage = () => {
  return (
    <Container maxW={1500} p={20}>
      <Center>Education</Center>
      <br />
      <Carousel2/>
      <br />
      <HotSale/>
    </Container>
  )
}

export default EducationPage