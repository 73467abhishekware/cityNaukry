
import React, { useState } from "react";
import { FaUserAlt, FaBriefcase, FaRegBell, FaCog, FaPowerOff } from 'react-icons/fa'; // Font Awesome icons
import Logout from "./Logout";

const Sidebar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEX///8AAADv7++urq49PT1BQUHy8vK1tbXT09OXl5f5+fn19fWbm5vZ2dnn5+dFRUXCwsIoKCg4ODhRUVHKysqhoaF1dXUcHBwuLi6RkZFjY2O8vLxXV1cVFRWDg4NqamqMV7lRAAADfElEQVR4nO2biZKqMBBFjRsKgguCgtv//+UjzlPBcQnd94pVk/MBM6cEbjqdTq+HJIqL7RH6F9X0s9QYM+tao0YSlMZyiLo2uRIfR+aHVdcq/4kHK3Ml7drmzDrfmhqbrn2qH2nWMLJ0/fXFp+W9UkWZdGc0DvYPjM6cBnE3SsXwmZJlOT+ux+FnleLjK6Prc8wmn1NKThsXp4pNmo0/ohQ5/Uo3jh+I+N3qvUeTVcB2ytoqWchrdC5xqjKC6VTInKgxP5U6GVOwnGK5kzGkyIqeLisupJxkWGicjNlRpFoHVJMhw0n1RlkYlYMoNutkBClhbt7I8U66b8+yx39//dH7f/uaYR8v9bLSdGHlpbwUWOorX/Q/I/WVOeWl/rbUyEt5KS8lk5p7qU9Jzb2Ul2pKHbRSB7zUQOtkDLpLHKk7CZYcu3EH/E6WAVRK3BZugm0SzzBS2C7/BCOFbREnGCnsmelYHZ2WEficDRMJ4LNSyJs+xTr1AoQUOtJj9dJXLX7oTnr4aAKhJUv48bt631B9fGinXsvj7EfgTyJ3ein8ATcg0/EzMPpMJ5TD+vhER6dFXShQTpGV7WHKyaj2+XHGOJTntZw5r0S10iw5Q3HhSSNVkubOVFsa1rSLqqbCbvlu9DVShDj/QXHgvmc5aZ4fbwQuSqVOKXGIUdznYL3mZ4RFMb4QrhO7jp02OJAnY0UPkPrwLIJ3fc52kmwgOINvdQSTeQu6lOCXos8OS+pP/vUewU6ZMPd2R9leqqRLCfY0nH1MnfZOxvxJqUgixb7lIGq+sK8ciUat2ZEu6qdzgyoWbh32xLtZ8r41vFt9Q9EMogWoqm3GqohVvQTSHZWx7jYIZ+enbHpynp/ifpGF0Rzu9X7do23HluGkvMvDWGxiwHltjk3QJAecQVa5nuPqhQQ0v2EpMFr9AvIrXTgU+kZjmAHOaZssM133ehyIWj/v2ASKeA8gcxuPmAu38uFamZav2a4FD3Ei2Aq3o2y7Gkrr3na0qpITyLiNC85p+jklZ62wgAfTa5bFuze+ryyaZExfhvwAMNEiYfS0qR1y4tuNTfDwIS7Ep0EY0t9F4Jq2orgzXzeUYnp8u1HW0rSTT+4x1z0PaLIUwyVLQSPUGAZeyhEv5YqXcsVLueKlXPFSrny1lLqbieRSFIcdbhju2Vz3D99SDV/q4X9BhkFLIp7EPgAAAABJRU5ErkJggg=="
              alt="User Avatar"
            />
          </div>
          <div className="sidebar-user-name-data">
            <button onClick={toggleDropdown} className="user-name dropdown-toggle">Zubayer Hasan</button>
            <ul className="sidebar-dropdown-menu">
              <li>
                <a href="/companyprofile">Profile</a>
              </li>
              <li>
                <a href="/dashboard/employer-dashboard-settings">Account Settings</a>
              </li>
              <li>
                <a href="#!">Notification</a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/dashboard" className="sidebar-nav-item">
                <FaBriefcase />  Dashboard
              </a>
            </li>
            <li>
              <a href="/jobseekerprofile" className="sidebar-nav-item">
                <FaUserAlt />  My Profile
              </a>
            </li>
            <li>
              <a href="/joblist" className="sidebar-nav-item">
                <FaBriefcase />  My Jobs
              </a>
            </li>
            <li>
              <a href="/scheduledinterview" className="sidebar-nav-item">
                <FaBriefcase /> myschedule
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

export default Sidebar;
