const Message = ({ mapmessage }) => {
  const {
    id,
    attributes: { messagebody },
  } = mapmessage;

  return (
    <div className="h-16 rounded-sm p-2 bg-zinc-50">
      <p>
        {messagebody} {id}
      </p>
    </div>
  );
};

export default Message;
