import Messages from "./Messages";
import InputContainer from "./InputContainer";

const MessageContainer = ({ getInput, input, getMessage, message }) => {
  return (
    <>
      <div className="message-container relative col-span-8 bg-zinc-100">
        <Messages message={message} />
        <InputContainer
          getInput={getInput}
          input={input}
          getMessage={getMessage}
        />
      </div>
    </>
  );
};

export default MessageContainer;
