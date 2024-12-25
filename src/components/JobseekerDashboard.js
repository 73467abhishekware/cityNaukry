
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaBriefcase, FaBookmark, FaPaperPlane, FaRegSave, FaSearch, FaBell } from 'react-icons/fa'; // React icons
// import PostedJobs from "./PostedJobs";

// const JobseekerDashboard = () => {
//   return (
//     <div className="main-container">
//       <div className="dashboard-container">
//         <style>
//           {`
//           .body, h2, h4, h6, p, span {
//               font-family: 'Roboto', sans-serif;
//             }

//             .dashboard-header {
//               background-color: #f8f9fa;
//               padding: 10px 20px;
//               display: flex;
//               justify-content: space-between;
//               align-items: center;
//               border-bottom: 1px solid #ddd;
//             }
//             .search-form {
//               display: flex;
//               align-items: center;
//               margin-right: auto;
//             }
//             .search-form input {
//               border: 1px solid #ddd;
//               border-radius: 5px;
//               padding: 5px 10px;
//               margin-right: 5px;
//             }
//             .profile-notification {
//               position: relative;
//             }
//             .noti-btn {
//               background: none;
//               border: none;
//               position: relative;
//             }
//             .noti-btn .badge-pill {
//               position: absolute;
//               top: -5px;
//               right: -5px;
//               background-color: red;
//               width: 10px;
//               height: 10px;
//               border-radius: 50%;
//             }
//             .job-post-btn {
//               background-color: #007bff;
//               color: white;
//               border: none;
//               border-radius: 5px;
//               padding: 5px 10px;
//               text-decoration: none;
//             }
//             .main-title {
//               font-size: 24px;
//               font-weight: bold;
//               margin: 20px 0;
//             }
//             .dash-card-one {
//               padding: 15px;
//               border: 1px solid #ddd;
//               border-radius: 50px;
//               text-align: center;
//               transition: transform 0.3s ease;
//             }
//             .dash-card-one:hover {
//               transform: translateY(-5px);
//               box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//               background-color: rgb(210 243 76)
//             }
//             .dash-card-one .icon {
//               width: 50px;
//               height: 50px;
//               background-color: #f8f9fa;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               margin-bottom: 10px;
//               border-radius: 50%;
//             }
//             .left-div,
//             .right-div {
//               padding: 20px;
//               border: 1px solid #ddd;
//               border-radius: 10px;
//               margin-top: 20px;
//               background-color: #f9f9f9;
//               min-width: 300px;
//             }
//             .left-div {
//               margin-right: 10px;
//             }
//             .right-div {
//               margin-left: 10px;
//             }
//             .dashboard-container {
//               display: flex;
//               flex-direction: column;
//               height: 15vh;
//             }
//           `}
//         </style>

//         <header className="dashboard-header">
//           <div className="d-flex align-items-center justify-content-end">
//             <form action="#" className="search-form">
//               <input type="text" placeholder="Search here.." />
//               <button>
//                 <FaSearch size={20} />
//               </button>
//             </form>
//             <div className="profile-notification ms-2 ms-md-5 me-4">
//               <button
//                 className="noti-btn dropdown-toggle"
//                 type="button"
//                 id="notification-dropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <FaBell size={20} />
//                 <div className="badge-pill"></div>
//               </button>
//               <ul
//                 className="dropdown-menu"
//                 aria-labelledby="notification-dropdown"
//               >
//                 <li>
//                   <h4>Notification</h4>
//                   <ul className="style-none notify-list">
//                     <li className="d-flex align-items-center unread">
//                       <FaPaperPlane size={20} />
//                       <div className="flex-fill ps-2">
//                         <h6>You have 3 new mails</h6>
//                         <span className="time">3 hours ago</span>
//                       </div>
//                     </li>
//                     <li className="d-flex align-items-center">
//                       <FaBookmark size={20} />
//                       <div className="flex-fill ps-2">
//                         <h6>Your job post has been approved</h6>
//                         <span className="time">1 day ago</span>
//                       </div>
//                     </li>
//                     <li className="d-flex align-items-center unread">
//                       <FaRegSave size={20} />
//                       <div className="flex-fill ps-2">
//                         <h6>Your meeting is cancelled</h6>
//                         <span className="time">3 days ago</span>
//                       </div>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <a href="/employer-dashboard-submit-job" className="job-post-btn">
//                 Post a Job
//               </a>
//             </div>
//           </div>
//         </header>

//         <h2 className="main-title">Dashboard</h2>

//         <div className="row">
//           {[{ label: "posted job", icon: <FaBriefcase /> },
//             { label: "shortlist", icon: <FaBookmark /> },
//             { label: "application", icon: <FaPaperPlane /> },
//             { label: "saved candidate", icon: <FaRegSave /> }]
//             .map((item, index) => (
//               <div className="col-lg-3 col-6" key={index}>
//                 <div className="dash-card-one">
//                   <div className="icon">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <div className="value fw-500">{`0${index + 1}`}</div>
//                     <span>{item.label}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}

//           <div className="d-flex">
//             <div className="left-div flex-grow-1">
//               <h4>Left Column</h4>
//               <p>Content for the left column goes here.</p>
//             </div>
//             <div className="right-div flex-grow-1">
//               <div>
//                 <PostedJobs />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobseekerDashboard;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBriefcase, FaBookmark, FaPaperPlane, FaRegSave, FaSearch, FaBell } from 'react-icons/fa'; // React icons

const JobseekerDashboard = () => {
  return (
    <div className="main-container">
      <div className="dashboard-container">
        <style>
          {`
          .body, h2, h4, h6, p, span {
              font-family: 'Roboto', sans-serif;
            }

            .dashboard-header {
              background-color: #f8f9fa;
              padding: 10px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid #ddd;
            }
            .search-form {
              display: flex;
              align-items: center;
              margin-right: auto;
            }
            .search-form input {
              border: 1px solid #ddd;
              border-radius: 5px;
              padding: 5px 10px;
              margin-right: 5px;
            }
            .profile-notification {
              position: relative;
            }
            .noti-btn {
              background: none;
              border: none;
              position: relative;
            }
            .noti-btn .badge-pill {
              position: absolute;
              top: -5px;
              right: -5px;
              background-color: red;
              width: 10px;
              height: 10px;
              border-radius: 50%;
            }
            .job-post-btn {
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 5px;
              padding: 20px 15px;
              text-decoration: none;
              margin-left: 20px;
            }
            .main-title {
              font-size: 24px;
              font-weight: bold;
              margin: 20px 0;
            }
            .dash-card-one {
              padding: 15px;
              border: 1px solid #ddd;
              border-radius: 50px;
              text-align: center;
              transition: transform 0.3s ease;
            }
            .dash-card-one:hover {
              transform: translateY(-5px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              background-color: rgb(210 243 76)
            }
            .dash-card-one .icon {
              width: 50px;
              height: 50px;
              background-color: #f8f9fa;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 10px;
              border-radius: 50%;
            }
            .left-div,
            .right-div {
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              margin-top: 20px;
              background-color: #f9f9f9;
              min-width: 300px;
            }
            .left-div {
              margin-right: 10px;
            }
            .right-div {
              margin-left: 10px;
            }
            .dashboard-container {
              display: flex;
              flex-direction: column;
              height: 15vh;
            }
          `}
        </style>

        <header className="dashboard-header">
          <div className="d-flex align-items-center justify-content-start">
            <form action="#" className="search-form">
              <input type="text" placeholder="Search here.." />
              <button>
                <FaSearch size={20} />
              </button>
            </form>
          </div>

          {/* Right-aligned elements */}
          <div className="d-flex align-items-center ms-auto">
            <div>
              <a href="/joblist" className="job-post-btn">
                Apply for a job
              </a>
            </div>
          </div>
        </header>

        <h2 className="main-title">Dashboard</h2>

        <div className="row">
          {[{ label: "recomonded job", icon: <FaBriefcase /> },
            { label: "shortlist", icon: <FaBookmark /> },
            { label: "application", icon: <FaPaperPlane /> },
            { label: "saved job", icon: <FaRegSave /> }]
            .map((item, index) => (
              <div className="col-lg-3 col-6" key={index}>
                <div className="dash-card-one">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <div>
                    <div className="value fw-500">{`0${index + 1}`}</div>
                    <span>{item.label}</span>
                  </div>
                </div>
              </div>
            ))}

          <div className="d-flex">
            <div className="left-div flex-grow-1">
              <h4>Left Column</h4>
              <p>Content for the left column goes here.</p>
            </div>
            <div className="right-div flex-grow-1">
              <div>
                jobss
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobseekerDashboard;
