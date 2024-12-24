import React, { useEffect, useState } from 'react'
import { FaBriefcase, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';
import DeleteCompany from './DeleteCompany';

function DashAsideCompany() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const rawCompanyLogoPath =  sessionStorage.getItem("companyLogoPath")
  const companyName=sessionStorage.getItem("companyName")
  console.log("companyName",companyName)

  const companyLogoPath = rawCompanyLogoPath
    ? rawCompanyLogoPath.replace(/&quot;/g, "").replace(/"/g, "").replace(/^\//, "") // Remove leading slash
    : "";
      
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  


  return (
    <>
      <style>
        {`
          .sidebar {
            left: 0;
            top: 0;
            bottom: 0;
            min-height: 100vh;
            overflow-y: auto;
            width: 260px;
            linear-gradient(145deg, #95d5b7, #f0f0f0)
            box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
            padding: 30px 20px;
            box-sizing: border-box;
            font-family: "Gordita", sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #555;
            transition: all 0.3s ease-in-out;
          }

          .sidebar-logo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
          }

          .sidebar-logo img {
            max-width: 120px;
            display: block;
          }

          .close-btn {
            background: none;
            border: none;
            font-size: 18px;
            color: #333;
            cursor: pointer;
          }

          .close-btn:hover {
            color: #d9534f;
          }

          .sidebar-user-data {
            text-align: center;
            margin-bottom: 30px;
          }

          .sidebar-user-avatar {
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin: 0 auto;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .sidebar-user-avatar img {
            width: 100%;
            height: auto;
          }

          .sidebar-user-name-data {
            margin-top: 15px;
          }

          .sidebar-user-name-data button {
            background: none;
            border: none;
            font-size: 18px;
            font-weight: bold;
            color: #333;
            cursor: pointer;
          }

          .sidebar-user-name-data button:hover {
            color: #0d6efd;
          }

          .sidebar-dropdown-menu {
            list-style-type: none;
            padding: 0;
            margin: 10px 0;
            display: ${dropdownVisible ? "block" : "none"};
          }

          .sidebar-dropdown-menu li {
            padding: 5px 0;
          }

          .sidebar-dropdown-menu li a {
            text-decoration: none;
            font-size: 14px;
            color: #555;
          }

          .sidebar-dropdown-menu li a:hover {
            color: #0d6efd;
          }

          .sidebar-nav {
            margin-top: 20px;
          }

          .sidebar-nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .sidebar-nav-item {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            margin-bottom: 10px;
            text-decoration: none;
            color: #555;
            border-radius: 8px;
            transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
          }

          .sidebar-nav-item i {
            margin-right: 10px;
            font-size: 20px;
            color: #555;
          }

          .sidebar-nav-item:hover {
            background: #e9f5ff;
            color: #0d6efd;
            transform: translateX(5px);
          }

          .sidebar-progress-container {
            margin-top: 30px;
          }

          .sidebar-progress-value {
            font-weight: 500;
            font-size: 14px;
          }

          .sidebar-progress-line {
            position: relative;
            background: #244034;
            height: 8px;
            border-radius: 4px;
            overflow: hidden;
            margin: 10px 0;
          }

          .sidebar-progress-line .inner-line {
            width: 87%;
            background: rgb(210 243 76);
            height: 100%;
            transition: width 0.4s ease-in-out;
          }

          .sidebar-progress-container p {
            font-size: 14px;
            color: #777;
            text-align: center;
          }

          .sidebar-logout-btn {
            display: flex;
            align-items: center;
            margin-top: 30px;
            padding: 12px 15px;
            text-decoration: none;
            color: #555;
            border-radius: 8px;
            transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
          }

          .sidebar-logout-btn i {
            margin-right: 10px;
            font-size: 20px;
            color: #555;
          }

          .sidebar-logout-btn:hover {
            background: #ffe9e9;
            color: #d9534f;
            transform: translateX(5px);
          }
        `}
      </style>
      <aside className="sidebar">
        <div className="sidebar-user-data">
          <div className="sidebar-user-avatar">
            <img
              src= {` http://localhost:8086/${companyLogoPath}`}
              alt="User Avatar"
            />
          </div>
          <div className="sidebar-user-name-data">
            <button onClick={toggleDropdown} className="user-name dropdown-toggle">{companyName}</button>
            <ul className="sidebar-dropdown-menu">
              <li>
                <a href="/updatedjobpost">Update Profile</a>
              </li>
              <li>
                <a href="#!"><DeleteCompany /></a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/companyprofile" className="sidebar-nav-item">
                <FaUserAlt />  My Profile
              </a>
            </li>
            <li>
              <a href="/postedjobs" className="sidebar-nav-item">
                <FaBriefcase />  My Jobs
              </a>
            </li>
            <li>
              <a href="/candidatecard" className="sidebar-nav-item">
                <FaBriefcase /> candidates
              </a>
            </li>
            <li>
                <a href="/companyinterview" className="sidebar-nav-item">
                  <FaBriefcase />  My Interview
                 </a>
             </li>
          </ul>
        </nav>
        <div className="sidebar-progress-container">
          <div className="sidebar-progress-value">87%</div>
          <div className="sidebar-progress-line">
            <div className="inner-line"></div>
          </div>
          <p>Profile Complete</p>
        </div>
        <a href="/signin" className="sidebar-logout-btn">
          <Logout/>
        </a>
      </aside>
    </>
  );
};
export default DashAsideCompany
