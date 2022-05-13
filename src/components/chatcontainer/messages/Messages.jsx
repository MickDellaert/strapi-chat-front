import Message from "./Message";

const Messages = ({ message, data }) => {

  console.log(data)



  return (
    <>
      <div className="messages p-4 h-7/8">
        {data.data.map( testmessage => 
          <Message testmessage={testmessage} message={message} data={data} /> )}
        
      </div>
    </>
  );
};

export default Messages;
