
const Button = ({ handleClick, className, buttonName }) => {
  return (
    <button
      className={className}
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};

export default Button;
