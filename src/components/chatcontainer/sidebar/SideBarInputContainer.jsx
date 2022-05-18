import Input from "./Input";
import Button from "../messages/Button";

const SideBarInputContainer = ({ getInput, handleClick }) => {
  return (
    <>
      <div className="input-container absolute bottom-0 text-black grid grid-cols-10 w-full h-20 p-4 rounded-br-lg bg-zinc-200">
        <Input getInput={getInput} />
        <Button handleClick={handleClick} />
      </div>
    </>
  );
};

export default SideBarInputContainer;