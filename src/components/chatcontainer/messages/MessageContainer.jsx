import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

import Messages from "./Messages";
import InputContainer from "./InputContainer";

const MessageContainer = ({ userId, currentUserName }) => {
  
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/messages?populate=chatusers",
    newMessage
  );

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  async function createNewMessage(newMessage, userId) {
    const url = `http://localhost:1337/api/messages`;

    const body = {
      data: {
        messagebody: newMessage,
        chatusers: { id: userId },
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

  const postMessage = () => {
    const newMessage = message;
    setNewMessage(newMessage);
    createNewMessage(newMessage, userId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="message-container relative col-span-8 bg-zinc-100">
        <Messages data={data} />
        <InputContainer
          getInput={getInput}
          postMessage={postMessage}
        />
      </div>
    </>
  );
};

export default MessageContainer;

