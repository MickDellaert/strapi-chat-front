import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/messages"
  );

  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const getInput = (e) => {
    if (e.target.value !== "") {
      setInput(e.target.value);
    }
  };

  const getMessage = () => {
    if (input.length > 0) {
      setMessage(input);
    }
  };

  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <SideBar />
        <MessageContainer
          getInput={getInput}
          input={input}
          getMessage={getMessage}
          message={message}
          data={data}
        />
      </div>
    </>
  );
};

export default ChatContainer;
