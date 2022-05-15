import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = () => {
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

  console.log(users);
  
  // console.log(data.at(-1));

  // console.log(data.data[2].attributes.chatusers.data[2].attributes.username);


  const getInput = (e) => {
    setMessage(e.target.value);
  };

  async function createNewMessage(newMessage) {
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

const getCurrentUser = () =>{

}

  const postMessage = () => {
    // e.preventDefault();

    const newMessage = message;
    setNewMessage(newMessage);
    console.log(newMessage);
    createNewMessage(newMessage);
  };



  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
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
