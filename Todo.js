import React from "react";

function Todo() {
  return (
    <div className="form-container">
      <h2>Todo Sign up</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" />

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" placeholder="Enter your email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" />

      <button>Sign Up</button>
    </div>
  );
}

export default Todo;
