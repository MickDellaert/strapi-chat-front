const ListItem = ({ object, detail }) => {
  return (
    <>
      {object.data.map((el) => (
        <div key={el.id}>{el.attributes[detail]}</div>
      ))}
    </>
  );
};

export default ListItem;
