import Messages from "./Messages";
import InputContainer from "./InputContainer";

const MessageContainer = ({ getInput, getMessage, data }) => {
  return (
    <>
      <div className="message-container relative col-span-8 bg-zinc-100">
        <Messages data={data} />
        <InputContainer
          getInput={getInput}
          getMessage={getMessage}
        />
      </div>
    </>
  );
};

export default MessageContainer;
