import Channels from "./Channels";
import User from "./User";

const SideBar = ({currentUserName, userId}) => {
  return (
    <>
      <div className="sidebar col-span-2 p-4 text-white rounded-bl-lg bg-fuchsia-800">
        <Channels />
        <User currentUserName={currentUserName} userId={userId}/>
      </div>
    </>
  );
};

export default SideBar;
