import React from 'react'
import Carousel1 from '../components/Carousel/Carousel1'
import { Center, Container } from '@chakra-ui/react'
import HotSale from '../components/HotSale'

export const BusinessPage = () => {
  return (
    <Container maxW={1500} p={20}> 
    <Center>Business</Center>
    <br />
       <Carousel1 />
       <br />
       <HotSale/>
    </Container>
  )
}
export default BusinessPage