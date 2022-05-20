import useFetch from "../../../hooks/useFetch";

import Messages from "./Messages";
import InputContainer from "../../common/InputContainer";
import Button from "../../common/Button";
import Input from "../../common/Input";

const MessageContainer = ({
  data,
  getInput,
  postMessage,
  messagesArray,
  currentUserName,
  userId
}) => {
  const {
    data: user,
    loading,
    error,
  } = useFetch(`http://localhost:1337/api/chatusers/${userId}`);


  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <div className="message-container relative col-span-8 bg-zinc-100">
        <Messages
          data={data}
          messagesArray={messagesArray}
          currentUserName={currentUserName}
        />
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
