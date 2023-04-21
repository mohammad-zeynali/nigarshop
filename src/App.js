import React,{useState,useEffect} from "react";
import {useRoutes,useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import { shopContext } from"./contexts/shopContext"
import ToastBox from "./components/Toast/Toast"
import "./styles/app.css";

function App(props) {

  const routers = useRoutes(routes)
  const location = useLocation()

  const [userCart,setUserCart] = useState([])
  const [toastStatus,setToastStatus] = useState(false)
  return (
    <shopContext.Provider value={{
      userCart,
      setUserCart,
      toastStatus,
      setToastStatus,
    }}>

    <div className={`font-iranSansMedium ${location.pathname === "/search" ? "bg-white" : "bg-[#EEEEEE]"} overflow-x-hidden `}>

    {location.pathname === "/myAccount" || location.pathname === "/search" ? "" : <Header/>}
    {routers}
   
    {location.pathname === "/myAccount" || location.pathname === "/search" ? "" : <Footer/>}
    <BottomMenu/>
    
    </div>
    <ToastBox />
    </shopContext.Provider>
  );
}

export default App;
