import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

// import Channels from "./Channels";
import User from "./User";
import InputContainer from "../../common/InputContainer";
import Button from "../../common/Button";
import Input from "../../common/Input";
import ListItem from "../../common/ListItem";
import List from "../../common/List";

const SideBar = ({ currentUserName, userId, getChannel }) => {
  const [channel, setChannel] = useState(56);
  const [newChannel, setNewChannel] = useState(56);
  const [startChannel, setStartChannel] = useState(56);

  const { data: users } = useFetch("http://localhost:1337/api/chatusers");
  const { data: channelLoad } = useFetch(
    "http://localhost:1337/api/channels/56",
    startChannel
  );

  const {
    data: channels,
    error,
    loading,
  } = useFetch("http://localhost:1337/api/channels", newChannel);

  useEffect(() => {
    setStartChannel(startChannel);
  });

  useEffect(() => {
    setChannel(channel);
  });
  // console.log(users);

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

  console.log(channelLoad);

  return (
    <>
      <div className="sidebar col-span-2 p-4 text-white relative rounded-bl-lg bg-fuchsia-800">
        <User currentUserName={currentUserName} userId={userId} />
        {/* <Channels channels={channels} /> */}
        <List title={"Channels"}>
          <ListItem
            object={channels}
            detail={"channelname"}
            onClick={getChannel}
          />
        </List>
        <List title={"Users"}>
          <ListItem object={users} detail={"username"} />
        </List>
        <InputContainer
          inputContainerClass={
            "input-container absolute bottom-0 grid grid-cols-10 w-full h-20 p-4 rounded-br-lg bg-zinc-200"
          }
        >
          <Input getInput={getInput} className={"col-span-6 text-black"} />
          <Button
            handleClick={postChannel}
            className={"p-2 col-span-4 text-white bg-fuchsia-900"}
            buttonName={"channel"}
          />
        </InputContainer>
      </div>
    </>
  );
};

export default SideBar;
