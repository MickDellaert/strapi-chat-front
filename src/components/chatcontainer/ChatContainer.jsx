import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName, userId }) => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [currentChannel, setCurrentChannel] = useState(49);
  const [channelData, setChannelData] = useState();
  const [messageArray, setMessageArray] = useState([]);

  const {
    data: channels,
    error,
    loading,
  } = useFetch(
    `http://localhost:1337/api/channels/${currentChannel}?populate=messages`,
    newMessage,
    currentChannel
  );

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  const getChannel = (e) => {
    setCurrentChannel(e.target.id);

    // async function getSelectedChannel(currentChannel) {
    //   let response = await fetch(
    //     `http://localhost:1337/api/channels/${currentChannel}?populate=messages`
    //   );
    //   let data = await response.json();
    //   setChannelData(data);

    //   console.log(channelData);

    //   console.log(data);
    //   return data;
    // }

    // getSelectedChannel(currentChannel);
  };

  useEffect(() => {
    setCurrentChannel(currentChannel);
  });

  async function createNewMessage(message, userId, currentChannel) {
    const url = `http://localhost:1337/api/messages`;

    const body = {
      data: {
        messagebody: message,
        chatuser: { id: userId },
        channel: { id: currentChannel },
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

  // useEffect(() => {
  //     setMessageArray(channels.data.attributes.messages.data);
  //     console.log(messageArray);

  // });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const messagesArray = channels.data.attributes.messages.data;
  console.log(messagesArray);

  // console.log(channels.data.attributes.messages.data[0].attributes.messagebody);

  // const first = messagesArray[0].attributes.messagebody
  // console.log(first)

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
          messagesArray={messagesArray}
        />
      </div>
    </>
  );
};

export default ChatContainer;
