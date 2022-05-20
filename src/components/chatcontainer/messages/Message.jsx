const Message = ({ mapmessage }) => {
  // console.log(mapmessage)
  // const {
  //   id,
  //   attributes: { messagebody },
  // } = mapmessage;

  return (
    <div className="h-16 rounded-sm p-2 bg-zinc-50">
      <p>{`${mapmessage.attributes.currentuser}: ${mapmessage.attributes.messagebody} - ${mapmessage.attributes.updatedAt}`}</p>
    </div>
  );
};

export default Message;
