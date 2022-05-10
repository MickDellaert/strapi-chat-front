import Input from "./Input";
import Button from "./Button";

const InputContainer = () => {
  return (
    <>
      <div className="input-container absolute bottom-0 grid grid-cols-10 w-full h-1/8 p-4 rounded-br-lg bg-indigo-300">
        <Input />
        <Button />
      </div>
    </>
  );
};

export default InputContainer;
