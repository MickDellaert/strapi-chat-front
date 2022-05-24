import useFetch from "../../../hooks/useFetch";
import { useState } from "react";

import User from "./User";
import InputContainer from "../../common/InputContainer";
import Button from "../../common/Button";
import Input from "../../common/Input";
import ListItem from "../../common/ListItem";
import List from "../../common/List";
import CurrentListItem from "../../common/CurrentListItem";

const SideBar = ({
  data,
  currentUserName,
  userId,
  getChannel,
  currentChannel,
  setCurrentChannel,
}) => {
  const [channel, setChannel] = useState();
  const [newChannel, setNewChannel] = useState();

  const { data: users } = useFetch(`http://localhost:1337/api/chatusers/`);

  const {
    data: channels,
    error,
    loading,
  } = useFetch("http://localhost:1337/api/channels", newChannel);


  const getInput = (e) => {
    setChannel(e.target.value);
  };

  async function createNewChannel(newChannel, userId) {
    const url = `http://localhost:1337/api/channels`;

    const body = {
      data: {
        channelname: newChannel,
        chatuser: { id: userId },
        messages: {id: "815" }
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
    setChannel(channel);
    setNewChannel(newChannel);

    setCurrentChannel(channels.data[channels.data.length - 1].id);
    createNewChannel(newChannel, userId);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <div className="sidebar overflow-y-auto col-span-2 p-4 pb-24 text-white relative rounded-bl-lg bg-fuchsia-800">
        <User
          currentUserName={currentUserName}
          userId={userId}
          currentChannel={currentChannel}
        />

        <List title={"Channel Users"}>
          <CurrentListItem
            object={data}
            detail={"username"}
          />
        </List>

        <List title={"All Channels"}>
          <ListItem
            object={channels}
            detail={"channelname"}
            onClick={getChannel}
          />
        </List>
        <List title={"All Users"}>
          <ListItem object={users} detail={"username"} />
        </List>
        <InputContainer
          inputContainerClass={
            "input-container absolute bottom-0 left-0 grid grid-cols-10 w-full h-20 p-4 bg-zinc-200"
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
