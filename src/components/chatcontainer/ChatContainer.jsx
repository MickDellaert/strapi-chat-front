import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName, userId }) => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [currentChannel, setCurrentChannel] = useState("");
  const [newCurrentChanel, setNewCurrentChanel] = useState("")

  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/messages?populate=chatusers",
    newMessage, currentChannel
  );

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  const getChannel = (e) => {
    setCurrentChannel(e.target.id);
    // console.log(currentChannel)
  };

  useEffect(() => {
    setCurrentChannel(currentChannel);
  }, [currentChannel]);

  async function createNewMessage(newMessage, userId, newChannel) {
    const url = `http://localhost:1337/api/messages`;

    const body = {
      data: {
        messagebody: newMessage,
        chatusers: { id: userId },
        channel: {id: newChannel}
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
    const newChannel = currentChannel;
    setNewCurrentChanel(newChannel)
    console.log("function" + currentChannel)
    createNewMessage(newMessage, userId, newChannel);

  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <SideBar
          currentUserName={currentUserName}
          userId={userId}
          getChannel={getChannel}
        />
        <MessageContainer
          postMessage={postMessage}
          getInput={getInput}
          data={data}
        />
      </div>
    </>
  );
};

export default ChatContainer;
