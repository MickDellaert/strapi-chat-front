const Input = ({ getInput, value, className }) => {
  return (
    <input
      className={className}
      type="text"
      onChange={getInput}
      value={value}
    />
  );
};

export default Input;
