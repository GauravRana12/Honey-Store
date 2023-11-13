import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { googleLogIN } from "./Redux/Action";

function App() {
  var dispatch=useDispatch();
  useEffect(()=>{
    const token=Cookies.get('token');
    console.log(token);
    if(token){
    dispatch(googleLogIN)
    }
  },[])
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
