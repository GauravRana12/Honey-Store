import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { AuthContext } from "../Context/AuthContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { googleLogIN, login } from "../Redux/Action";
import { Flex, Image, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signArray, setNameLogin } = useContext(AuthContext);
  const [signData, setSignData] = useState({
    email: "",
    password: "",
  });
  var dt=useSelector((state)=>state)

  const loginForm =async (e) => {
    e.preventDefault();
    try {

       dispatch(login(signData))
    const token=Cookies.get('token');
    console.log(token)
    if(!token){
      
    }

    else{
      navigate('/');
    }
    } catch (error) {
      
    }
   
  };

  const googleLogin=()=>{
    window.location.href=`${process.env.REACT_APP_PORT}/auth/google`
    dispatch(googleLogIN)
  }

  return (
    <div className="body">
      <div class="main_div">
        <div class="title">Login Form</div>
        <div class="social_icons">
        <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"} onClick={googleLogin}>
						<Image src='https://res.cloudinary.com/dusavcufz/image/upload/v1698468993/tcavtkjymcfeum31lbsf.png' w={5} alt='Google logo' />
						<Text mx='2' color={"blue.500"}>
							Log in with Google
						</Text>
					</Flex>
        </div>
        <form onSubmit={loginForm}>
          <div class="input_box">
            <input
              type="text"
              placeholder="Email or Phone"
              name="email"
              required
              id="login_email"
              value={signData.email}
              onChange={(e) =>
                setSignData({ ...signData, [e.target.name]: e.target.value })
              }
            />
            <div class="icon">
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div class="input_box">
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              name="password"
              value={signData.password}
              onChange={(e) =>
                setSignData({ ...signData, [e.target.name]: e.target.value })
              }
            />
            <div class="icon">
              <i class="fas fa-lock"></i>
            </div>
          </div>
          <div class="option_div">
            <div class="check_box">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div class="forget_div"></div>
          </div>
          <div class="input_box button">
            <input type="submit" value="Login" id="login" />
          </div>
          <div class="sign_up">
            Not a member?{" "}
            <Link style={{ textDecoration: "none" }} to={"/signup"}>
              SignUp Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
