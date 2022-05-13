const Input = ({getInput, message}) => {
  return (
    <input
      className="col-span-8"
      type="text"
      onChange={getInput}
      value={message}
    />
  );
};

export default Input;
