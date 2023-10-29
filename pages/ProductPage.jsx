import React from 'react'
import HotSale from "../components/HotSale"
import { Center, Container } from '@chakra-ui/react'
const ProductPage = () => {
  return (
    <Container maxW={1500} p={20}>
<Center>
      Acer Products
      </Center>
      <HotSale/>
    </Container>
  )
}
export default ProductPage