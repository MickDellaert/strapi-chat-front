// import Input from "../../common/Input";
// import Button from "../../common/Button";
// import { Children } from "react";

const InputContainer = ({ children, inputContainerClass }) => {
  return (
    <>
      <div className={inputContainerClass}>{children}</div>
    </>
  );
};

export default InputContainer;
