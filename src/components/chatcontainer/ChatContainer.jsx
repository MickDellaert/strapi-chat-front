import { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";

import SideBar from "./sidebar/SideBar";
import MessageContainer from "./messages/MessageContainer";

const ChatContainer = ({ currentUserName, userId }) => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [currentChannel, setCurrentChannel] = useState(238);
  const currentChannelRef = useRef();

  // JSON.parse(window.localStorage.getItem("state"))

  console.log(  JSON.parse(window.localStorage.getItem("state"))
  )


  const [usersArray, setUsersArray] = useState([]);


  const { data, error, loading } = useFetch(
    `http://localhost:1337/api/channels/${currentChannel}?populate=*`,
    newMessage,
    currentChannel
  );


  // useEffect(() => {
  //   setCurrentChannel(JSON.parse(window.sessionStorage.getItem("state")));
  // }, []);

  // useEffect(() => {
  //   window.sessionStorage.setItem("state",  JSON.stringify("238"));
  // }, []);

  // console.log(data);

  // /api/restaurants?filters[chef][restaurants][stars][$eq]=5

  // const { data: users } = useFetch(
  //   `http://localhost:1337/api/channels/120?populate[chatusers][fields][0]=id`
  // );

  // /api/articles?populate[category][fields][0]=name&populate[category][fields][1]=url

  // useEffect(() => {
  //   setUsersArray(usersArray);
  //   // console.log(usersArray)
  // }, []);

  useEffect(() => {
    async function fetchData() {
      console.log("before fetch" + currentChannel);
      const res = await fetch(
        `http://localhost:1337/api/channels/${currentChannel}?populate[chatusers][fields][0]=id`
      );
      const json = await res.json();
      // console.log(json);
      setUsersArray(json.data.attributes.chatusers.data);
      // console.log(json.data.attributes.chatusers.data);
    }
    fetchData();
    console.log("currentchannel after fetch" + currentChannel);
    console.log("userId after fetch" + userId);

    setCurrentChannel(currentChannel);
    console.log(userId);
  }, [currentChannel]);

  useEffect(() => {
    setCurrentChannel(currentChannel);
    console.log(usersArray);
  }, [currentChannel]);

  // useEffect(() => {
  //   console.log(usersArray);
  // }, [currentChannel]);



  const getInput = (e) => {
    setMessage(e.target.value);
  };

  const getChannel = (e) => {
    
    currentChannelRef.current = e.target.id;
    setCurrentChannel(e.target.id);

    // console.log(e.target)
    console.log(
      "currentchannelRef click getChannel" + currentChannelRef.current
    );
    console.log("currentchannel click getChannel" + currentChannel);
    console.log("userId click getChannel" + userId);

    async function addUser() {
      console.log("currentchannel inside adduser" + currentChannel);
      const url = `http://localhost:1337/api/chatusers/${userId}`;

      const body = {
        data: {
          // chatusers: [...usersArray, userId],
          // chatusers: { id: userId },
          channel: { id: currentChannelRef.current }
        },
      };
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("json id" + json.data.id);
          console.log(usersArray);

          // setCurrentChannel(json.data.id)
        });

      console.log("currentchannel after put" + currentChannel);
      console.log("userId after put" + userId);

      // console.log(userId)
      // console.log(usersArray)

      // return response.json();
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

    useEffect(() => {
    setCurrentChannel(currentChannel);
  }, [currentChannel]);

  const postMessage = () => {
    setNewMessage(message);
    createNewMessage(message, userId, currentChannel);
  };

  if (loading) return;
  if (error) return;

  // const usersTest = data.data.attributes.chatusers.data;

  // const messagesArray = data.data.attributes.messages.data;
  console.log("currentusername" + currentUserName);
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
          // messagesArray={messagesArray}
          data={data}
        />
      </div>
    </>
  );
};

export default ChatContainer;
