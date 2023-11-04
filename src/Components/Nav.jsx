import React, { useContext, useState } from "react";
import style from "../Styles/nav.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Context/AuthContextProvider";
import { logout } from "../Redux/Action";

const Nav = () => {
  const cart = useSelector((state) => state.cart);
  const [prod,setProd]=useState('');
  const auth=useSelector((state)=>state.isAuth);
  const dispatch = useDispatch();
  const { nameLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(nameLogin);
  const checking=useSelector(state=>state.isAuth);
  console.log(checking);
console.log(process.env.REACT_APP_PORT)

  return (
    <div className="navbar">
      <Link to={"/"} style={{ textDecoration: "none", color: "#185e49" }}>
        <div>
          <h2 className="navTop">LET IT BEE.CO</h2>
        </div>
      </Link>
      <div className="navbar_element">
        <input placeholder="Search product" onChange={(e)=>setProd(e.target.value)} className="searching" />
          <div className="navbar_icon1">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2xl"
              style={{ color: "#185e49" }}
            />
          </div>
        
        <Link to={"/login"}>
          <div className="navbar_icon2" style={{display:checking? "none":"block"}}>
            <FontAwesomeIcon
              icon={faUser}
              size="2xl"
              style={{ color: "#185e49" }}
            />
          </div>
        </Link>
        <Link to={"/cart"}>
          <div
            className="navbar_icon3"
            style={{ display: "flex", position: "relative" }}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              style={{ color: "#185e49" }}
            />

            <span
              style={{
                borderRadius: "50%",
                height: "1.4rem",
                width: "1.4rem",
                color: "#FFFF",
                position: "absolute",
                left: "60%",
              }}
            >
              {auth ? cart.length:0}
            </span>
          </div>
        </Link>
        <p className="logName" style={{display:checking? "block":"none"}}>
          {nameLogin}{"   "}
          <span title="Logout"
            onClick={() => {
              dispatch(logout);
              navigate("/login");
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
