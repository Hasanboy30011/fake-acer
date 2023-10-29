import React from 'react'
import Carousel3 from '../components/Carousel/Carousel3'
import { Center, Container } from '@chakra-ui/react'
import HotSale from '../components/HotSale'

 const SupportPage = () => {
  return (
    <Container maxW={1500} p={20}>
      <Center>Support</Center>
      <br />
      <Carousel3/>
      <br />
      <HotSale/>
    </Container>
  )
}
export default SupportPage