import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");


  const getInput = (e) => {
    setUsername(e.target.value);
  };

  const postUser = () => {
    // e.preventDefault();

    const newUser = username;

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

    createNewUser(newUser);
  };



  return (
    <>
      <input value={username} onChange={getInput} />

      <button onClick={postUser}>button</button>
    </>
  );
}

export default Login;
