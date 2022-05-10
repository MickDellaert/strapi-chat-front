import Messages from "./Messages";
import InputContainer from "./InputContainer";

const MessageContainer = () => {
  return (
    <>
      <div className="message-container relative col-span-8 bg-indigo-200">
        <Messages />
        <InputContainer />
      </div>
    </>
  );
};

export default MessageContainer;
