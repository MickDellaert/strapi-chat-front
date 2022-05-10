const Input = ({getInput, input}) => {
  return (
    <input
      className="col-span-8"
      type="text"
      onChange={getInput}
      value={input}
    />
  );
};

export default Input;
