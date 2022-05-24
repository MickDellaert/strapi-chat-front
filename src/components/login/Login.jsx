import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";

import { useRef, useState } from "react";

function Login({newUserId, setNewUserId}) {
  const [username, setUsername] = useState("");
  const loginId = useRef();


  // const { data } = useFetch("http://localhost:1337/api/chatusers");

  const getInput = (e) => {
    setUsername(e.target.value);

    console.log(e.target);
  };

  // method using sessionstorage for getting user id
  const createNewUser = async (username) => {
    let newUser = username;
    // setUsername(username)

    await fetch("http://localhost:1337/api/chatusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { username: newUser ,
        channel: { id: "238" }}
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("json " + json.data.id);
        let id = json.data.id;
        sessionStorage.setItem("id", id);

        setNewUserId(json.data.id)

        // setUserid(id);
        // console.log("json2 " + userid);
      });
  };

  // const createNewUser = async (newUser) => {
  //   const response = await fetch("http://localhost:1337/api/chatusers", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ data: {username: newUser } }),
  //   });
  //   const result = await response.json();
  //   console.log(result.data.id);
  //   loginId.current = result.data.id;
  //   console.log(loginId.current);

  //   return result;
  // };

  console.log(loginId.current);

  const postUser = () => {
    let newUser = username;
    createNewUser(newUser);
  };

  return (
    <>
    <form>
      <input value={username} onChange={getInput} />

      <Link to={`/chat/${username}`} state={username}>
        <input    
        type="submit" 
        value="submit"
         onClick={postUser}
        />
      </Link>
      </form>
    </>
  );
}

export default Login;
