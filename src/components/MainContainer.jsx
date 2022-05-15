
import { useLocation } from 'react-router-dom';
import {useParams} from 'react-router-dom';

import MainHeader from "./header/MainHeader";
import ChatContainer from "./chatcontainer/ChatContainer";

const MainContainer = () => {

  const location = useLocation();

  const currentUserName = location.state

  const { id } = useParams();


  console.log(currentUserName)
  console.log("id"+id)

  return (
    <>
      <div className="main-container container mx-auto h-full py-6">
        
        <MainHeader />
        <ChatContainer currentUserName={id}/>
      </div>
    </>
  );
};

export default MainContainer;
