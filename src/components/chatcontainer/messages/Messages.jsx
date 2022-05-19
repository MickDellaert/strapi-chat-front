import Message from "./Message";

const Messages = ({ messagesArray, currentUserName }) => {

  console.log(messagesArray)
  
  return (
    <>
      <div className="messages p-4 h-7/8">
        {messagesArray.map((mapmessage) => (
          <Message key={mapmessage.id} mapmessage={mapmessage}currentUserName={currentUserName} />
        ))}
      </div>
    </>
  );
};

export default Messages;
