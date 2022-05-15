import { Link } from "react-router-dom";

import { useState } from "react";

function Login(props) {

  const [username, setUsername] = useState("");


  const getInput = (e) => {
    setUsername(e.target.value);
  };


  async function createNewUser(newUser) {
    const url = `http://localhost:1337/api/chatusers`;
    const body = {
      data: {
        username: newUser,
      },
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  }

  const postUser = () => {
    // e.preventDefault();

    const newUser = username;
    setUsername(newUser);
    console.log(newUser);
    createNewUser(newUser);
  };

  return (
    <>
      <input value={username} onChange={getInput} />

      <Link to={`/chat/${username}`} state={username} >
        <button onClick={postUser}>button</button>
      </Link>
    </>
  );
}

export default Login;
