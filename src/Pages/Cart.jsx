import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../Styles/cartpage.css";
import Items from "../Components/Items";
import HomeButtons from "../Components/hompage_components/HomeButtons";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getFromCart } from "../Redux/Action";

const Cart = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart);
var dispatch=useDispatch();
  const handlePaymentClick = () => {
    navigate("/payment");
  };
  const handleBack = () => {
    navigate("/product");
  };

  const totalPrice = data.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  useEffect(()=>{
   dispatch(getFromCart)
  },[])
  return (
    <div className="cart_page">
      <div className="cart_details">
        DELIVERY/DETAILS/PAYMENT
        <br></br>
        <br></br>
        <input placeholder="FULL NAME"></input>
        <br></br>
        <input type="number" placeholder="NUMBER"></input>
        <br></br>
        <input placeholder="ADDRESS LINE 1"></input>
        <br></br>
        <input placeholder="ADDRESS LINE 2"></input>
        <br></br>
        <input placeholder="CITY"></input> <br></br>
        <input placeholder="STATE"></input> <br></br>
        <input type="number" placeholder="PINCODE"></input>
        <p>
          <HomeButtons
            className="back"
            name={"BACK"}
            handleButton={handleBack}
          />{" "}
          <HomeButtons
            name={"PROCEED TO PAY"}
            handleButton={handlePaymentClick}
          />
        </p>
      </div>
      <div className="cart_prods">
        YOUR ORDERS{" "}
        <hr style={{ border: "0.1px solid white", width: "100%" }}></hr>
        <div className="scroll">
          {data.map((item, index) => {
            return <Items key={item.id} item={item} index={index} />;
          })}
        </div>
        <div className="cart_pricing">
          <div>
            <h3>SUBTOTAL:</h3>
            <h3>RS.{totalPrice}.00</h3>
          </div>
          <hr style={{ border: "0.1px solid white", width: "80%" }}></hr>
          <div>
            <h3>DELIVERY:</h3>
            <h3>Rs.{totalPrice ? "99" : "00"}</h3>
          </div>
          <hr style={{ border: "0.1px solid white", width: "80%" }}></hr>
          <div>
            <h2>TOTAL:</h2>
            <h2>RS.{totalPrice != 0 ? totalPrice + 99 : 0}.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
