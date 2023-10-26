import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {
  Box,
  Container,
  Link as ChakraLink,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import chocomenu from "../../assets/icons/choco-menu.svg"
import location from "../../assets/icons/location.svg"
import user from "../../assets/icons/user.svg"

const TopHeader = () => {
  return (
    <Box
      w={'100%'}
      bg={'var(--primary-color)'}
      h={'40px'}
      color={'white'}
      display={{ base: 'none', md: 'block' }}
    >
      <Container
        maxW={'1300px'}
        px={'20px'}
        height={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
         
          <Menu>
  <MenuButton>
  <Box as='nav' display={'flex'} gap={'10px'}>

  <Image src={chocomenu} />   <Link >Контакты</Link>
  </Box>
  
  </MenuButton>
  <MenuList>
    
    <MenuItem><Image w={50} height={50} src='data:image/png;base64,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'/></MenuItem>
    <MenuItem><Image w={50} height={50} src='data:image/png;base64,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'/></MenuItem>
    <MenuItem><Image w={50} height={50} src='https://cdn.worldvectorlogo.com/logos/acer-conceptd.svg'/></MenuItem>
    <MenuItem><Image w={50} height={50} src='https://pbs.twimg.com/profile_images/1610104721620205568/indB5M2l_400x400.png'/></MenuItem>
    <MenuItem><Image w={50} height={50} src='data:image/png;base64,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'/></MenuItem>
  </MenuList>
</Menu>
        <Box display={'flex'} gap={'15px'}>
          <Link to={"/"} style={{display:"flex",gap:"10px"}}>
            <Image  src={location} />
          </Link>
          <Menu>
  <MenuButton>
  <ChakraLink display={'flex'} alignItems={'center'} gap={'12px'}>
            
            <Image src={user} />
          </ChakraLink>
  </MenuButton>
  <MenuList color={"black"}>
  <Link to={"/login"}><MenuItem> Login</MenuItem></Link>
  <Link to={"/register"}> <MenuItem>Register</MenuItem></Link>
  <Link><MenuItem>Mark as Draft</MenuItem></Link>
   
  </MenuList>
</Menu>
         
        </Box>
      </Container>
    </Box>
  )
}

export default TopHeader
