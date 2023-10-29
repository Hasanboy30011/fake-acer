import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { sofaService } from "../service/sofaService";
import { BasketContext } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {

const searchData = async()=>{
  try {
    axios.get(`https://dummyjson.com/products/search?q=${inputValue
    .trim()
  .toLowerCase()}
    `)
    .then(response=>setData(response.data.products))
  } catch (error) {
    console.log(error)
  }
}



const search =()=>{
searchData()
}


  const [inputValue,setInputValue] = useState('')
    const [data,setData] = useState([])
    useEffect(()=>{
axios.get('https://dummyjson.com/products')
.then((result)=>setData(result.data.products))
    },[])
  return (
    <Container maxW={1500} p={20} >
      <Box marginBottom={10} display={"flex"}>      
      <Input onChange={e=>setInputValue(e.target.value)} placeholder='search'/>
      <Button onClick={search} colorScheme='twitter'>search</Button>
      </Box>
      <Grid templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)"}} gap={"20px"}>
        {data.map((item) => {
          return (
            <GridItem
            border={"1px solid gray"}
            p={1}
              background={"whiteAlpha.200"}
              height={"fit-content"}
              key={item.id}
              borderRadius={10}
              className="aa"
            >
              <Box
                height={"100%"}
                cursor={"pointer"}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <Box overflow={"hidden"} height={"250px"}>
                 
                  <Image
                    src={item.thumbnail}
                    width={"100%"}
                    objectFit={"cover"}
                    height={"250px"}
                    borderTopRadius={10}
                    className="aa_img"
                    draggable={false}
                    transition={"150ms"}
                  />
                </Box>

                <VStack p={"10px"} alignItems={"start"}>
                  <Heading className="product-card__title" size={"sm"}>
                    {item.title}
                  </Heading>
                  <Text className="product-card__description">
                    {item.description}
                  </Text>
                  <Text as={"b"}>${item.price?.toLocaleString()}</Text>
                </VStack>
              </Box>
              <Box p={"10px"} display={"flex"}>
                
                <Button
                  className="product__card-btn"
                  width={"100%"}
                  onClick={() => addToBasket(item)}
                  colorScheme="facebook"
                >
                  Добавить в корзину
                </Button>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  )
}

export default SearchPage