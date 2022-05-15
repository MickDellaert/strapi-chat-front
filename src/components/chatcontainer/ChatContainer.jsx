import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName }) => {
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/messages?populate=chatusers",
    newMessage
  );

  const { data: users } = useFetch("http://localhost:1337/api/chatusers");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // console.log(users);

  // console.log(data.at(-1));

  // console.log(data.data[2].attributes.chatusers.data[2].attributes.username);

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  async function createNewMessage(newMessage, currentUserName) {
    const url = `http://localhost:1337/api/messages`;
    console.log("current" + currentUserName);

    const body = {
      data: {
        messagebody: newMessage,
        chatusers: { id: currentUserName },
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
    // e.preventDefault();
    
    const newMessage = message;
    setNewMessage(newMessage);
    // console.log(newMessage);
    createNewMessage(newMessage, currentUserName);
  };

  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <p>{currentUserName}{message}</p>
        <SideBar />
        <MessageContainer
          getInput={getInput}
          postMessage={postMessage}
          data={data}
        />
      </div>
    </>
  );
};

export default ChatContainer;
