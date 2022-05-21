import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import MainHeader from "./header/MainHeader";
import ChatContainer from "./chatcontainer/ChatContainer";

const MainContainer = () => {
  const [userId, setUserId] = useState();

  // const {
  //   data: users,
  //   loading,
  //   error,
  // } = useFetch("http://localhost:1337/api/chatusers");


useEffect(() =>{
  console.log(sessionStorage.getItem("id"))
  setUserId(sessionStorage.getItem("id"))
  
})

  const location = useLocation();
  const currentUserName = location.state;
  console.log(location.state)

  const { id } = useParams();

  // useEffect(() => {
  //   if (users !== null) {
  //     setUserId(users.data[users.data.length - 1].id);
  //   }
  // });

  // if (loading) return;
  // if (error) return;

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
