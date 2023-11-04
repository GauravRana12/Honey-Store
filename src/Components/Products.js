import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddingTocrat, getRestaurants } from '../Redux/Action';
import '../Styles/Product.css';
import { Link } from 'react-router-dom';
import { Alert, AlertIcon, Flex, Skeleton, Stack } from '@chakra-ui/react';

const Products = ({ sort, cat, curr }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the alert

  useEffect(() => {
    dispatch(getRestaurants(curr, sort, cat));
  }, [curr, sort, cat]);

  const handleClick = (id) => {
    if (data.isAuth) {
      dispatch(AddingTocrat(id));
    } else {
      // If the user is not logged in, show the alert
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  if (data.isLoading) {
    return (
      <Flex flexDirection={'column'}>

      <Flex justifyContent={'space-around'} mb={"40px"}>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      </Flex>

      <Flex justifyContent={'space-around'} mb={"40px"}>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      </Flex>
      <Flex justifyContent={'space-around'}>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      <Stack>
        <Skeleton height="350px" w="400px" />
      </Stack>
      </Flex>
      </Flex>
    );
  }

  return (
    <>
    {showAlert && (
        <Alert status="warning">
          <AlertIcon />
          You have to login first
        </Alert>
      )}
    <div className="allProd">
    
      {data.products?.map((ele, idx) => (
        <div key={idx} className="cards">
          <Link to={`/product/${ele._id}`}>
            <div className="cardImg">
              <img src={ele.image} alt={ele.title} />
            </div>
          </Link>
          <div className="cardInfo">
            <span>⭐{ele.rating}</span>
            <h3>{ele.title}</h3>
            <h4>{ele.category}</h4>
            <div>
              <p>₹{ele.price}</p>
              <button onClick={() => handleClick(ele._id)}>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}

      {/* Render the alert based on the showAlert state */}
      

      {/* Pagination */}
    </div>
    </>
  );
};

export default Products;
