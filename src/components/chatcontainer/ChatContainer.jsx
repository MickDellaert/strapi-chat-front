import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = () => {
  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <SideBar />
        <MessageContainer />
      </div>
    </>
  );
};

export default ChatContainer;
