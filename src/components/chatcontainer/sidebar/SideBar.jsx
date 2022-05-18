import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

import Channels from "./Channels";
import User from "./User";
import SideBarInputContainer from "./SideBarInputContainer";

const SideBar = ({ currentUserName, userId }) => {
  const [channel, setChannel] = useState("");
  const [newChannel, setNewChannel] = useState("");

  const {
    data: channels,
    error,
    loading,
  } = useFetch(
    "http://localhost:1337/api/channels?populate=chatusers",
    newChannel
  );

  const getInput = (e) => {
    setChannel(e.target.value);
  };

  async function createNewChannel(newChannel, userId) {
    const url = `http://localhost:1337/api/channels`;

    const body = {
      data: {
        channelname: newChannel,
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

  const postChannel = () => {
    const newChannel = channel;
    setNewChannel(newChannel);
    createNewChannel(newChannel, userId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="sidebar col-span-2 p-4 text-white relative rounded-bl-lg bg-fuchsia-800">
        <User currentUserName={currentUserName} userId={userId} />
        <Channels channels={channels} />
        <SideBarInputContainer getInput={getInput} handleClick={postChannel} />
      </div>
    </>
  );
};

export default SideBar;
