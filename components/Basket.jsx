import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Button, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import axios from "axios";

const Basket = () => {
const [data,setData] = useState([])

  const getData = async () =>{
    await axios
    .get('https://dummyjson.com/products')
    .then((result)=> setData(result.data.products))
  }
  useEffect(()=>{
  getData()
  },[])
  const deleteData = async () =>{
    try {
      axios.delete(`https://dummyjson.com/products${id}`)
      .then(res=>console.log(res))
    } catch (error) {
      console.log(error)
    }
    }
  const { basket } = useContext(BasketContext);
  console.log(basket);

  const onDelete =(id)=>{
deleteData(id)


  }
  return (
    
    <Grid templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}} gap={10}>
   
        {basket.map((item, index) => (
          <Box mb={250}  key={index} border={"1px solid gray"}>
            <Image  src={item.images[0]} width={"500px"} height={"300px"} />
            <Heading>{item.title}</Heading>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
            <Button onClick={()=>onDelete(item.id)} width={"100%"} colorScheme="red">delete</Button>
          </Box>
        ))}
      
    </Grid>
  );
};

export default Basket;
