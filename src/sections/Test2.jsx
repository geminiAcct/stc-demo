import React, { useState } from "react";

function Test2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // Hardcoded API key
    const apiKey = "12345-ABCDE";

    const response = await fetch(`https://api.example.com/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Test2;
