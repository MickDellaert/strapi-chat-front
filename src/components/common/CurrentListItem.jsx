const CurrentListItem = ({ object, detail, onClick }) => {

  // console.log(object.data.attributes.chatusers.data)

  return (
    <>
      {object.data.attributes.chatusers.data.map((el) => (
        <div onClick={onClick} id={el.id} key={el.id}>{el.attributes.username}</div>
      ))}
    </>
  );
};

export default CurrentListItem;