import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for password visibility toggle

// Styled components for a modern and responsive layout
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  margin: 0; /* No margin to prevent scroll */
  background: linear-gradient(135deg, #3b3f47, #1e2125); /* Dark gradient background */
`;

const LoginWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 400px; /* Max width for the form */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;
  box-sizing: border-box; /* Ensures padding is included in width calculation */
`;


const InputField = styled.input`
  width: 95%;
  padding: 0.85rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: border 0.3s ease-in-out;
  margin-bottom: 1.5rem;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const PasswordInput = styled.input`
  width: 95%;
  padding: 0.85rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
 
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  width: 80%;
  padding: 0.85rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2e8b57;
  }
`;

const RegisterLink = styled.div`
  font-size: 0.875rem;
  color: #7f8c8d;

  a {
    color: green;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }
`;

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate(); // Hook to programmatically navigate to the main page after login

  // Handle form submission (always navigate to the next page)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success
    console.log('User logged in'); // Here you can replace with real authentication logic if needed.

    // After login is successful, navigate to the next page
    navigate('/main'); // Redirect to the main page (replace '/main' with your actual route)
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <form onSubmit={handleSubmit}>
          <h3>WELCOME BACK!!</h3>
          <h2>Login Your WhatsAppCrm</h2>

          <div>
            <label htmlFor="email">Email</label>
            <InputField type="email" placeholder="Enter Email" id="email" required />
          </div>

          {/* Password input with eye icon for visibility toggle */}
          <div>
            <label htmlFor="password">Password</label>
            <PasswordWrapper>
              <PasswordInput
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter Password"
                id="password"
                required
              />
              <EyeIcon onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </EyeIcon>
            </PasswordWrapper>
          </div>

          <div>
            <SubmitButton type="submit">Login</SubmitButton>
          </div>

          {/* Register Link */}
          <RegisterLink>
            <p>Don't have an account? <Link to="/register">Register Now</Link></p>
          </RegisterLink>
        </form>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
