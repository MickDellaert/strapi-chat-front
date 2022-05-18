const User = ({currentUserName, userId}) => {
  return (
    <>
    
      <div className="text-lg underline">users</div>
      <p>
        {currentUserName}
        {userId}
      </p>
    </>
  );
};

export default User;
