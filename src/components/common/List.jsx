const List = ({ children, title }) => {
  return (
    <>
      <h4 className="text-lg underline">{title}</h4>
      <div className="channels">{children}</div>
    </>
  );
};

export default List;
