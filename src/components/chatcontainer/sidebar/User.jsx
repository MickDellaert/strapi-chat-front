const User = ({ currentUserName, currentChannel, userId }) => {
  return (
    <>
      <div>
        <div className="text-lg underline">Current User</div>
        <p>{currentUserName}</p>
        <p>{userId}</p>

        <p>{currentChannel}</p>
      </div>
    </>
  );
};

export default User;
