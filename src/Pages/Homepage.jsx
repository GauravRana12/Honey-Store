import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TopSection from "../Components/hompage_components/TopSection";
import MiddleSection from "../Components/hompage_components/MiddleSection";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
const Homepage = () => {
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <div>
      <TopSection />
      <MiddleSection />
      <Subscribe />
    </div>
  );
};

export default Homepage;
