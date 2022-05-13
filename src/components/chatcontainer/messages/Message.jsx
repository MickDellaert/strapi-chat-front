const Message = ({ message, testmessage }) => {

  console.log(testmessage)
  const {
    id,
    attributes: {
      body
    }
  } = testmessage


  return (
    <div className="h-16 rounded-sm p-2 bg-zinc-50">
      <p>{body} {id}</p>
      <p>{message}</p>
    </div>
  );
};

export default Message;
