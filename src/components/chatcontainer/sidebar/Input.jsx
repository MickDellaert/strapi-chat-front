const Input = ({getInput, channel}) => {
  return (
    <input
      className="col-span-8"
      type="text"
      onChange={getInput}
      value={channel}
    />
  );
};

export default Input;