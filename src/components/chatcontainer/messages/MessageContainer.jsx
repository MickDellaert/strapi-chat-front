import Messages from "./Messages";
import InputContainer from "./InputContainer";

const MessageContainer = ({ getInput, input, getMessage, message, data }) => {
  return (
    <>
      <div className="message-container relative col-span-8 bg-zinc-100">
        <Messages message={message} data={data} />
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
