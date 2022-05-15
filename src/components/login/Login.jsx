import useFetch from "../../hooks/useFetch";

import { Link } from "react-router-dom";

import { useState } from "react";

function Login() {

  const [username, setUsername] = useState("");

    const { data } = useFetch("http://localhost:1337/api/chatusers");



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
    }).then;
    let userdata = response.json();
    console.log(userdata)
  }

  const postUser = () => {
    // e.preventDefault();

    const newUser = username;
    setUsername(newUser);
    console.log(newUser);
    createNewUser(newUser);
  };


  console.log("userdata" + data)


  return (
    <>
      <input value={username} onChange={getInput} />

      <Link to={`/chat/${24}`} state={username} >
        <button onClick={postUser}>button</button>
      </Link>
    </>
  );
}

export default Login;
