// Login.jsx
import React from 'react';

function Login() {
  const handleLinkedInLogin = () => {
    window.location.href = 'http://localhost:5000/auth/linkedin';
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLinkedInLogin}>Login with LinkedIn</button>
    </div>
  );
}

export default Login;
