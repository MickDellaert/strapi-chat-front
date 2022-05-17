import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName, userId }) => {
  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <SideBar currentUserName={currentUserName} userId={userId} />
        <MessageContainer currentUserName={currentUserName} userId={userId} />
      </div>
    </>
  );
};

export default ChatContainer;
