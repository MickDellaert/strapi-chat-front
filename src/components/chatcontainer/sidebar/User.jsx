const User = ({ nowUser, currentUserName, currentChannel, userId }) => {
  return (
    <>
      <div>
        <div className="text-lg underline">Current User</div>
        <p>{nowUser}</p>
        <p>{userId}</p>

        <p>{currentChannel}</p>
      </div>
    </>
  );
};

export default User;
