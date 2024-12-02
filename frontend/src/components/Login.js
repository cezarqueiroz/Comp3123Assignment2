import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log('email', email);
        console.log('password', password);
      const response = await axios.post('http://localhost:3001/user/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', email);
      navigate('/employees');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger mt-2">{error}</div>}
          <button type="submit" className="btn btn-primary mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
