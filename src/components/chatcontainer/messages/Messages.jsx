import Message from "./Message";

const Messages = ({ messagesArray }) => {
  return (
    <>
      <div className="messages p-4 h-7/8">
        {messagesArray.map((mapmessage) => (
          <Message key={mapmessage.id} mapmessage={mapmessage} />
        ))}
      </div>
    </>
  );
};

export default Messages;
