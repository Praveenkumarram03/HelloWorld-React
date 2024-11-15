import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styled from 'styled-components';

// Styled components for the responsive form layout
const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 100vh; /* Ensures full height of the viewport */
  background: linear-gradient(135deg, #3b3f47, #1e2125);
  margin: 0; /* Prevents any page scroll */
`;

const RegisterWrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 450px; /* Limited width for the form */
  padding: 2rem; /* Added padding for internal spacing */
  border-radius: 8px; /* Rounded corners for a softer design */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem; /* Reduced padding on smaller screens */
    width: 90%; /* Full width on smaller screens */
  }
`;

const FormTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;
`;

const InputField = styled.input`
  width: 90%;
  padding: 0.9rem;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #3498db;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 0.8rem; /* Slightly smaller padding on mobile */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  margin-top: 1.2rem; /* Added margin-top for spacing between the button and input fields */

  &:hover {
    background-color: #28a745;
  }

  @media (max-width: 768px) {
    padding: 0.9rem; /* Slightly smaller padding on mobile */
  }
`;

const LoginLink = styled.div`
  
  font-size: 0.875rem;
  color: #7f8c8d;

  a {
    color: green;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #2980b9;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Slightly smaller font size on mobile */
  }
`;

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(''); // Error state to handle form validation errors
  const navigate = useNavigate(); // Hook to programmatically navigate after registration

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.mobile || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear any previous errors
    setError('');

    // Here you can add your actual form submission logic, such as sending data to a server.
    console.log('Form submitted:', formData);

    // Navigate to MainPage after successful registration
    navigate('/main'); // Redirect to the MainPage after successful registration
  };

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <form onSubmit={handleSubmit}>
          <FormTitle>Register</FormTitle>

          {/* Display error message if any */}
          {error && <p style={{ color: 'red', fontSize: '0.875rem', marginBottom: '1rem' }}>{error}</p>}

          {/* Name Input */}
          <div>
            <InputField
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Mobile Number Input */}
          <div>
            <InputField
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div>
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div>
            <InputField
              type="password"
              id="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <InputField
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Register Button */}
          <div>
            <SubmitButton type="submit">Register</SubmitButton>
          </div>

          {/* Login Link */}
          <LoginLink>
            <p>Already have an account? <Link to="/login">LOGIN NOW</Link></p>
          </LoginLink>
        </form>
      </RegisterWrapper>
    </RegisterContainer>
  );
}

export default Register;






