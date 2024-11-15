import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag } from 'react-icons/fa'; 
import { NavLink, Outlet, useLocation } from 'react-router-dom'; // Outlet and useLocation are used for nested routes
import styled from 'styled-components';

// Styled components for layout
const SidebarContainer = styled.div`
  display: flex;
  height: 100vh;  /* Full viewport height */
  overflow: hidden; /* Prevent scrolling */
`;

const Sidebar = styled.div`
  background-color: #34495e;
  color: white;
  width: ${(props) => (props.isOpen ? '250px' : '50px')};
  transition: width 0.3s ease-in-out;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto; /* Allow scrolling if the sidebar content overflows */
  z-index: 1;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.h1`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  font-size: 24px;
  font-weight: bold;
`;

const BarsIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  text-decoration: none;
  color: white;
  font-size: 1.1rem;

  &.active, &:hover {
    background-color: #2980b9;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
`;

const LinkText = styled.div`
  display: ${(props) => (props.isOpen ? 'inline-block' : 'none')};
`;

const MainContent = styled.main`
  margin-left: ${(props) => (props.isOpen ? '250px' : '50px')};
  padding: 20px;
  flex-grow: 1;
  transition: margin-left 0.3s ease-in-out;
  width: 100%;
  background-color: #f4f6f8;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden; /* Prevent scrolling inside the content area */
`;

const MessageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const MessageInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: none;
  background-color: #f4f6f8;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const SendButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const menuItems = [
  { path: "profile", name: "Profile", icon: <FaUserAlt /> },
  { path: "message", name: "Message", icon: <FaCommentAlt /> },
  { path: "dashboard", name: "Dashboard", icon: <FaTh /> },
  { path: "whatsapp", name: "Whatsapp", icon: <FaShoppingBag /> },
  { path: "about", name: "About", icon: <FaRegChartBar /> }
];

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [message, setMessage] = useState("");
  const location = useLocation(); // Use location to check the current route

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    // For now, we'll log the message in the console
    console.log("Message Sent: ", message);
    setMessage(""); // Clear the input after sending
  };

  const isWelcomePage = location.pathname === "/"; // Check if the current page is the welcome page

  return (
    <SidebarContainer>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarHeader>
          <Logo isOpen={isSidebarOpen}>Logo</Logo>
          <BarsIcon onClick={toggleSidebar}>
            <FaBars />
          </BarsIcon>
        </SidebarHeader>

        {/* Sidebar Menu */}
        {menuItems.map((item, index) => (
          <SidebarLink to={item.path} key={index} activeClassName="active">
            <Icon>{item.icon}</Icon>
            <LinkText isOpen={isSidebarOpen}>{item.name}</LinkText>
          </SidebarLink>
        ))}
      </Sidebar>

      {/* Main Content */}
      <MainContent isOpen={isSidebarOpen}>
        {/* Render Welcome Page content */}
        {isWelcomePage && (
          <MessageBoxContainer>
            <h2>Welcome to the Message Box</h2>
            <MessageInput
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message here..."
            />
            <SendButton onClick={handleSendMessage}>Send Message</SendButton>
          </MessageBoxContainer>
        )}

        {/* Other content rendered by nested routes */}
        <Outlet /> {/* Outlet for nested routes */}
      </MainContent>
    </SidebarContainer>
  );
};

export default MainPage;

