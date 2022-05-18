const User = ({currentUserName, userId}) => {
  return (
    <>
    
      <div className="text-lg underline">Current User</div>
      <p>
        {currentUserName}
        {userId}
      </p>
    </>
  );
};

export default User;
