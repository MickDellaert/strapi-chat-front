import Messages from "./Messages";
import InputContainer from "./InputContainer";

const MessageContainer = ({ getInput, postMessage, data }) => {
  return (
    <>
      <div className="message-container relative col-span-8 bg-zinc-100">
        <Messages data={data} />
        <InputContainer
          getInput={getInput}
          postMessage={postMessage}
        />
      </div>
    </>
  );
};

export default MessageContainer;
