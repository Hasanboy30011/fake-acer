import React from 'react'
import Carousel4 from '../components/Carousel/Carousel4'
import { Center, Container } from '@chakra-ui/react'
import HotSale from '../components/HotSale'

 const EventsPage = () => {
  return (
    <Container maxW={1500} p={20}>
      <Center>Events</Center>
      <br />
      <Carousel4/>
      <br />
      <HotSale/>
    </Container>
  )
}
export default EventsPage