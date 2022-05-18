const Input = ({getInput, value}) => {
  return (
    <input
      className="col-span-8"
      type="text"
      onChange={getInput}
      value={value}
    />
  );
};

export default Input;