import { useState } from "react";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const getMessage = () => {
    if (input.length > 0) {
      setMessage(input);
      console.log(message);
    }
  };

  console.log(input);

  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <SideBar />
        <MessageContainer
          getInput={getInput}
          input={input}
          getMessage={getMessage}
          message={message}
        />
      </div>
    </>
  );
};

export default ChatContainer;
