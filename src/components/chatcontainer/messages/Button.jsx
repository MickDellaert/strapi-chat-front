
const Button = ({ handleClick }) => {
  return (
    <button
      className="p-2 col-span-2 text-white bg-fuchsia-900"
      onClick={handleClick}
    >
      button
    </button>
  );
};

export default Button;
