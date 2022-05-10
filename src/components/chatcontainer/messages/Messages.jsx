import Message from "./Message";

const Messages = ({ input, message }) => {
  return (
    <>
      <div className="messages p-4 h-7/8">
        <Message input={input} message={message} />
      </div>
    </>
  );
};

export default Messages;
