import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = (response) => {
    console.log(response); // Handle Google login success
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add validation logic for email and password
    if (email && password) {
      console.log('Logged in');
      // Perform login logic here (e.g., API call)
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="my-3">
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div className="my-2">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
