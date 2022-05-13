import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = () => {
  const [message, setMessage] = useState("");

  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/messages"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  const getMessage = () => {
    // e.preventDefault();

    const newMessage = message;

    async function createNewProduct(newMessage) {
      const url = `http://localhost:1337/api/messages`;
      const body = {
        data: {
          messagebody: newMessage,
        },
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return response.json();
    }

    createNewProduct(newMessage);
  };

  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <SideBar />
        <MessageContainer
          getInput={getInput}
          getMessage={getMessage}
          data={data}
        />
      </div>
    </>
  );
};

export default ChatContainer;
