import Message from "./Message";

const Messages = ({ data, messagesArray, currentUserName }) => {

  // console.log(data.data.attributes.messages.data)
  // console.log(data.data.attributes.chatusers.data)

  // console.log(data.data.attributes)

  let messages = data.data.attributes.messages.data
  let chatusers = data.data.attributes.chatusers.data

  let bigArray = [...messages, ...chatusers]

  // console.log(bigArray)



  return (
    <>
      <div className="messages p-4 h-7/8">
        {data.data.attributes.messages.data.map((el, index) => (
          <Message key={index} mapmessage={el} />
        ))}
      </div>
    </>
  );
};

export default Messages;
