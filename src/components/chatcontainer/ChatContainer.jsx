import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName, userId }) => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [currentChannel, setCurrentChannel] = useState(
    JSON.parse(window.localStorage.getItem("state"))
  );
  const [usersArray, setusersArray] = useState([]);

  // /api/restaurants?filters[chef][restaurants][stars][$eq]=5

  const { data: users } = useFetch(
    `http://localhost:1337/api/channels/120?populate[chatusers][fields][0]=id`
  );

  // /api/articles?populate[category][fields][0]=name&populate[category][fields][1]=url

  
  useEffect(()=>{
    setusersArray(usersArray)
    console.log(usersArray)
  },[])
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:1337/api/channels/${currentChannel}?populate[chatusers][fields][0]=id`
      );
      const json = await res.json();
      console.log(json);
      setusersArray(json.data.attributes.chatusers.data);
      console.log(json.data.attributes.chatusers.data);
    }
    fetchData();
  }, [currentChannel]);


  useEffect(() => {
    console.log(usersArray);
  }, [currentChannel]);


  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/channels/${currentChannel}?populate=*`,
    newMessage,
    currentChannel
  );

  // useEffect(() => {
  //   setCurrentChannel(JSON.parse(window.sessionStorage.getItem("state")));
  // }, []);

  useEffect(() => {
    window.localStorage.setItem("state", currentChannel);
  }, [currentChannel]);

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  const getChannel = (e) => {
    setCurrentChannel(e.target.id);

    async function addUser() {
      const url = `http://localhost:1337/api/channels/${currentChannel}`;

      const body = {
        data: {
          chatusers: [...usersArray, userId ],
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

  // useEffect(() => {
  //   setCurrentChannel(currentChannel);
  // }, [currentChannel]);

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

  const postMessage = () => {
    setNewMessage(message);
    createNewMessage(message, userId, currentChannel);
  };

  if (loading) return;
  if (error) return;

  const usersTest = data.data.attributes.chatusers.data;

  const messagesArray = data.data.attributes.messages.data;

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
          userId={userId}
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
