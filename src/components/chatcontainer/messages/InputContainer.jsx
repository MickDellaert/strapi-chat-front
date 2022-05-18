import Input from "../../common/Input";
import Button from "../../common/Button";

const InputContainer = ({ getInput, handleClick }) => {
  return (
    <>
      <div className="input-container absolute bottom-0 grid grid-cols-10 w-full h-20 p-4 rounded-br-lg bg-zinc-200">
        <Input getInput={getInput} className={`col-span-8`}/>
        <Button handleClick={handleClick} className={`p-2 col-span-2 text-white bg-fuchsia-900`} buttonName={`new message`}/>
      </div>
    </>
  );
};

export default InputContainer;
