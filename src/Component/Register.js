import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/home', { state: { username: username } });
  };

  return (
    <section className="register-section">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
        alt="Register illustration"
        className="background-image"
      />
      <div className="register-container">
        <p className="register-title">Enter Your Name</p>
        <form>
          <div className="form-group" >
            <input
              type="text"
              className="form-control my-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg register-button"
            onClick={handleRegister}
          >
            Enter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
