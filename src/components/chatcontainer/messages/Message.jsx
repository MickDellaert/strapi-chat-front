const Message = ({ mapmessage, currentUserName }) => {
  console.log(mapmessage)
  // const {
  //   id,
  //   attributes: { messagebody },
  // } = mapmessage;

  return (
    <div className="h-16 rounded-sm p-2 bg-zinc-50">
      <p>{mapmessage.attributes.messagebody}{mapmessage.attributes.username}</p>
      <p>{currentUserName}</p>
    </div>
  );
};

export default Message;
