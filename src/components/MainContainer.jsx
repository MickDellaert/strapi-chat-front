import MainHeader from "./header/MainHeader";
import ChatContainer from "./chatcontainer/ChatContainer";

const MainContainer = () => {
  return (
    <>
      <div className="main-container container mx-auto h-full py-6">
        <MainHeader />
        <ChatContainer />
      </div>
    </>
  );
};

export default MainContainer;
