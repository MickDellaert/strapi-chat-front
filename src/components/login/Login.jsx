import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  // const { data } = useFetch("http://localhost:1337/api/chatusers");

  const getInput = (e) => {
    setUsername(e.target.value);
  };

  // method using sessionstorage for getting user id
  // const createNewUser = async (username) => {
  //   let newUser = username;

  //   await fetch("http://localhost:1337/api/chatusers", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ data: { username: newUser } }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log("json " + json.data.id);
  //       let id = json.data.id;
  //       sessionStorage.setItem("id", id);

  //       // setUserid(id);
  //       console.log("json2 " + userid);
  //     });
  // };

  const createNewUser = async (newUser) => {
    const response = await fetch("http://localhost:1337/api/chatusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { username: newUser } }),
    });
    const result = await response.json();
    return result;
  };

  const postUser = () => {
    let newUser = username;
    createNewUser(newUser);
  };

  return (
    <>
      <input value={username} onChange={getInput} />

      <Link to={`/chat/${username}`} state={username}>
        <button onClick={postUser}>button</button>
      </Link>
    </>
  );
}

export default Login;
