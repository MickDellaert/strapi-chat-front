import { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName, userId }) => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [currentChannel, setCurrentChannel] = useState(JSON.parse(sessionStorage.getItem("state")) || 238);
  const currentChannelRef = useRef();

  console.log(JSON.parse(localStorage.getItem("state")));


  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/channels/${currentChannel}?populate=*`,
    newMessage,
    currentChannel
  );

  // useEffect(() => {
  //   setCurrentChannel(JSON.parse(window.sessionStorage.getItem("state")));
  // }, []);

  useEffect(() => {
    sessionStorage.setItem("state", 238);
  }, [currentChannel]);

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  const getChannel = (e) => {
    setCurrentChannel(e.target.id);
    currentChannelRef.current = e.target.id;

    async function addUser() {
      console.log("currentchannel inside adduser" + currentChannel);
      const url = `http://localhost:1337/api/chatusers/${userId}`;

      const body = {
        data: {
          channel: { id: currentChannelRef.current },
        },
      };
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    }
    addUser();
  };

  async function createNewMessage(message, userId, currentChannel) {
    const url = `http://localhost:1337/api/messages`;

    const body = {
      data: {
        messagebody: message,
        currentuser: currentUserName,
        chatuser: { id: userId },
        channels: { id: currentChannel },
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

  useEffect(() => {
    setCurrentChannel(currentChannel);
  }, [currentChannel]);

  const postMessage = () => {
    setNewMessage(message);
    createNewMessage(message, userId, currentChannel);
  };

  if (loading) return;
  if (error) return;

  return (
    <>
      <div className="chat-container grid grid-cols-10 h-7/8">
        <SideBar
          data={data}
          currentUserName={currentUserName}
          userId={userId}
          getChannel={getChannel}
          currentChannel={currentChannel}
          setCurrentChannel={setCurrentChannel}
        />
        <MessageContainer
          userId={userId}
          currentUserName={currentUserName}
          postMessage={postMessage}
          getInput={getInput}
          data={data}
        />
      </div>
    </>
  );
};

export default ChatContainer;
