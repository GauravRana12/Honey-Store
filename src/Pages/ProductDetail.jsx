import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddingTocrat, getSingleRestaurant } from "../Redux/Action";
import { Box, Button, Flex, Image, Text, background } from "@chakra-ui/react";
import { color } from "framer-motion";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(1);

  const handleClick = (id) => {
    dispatch(AddingTocrat(id));
  };
  const single=useSelector((state) => state.single);
  console.log(single);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getSingleRestaurant(id));
  }, [dispatch,id]);
  const str = single.title;
  return (
      
    <Flex flexDirection={'column'}  m={{xl:'150px 150px 150px 200px',lg:'150px 100px 100px 100px',base:'20px'}}>
      <Flex flexDirection={{'2xl':'row',lg:'row',base:'column'}} mt={{lg:'0',base:'150px'}} gap={{lg:'200px',md:'80px'}} alignItems={'center'} >
      {/* ImgDiv */}
        <Flex>
        <Image   w={{xl:'400px',lg:'300px',md:'400px',base:'300px'}} h={{xl:'600px',lg:'400px',md:'500px',base:'300px'}} src={single.image} alt="images" />
        </Flex>

{/* Product Details */}
        
        <Flex flexDirection={'column'} w={{lg:'40%',md:'70%'}}>
       
       <Box textAlign={'start'} fontSize={{'2xl':'50px',xl:'40px',lg:'40px',md:'50px',base:'40px'}}>LET IT BEE.CO/HONEY<Text color={'rgb(25, 94, 73);'}>{str}</Text></Box>
       <Flex justifyContent={'space-between'} border={'1px solid black'} borderColor={'black white black white'} p={' 13px 0 13px 0'} fontSize={'20px'} mt={'20px'}><Text>Price</Text> <Text>₹ {single.price}</Text></Flex>
        <Flex fontFamily={'sans-serif'} fontSize={{xl:'20px',lg:'17px',md:'19px'}} flexDirection={'column'} gap={'10px'} textAlign={'start'} >
        <Text >This well loved honey by honey fans is found around in the world in
             an infinite number of flowers. It can be a mild,rich honey from a
            combination of spring,summer and flat flowers.</Text>
          <Text> Windflower honey rich antioxidants works well in terms and drizzled  over tea cakes and fresh seasonal fruits.</Text>

    </Flex>
{/* Cart Line */}
    <Flex fontFamily={'sans-serif'} mt={'50px'} flexDirection={{lg:'row',md:'row',sm:'row',base:'column'}} gap={{lg:'25px',base:'25px'}} justifyContent={{xl:'space-between',md:'space-between',base:'center'}}>

    <Flex >
   <Button isDisabled={add === 1} onClick={() => setAdd(add - 1)}>-</Button>
   <Button>{add}</Button>
   <Button  onClick={() => setAdd(add + 1)}>+</Button>
   </Flex>

<Button colorScheme="rgb(25, 94, 73)" onClick={() => handleClick(single.id)} color={'white'} padding={'25px'} bgColor={'rgb(0, 94, 83)'} w={'230px'} borderRadius={'50px'} >Add To Cart</Button>

    </Flex>
   


        </Flex>
 {/* Details End */}
 
      </Flex>
      {/* Bottom */}
      <Flex mt='40px' flexDirection={{md:'row',base:'column'}} gap={{lg:'150px',base:'50px'}} >
    <Image  boxSize={{xl:"500",lg:'350',md:'350',sm:'400',base:'300'}} margin={'auto'}  borderRadius='full'  src="https://pixelz.cc/wp-content/uploads/2018/08/honey-uhd-4k-wallpaper.jpg" alt="images" />

    <Flex flexDirection={'column'} alignItems={{md:'start',base:'center'}}>
      <Text fontSize={{'2xl':'50px',xl:'40px',base:'40px'}}>ABOUT THE PRODUCT</Text>
      <Image w={{"2xl":'75%',xl:'100%',lg:'95%',md:'100%',sm:'70%',base:'90%'}}   src="https://res.cloudinary.com/dusavcufz/image/upload/v1698662613/dkabwgxpexqq8m6acgdu.png" alt="review" />
    </Flex>

      </Flex>

{/* Bottom End */}
<Image w='100%' src="https://img.freepik.com/premium-vector/pure-honey-banner-ads-with-cute-honey-bee_317396-760.jpg?w=1380"    alt="last" />
    </Flex>

    
  );
};

export default ProductDetail;
