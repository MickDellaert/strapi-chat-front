import Input from "./Input";
import Button from "./Button";

const InputContainer = () => {
  return (
    <>
      <div className="input-container absolute bottom-0 w-full h-1/8 p-4">
        <Input />
        <Button />
      </div>
    </>
  );
};

export default InputContainer;
