import Channels from "./Channels";
import User from "./User";

const SideBar = () => {
  return (
    <>
      <div className="sidebar col-span-2 p-4 text-white rounded-bl-lg bg-fuchsia-800">
        <Channels />
        <User />
      </div>
    </>
  );
};

export default SideBar;
