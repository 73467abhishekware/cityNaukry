// import React from 'react'
// import { FaBriefcase, FaBookmark, FaPaperPlane, FaRegSave, FaSearch, FaBell } from 'react-icons/fa';
// import PostedJobs from './PostedJobs';
// import InterviewsByCompany from './InterviewsByCompany';
// function Companydash() {
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
//               padding: 20px 15px;
//               text-decoration: none;
//               margin-left: 20px;
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
//               margin-bottom: 30px;
//               margin-top:5px;
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
//               height: 440px;
//             }
//             .left-div {
//               margin-right: 10px;
//             }
//             .right-div {
//               margin-left: 10px;
//               max-height: 500px; /* Adjust this value as needed */
//               overflow-y: auto;
//             }
//             .dashboard-container {
//               display: flex;
//               flex-direction: column;
//               height: 15vh;
//             }
//           `}
//         </style>

//         <header className="dashboard-header">
//           <div className="d-flex align-items-center justify-content-start">
//             <form action="#" className="search-form">
//               <input type="text" placeholder="Search here.." />
//               <button>
//                 <FaSearch size={20} />
//               </button>
//             </form>
//           </div>

//           {/* Right-aligned elements */}
//           <div className="d-flex align-items-center ms-auto">
//             <div>
//               <a href="/jobpost" className="job-post-btn">
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
//               <InterviewsByCompany/>
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

// export default Companydash;



import React from 'react';
import { FaBriefcase, FaBookmark, FaPaperPlane, FaRegSave, FaSearch } from 'react-icons/fa';
import PostedJobs from './PostedJobs';
import InterviewsByCompany from './InterviewsByCompany';

function Companydash() {
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
              background-color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 150px; /* Set fixed height to keep cards uniform */
              margin-bottom: 20px;
              margin-top:20px;
            }
            .dash-card-one:hover {
              transform: translateY(-5px);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .dash-card-one .icon {
              width: 70px;
              height: 70px;
              background-color: #c3b68e;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              border-radius: 50%;
              font-size: 2.5rem;
              transition: background-color 0.3s ease;
            }
            .dash-card-one:hover .icon {
              background-color: #f39c12; /* Change to a different color on hover */
            }
            .left-div,
            .right-div {
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              margin-top: 20px;
              background-color: #f9f9f9;
              min-width: 300px;
              height: 440px;
            }
            .left-div {
              margin-right: 10px;
            }
            .right-div {
              margin-left: 10px;
              max-height: 500px;
              overflow-y: auto;
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
              <a href="/jobpost" className="job-post-btn">
                Post a Job
              </a>
            </div>
          </div>
        </header>

        <div className="row">
          {[{ label: "posted job", icon: <FaBriefcase /> },
            { label: "shortlist", icon: <FaBookmark /> },
            { label: "application", icon: <FaPaperPlane /> },
            { label: "saved candidate", icon: <FaRegSave /> }]
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
              <InterviewsByCompany />
            </div>
            <div className="right-div flex-grow-1">
              <div>
                <PostedJobs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companydash;
