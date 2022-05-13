import Message from "./Message";

const Messages = ({ data }) => {

  return (
    <>
      <div className="messages p-4 h-7/8">
        {data.data.map((mapmessage) => (
          <Message key={mapmessage.id} mapmessage={mapmessage}/>
        ))}
      </div>
    </>
  );
};

export default Messages;
