import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import MainHeader from "./header/MainHeader";
import ChatContainer from "./chatcontainer/ChatContainer";



const MainContainer = () => {
  const [userId, setUserId] = useState();

  
  const {
    data,
    loading,
    error,
  } = useFetch("http://localhost:1337/api/chatusers");


useEffect(() =>{
  setUserId(sessionStorage.getItem("id"))
  
})

  const location = useLocation();
  const currentUserName = location.state;
  // console.log(location.state)

  const { id } = useParams();

  if (loading) return;
  if (error) return;

  return (
    <>
      <div className="main-container container mx-auto h-full py-6">
        <MainHeader />
        <ChatContainer currentUserName={currentUserName} userId={userId} />
      </div>
    </>
  );
};

export default MainContainer;
