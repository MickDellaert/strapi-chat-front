import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName, userId }) => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [currentChannel, setCurrentChannel] = useState(120);

  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/channels/${currentChannel}?populate=*`,
    newMessage,
    currentChannel
  );
  // console.log(data);

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  const getChannel = (e) => {
    setCurrentChannel(e.target.id);

    async function addUser() {
      const url = `http://localhost:1337/api/chatusers/${userId}`;

      const body = {
        data: {
          channel: { id: currentChannel },
        },
      };
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return response.json();
    }
    addUser();
  };

  useEffect(() => {
    setCurrentChannel(currentChannel);
  }, [currentChannel]);

  async function createNewMessage(message, userId, currentChannel) {
    const url = `http://localhost:1337/api/messages`;

    const body = {
      data: {
        messagebody: message,
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

  const postMessage = () => {
    setNewMessage(message);
    createNewMessage(message, userId, currentChannel);
  };

  // console.log("currentchannel" + currentChannel);
  // useEffect(() => {
  //     setMessageArray(channels.data.attributes.messages.data);
  //     console.log(messageArray);

  // });

  // console.log(currentChannel)

  if (loading) return;
  if (error) return;

  const messagesArray = data.data.attributes.messages.data;

  // const usersArray = data.data.attributes.chatusers.data;

  // console.log(usersArray);

  // console.log(messagesArray);

  // console.log(channels.data.attributes.messages.data[0].attributes.messagebody);

  // const first = messagesArray[0].attributes.messagebody
  // console.log(first)

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
          // usersArray={usersArray}
        />
        <MessageContainer
          currentUserName={currentUserName}
          postMessage={postMessage}
          getInput={getInput}
          messagesArray={messagesArray}
          data={data}
        />
      </div>
    </>
  );
};

export default ChatContainer;
