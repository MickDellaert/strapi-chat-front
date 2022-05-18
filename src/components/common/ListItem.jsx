const ListItem = ({ object, detail, onClick }) => {
  return (
    <>
      {object.data.map((el) => (
        <div onClick={onClick} id={el.id} key={el.id}>{el.attributes[detail]}{el.id}</div>
      ))}
    </>
  );
};

export default ListItem;
