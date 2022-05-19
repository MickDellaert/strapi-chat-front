const User = ({ currentUserName, userId }) => {
  return (
    <>
      <div>
        <div className="text-lg underline">Current User</div>
        <p>
          {currentUserName}
          {userId}
        </p>
      </div>
    </>
  );
};

export default User;
