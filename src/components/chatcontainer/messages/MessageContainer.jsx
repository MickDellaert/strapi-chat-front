import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

import Messages from "./Messages";
import InputContainer from "../../common/InputContainer";
import Button from "../../common/Button";
import Input from "../../common/Input";

const MessageContainer = ({ userId }) => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/messages?populate=chatusers",
    newMessage
  );

  const getInput = (e) => {
    setMessage(e.target.value);
  };

  async function createNewMessage(newMessage, userId) {
    const url = `http://localhost:1337/api/messages`;

    const body = {
      data: {
        messagebody: newMessage,
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

  const postMessage = () => {
    const newMessage = message;
    setNewMessage(newMessage);
    createNewMessage(newMessage, userId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="message-container relative col-span-8 bg-zinc-100">
        <Messages data={data} />
        <InputContainer
          inputContainerClass={`input-container absolute bottom-0 grid grid-cols-10 w-full h-20 p-4 rounded-br-lg bg-zinc-200`}
        >
          <Input getInput={getInput} className={`col-span-8`} />
          <Button
            handleClick={postMessage}
            className={`p-2 col-span-2 text-white bg-fuchsia-900`}
            buttonName={`new message`}
          />
        </InputContainer>
      </div>
    </>
  );
};

export default MessageContainer;
