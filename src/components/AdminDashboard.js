
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaBriefcase, FaFileAlt } from "react-icons/fa"; // Import additional icons

// const AdminDashboard = () => {
//     return (
//         <div className="admin-dashboard">
//             <div className="sidebar">
//                 <div className="sidebar-header">
//                     <h2>Admin Dashboard</h2>
//                 </div>
//                 <div className="sidebar-menu">
//                     <ul>
//                         <li>
//                             <Link to="/candidatecard" className="sidebar-link">
//                                 <FaUsers className="icon" />
//                                 JobSeekers
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/allcompanies" className="sidebar-link">
//                                 <FaChartBar className="icon" />
//                                 Companies
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/admin-settings" className="sidebar-link">
//                                 <FaCog className="icon" />
//                                 Interviews
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/adminlogout" className="sidebar-link">
//                                 <FaSignOutAlt className="icon" />
//                                 Logout
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="main-content">
//                 <div className="content-header">
//                     <h1>Welcome Back, Admin!</h1>
//                 </div>
//                 <div className="content-body">
//                     <div className="stats">
//                         <div className="stat-card">
//                             <FaUsers className="stat-icon" />
//                             <h3>Total Jobseekers</h3>
//                             <p>1,234</p>
//                         </div>
//                         <div className="stat-card">
//                             <FaBriefcase className="stat-icon" />
//                             <h3>Total Companies</h3>
//                             <p>128</p>
//                         </div>
//                         <div className="stat-card">
//                             <FaFileAlt className="stat-icon" />
//                             <h3>Total Applications</h3>
//                             <p>245</p>
//                         </div>
//                     </div>
//                     <div className="charts">
//                         <h2>Analytics Overview</h2>
//                         <div className="chart">
//                             <p>Chart Placeholder (You can integrate chart libraries like Chart.js or D3.js here)</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* CSS styles in the same file */}
//             <style jsx>{`
//                 /* Admin Dashboard Styles */
//                 .admin-dashboard {
//                     display: flex;
//                     font-family: 'Arial', sans-serif;
//                     height: 100vh;
//                 }

//                 /* Sidebar Styles */
//                 .sidebar {
//                     width: 250px;
//                     background-color: #2c3e50;
//                     color: #fff;
//                     height: 100%;
//                     // position: fixed;
//                     top: 0;
//                     left: 0;
//                     padding: 20px;
//                     box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
//                 }

//                 .sidebar-header h2 {
//                     text-align: center;
//                     color: #ecf0f1;
//                     font-size: 24px;
//                     margin-bottom: 30px;
//                 }

//                 .sidebar-menu {
//                     margin-top: 40px;
//                 }

//                 .sidebar-menu ul {
//                     list-style: none;
//                     padding-left: 0;
//                 }

//                 .sidebar-menu ul li {
//                     margin: 20px 0;
//                 }

//                 .sidebar-link {
//                     color: #ecf0f1;
//                     text-decoration: none;
//                     display: flex;
//                     align-items: center;
//                     font-size: 18px;
//                     padding: 10px;
//                     border-radius: 5px;
//                     transition: background-color 0.3s ease;
//                 }

//                 .sidebar-link:hover {
//                     background-color: #3498db;
//                     color: white;
//                 }

//                 .sidebar-link .icon {
//                     margin-right: 10px;
//                     font-size: 20px;
//                 }

//                 /* Main Content Styles */
//                 .main-content {
//                     // margin-left: 250px;
//                     width: calc(100% - 250px);
//                     padding: 30px;
//                     background-color: #ecf0f1;
//                     height: 100vh;
//                     overflow-y: auto;
//                 }

//                 .content-header h1 {
//                     font-size: 36px;
//                     color: #2c3e50;
//                     margin-bottom: 30px;
//                 }

//                 .content-body {
//                     margin-top: 30px;
//                 }

//                 .stats {
//                     display: flex;
//                     gap: 20px;
//                     margin-bottom: 30px;
//                     flex-wrap: wrap;
//                 }

//                 .stat-card {
//                     background-color: #fff;
//                     padding: 20px;
//                     border-radius: 10px;
//                     width: 30%;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                     text-align: center;
//                     margin-bottom: 20px;
//                 }

//                 .stat-card h3 {
//                     font-size: 24px;
//                     margin-bottom: 10px;
//                 }

//                 .stat-card p {
//                     font-size: 30px;
//                     color: #3498db;
//                 }

//                 .stat-icon {
//                     font-size: 40px;
//                     color: #3498db;
//                     margin-bottom: 10px;
//                 }

//                 .charts {
//                     margin-top: 40px;
//                 }

//                 .chart {
//                     background-color: #fff;
//                     padding: 20px;
//                     border-radius: 10px;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                     margin-top: 20px;
//                 }

//                 .chart p {
//                     text-align: center;
//                     font-size: 18px;
//                     color: #7f8c8d;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default AdminDashboard;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaBriefcase, FaFileAlt } from "react-icons/fa";
// import CountUp from "react-countup";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// // Register Chart.js modules
// ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// const AdminDashboard = () => {
//     // States to store dynamic data
//     const [totalJobseekers, setTotalJobseekers] = useState(0);
//     const [totalCompanies, setTotalCompanies] = useState(0);
//     const [totalInterviews, setTotalInterviews] = useState(0);

//     // Fetch statistics from the server
//     useEffect(() => {
//         const fetchStats = async () => {
//             try {
//                 const jobseekersResponse = await fetch("http://localhost:8086/jobSeeker/getAllJobSeekers");
//                 const companiesResponse = await fetch("http://localhost:8086/company/getAllCompanies");
//                 const interviewsResponse = await fetch("http://localhost:8086/jobSeeker/getAllScheduledInterviews");

//                 const jobseekersData = await jobseekersResponse.json();
//                 const companiesData = await companiesResponse.json();
//                 const interviewsData = await interviewsResponse.json();

//                 setTotalJobseekers(jobseekersData.length);
//                 setTotalCompanies(companiesData.length);
//                 setTotalInterviews(interviewsData.length || 0);
//             } catch (error) {
//                 console.error("Failed to fetch statistics:", error);
//             }
//         };

//         fetchStats();
//     }, []);

//     // Data for the Bar Chart
//     const chartData = {
//         labels: ["Jobseekers", "Companies", "Interviews"],
//         datasets: [
//             {
//                 label: "Counts",
//                 data: [totalJobseekers, totalCompanies, totalInterviews],
//                 backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
//                 borderColor: ["#2980b9", "#27ae60", "#c0392b"],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const chartOptions = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: false,
//             },
//             title: {
//                 display: true,
//                 text: "Overview of Counts",
//             },
//         },
//         maintainAspectRatio: false,
//     };

//     return (
//         <div className="admin-dashboard">
//             <div className="sidebar">
//                 <div className="sidebar-header">
//                     <h2>Admin Dashboard</h2>
//                 </div>
//                 <div className="sidebar-menu">
//                     <ul>
//                         <li>
//                             <Link to="/candidatecard" className="sidebar-link">
//                                 <FaUsers className="icon" />
//                                 JobSeekers
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/allcompanies" className="sidebar-link">
//                                 <FaChartBar className="icon" />
//                                 Companies
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/interviews" className="sidebar-link">
//                                 <FaCog className="icon" />
//                                 Interviews
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/adminlogout" className="sidebar-link">
//                                 <FaSignOutAlt className="icon" />
//                                 Logout
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="main-content">
//                 <div className="content-header">
//                     <h1>Welcome Back, Admin!</h1>
//                 </div>
//                 <div className="content-body">
//                     <div className="stats">
//                         <div className="stat-card">
//                             <FaUsers className="stat-icon" />
//                             <h3>Total Jobseekers</h3>
//                             <p>
//                                 <CountUp start={0} end={totalJobseekers} duration={2.5} />
//                             </p>
//                         </div>
//                         <div className="stat-card">
//                             <FaBriefcase className="stat-icon" />
//                             <h3>Total Companies</h3>
//                             <p>
//                                 <CountUp start={0} end={totalCompanies} duration={2.5} />
//                             </p>
//                         </div>
//                         <div className="stat-card">
//                             <FaFileAlt className="stat-icon" />
//                             <h3>Total Interviews</h3>
//                             <p>
//                                 <CountUp start={0} end={totalInterviews} duration={2.5} />
//                             </p>
//                         </div>
//                     </div>
//                     <div className="charts">
//                         <h2>Analytics Overview</h2>
//                         <div className="chart">
//                             <Bar data={chartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* CSS styles in the same file */}
//             <style jsx>{`
//                 .admin-dashboard {
//                     display: flex;
//                     font-family: 'Arial', sans-serif;
//                     height: 100vh;
//                 }

//                 .sidebar {
//                     width: 250px;
//                     background-color: #2c3e50;
//                     color: #fff;
//                     padding: 20px;
//                     box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
//                 }

//                 .sidebar-header h2 {
//                     text-align: center;
//                     color: #ecf0f1;
//                     font-size: 24px;
//                     margin-bottom: 30px;
//                 }

//                 .sidebar-menu ul {
//                     list-style: none;
//                     padding-left: 0;
//                 }

//                 .sidebar-menu ul li {
//                     margin: 20px 0;
//                 }

//                 .sidebar-link {
//                     color: #ecf0f1;
//                     text-decoration: none;
//                     display: flex;
//                     align-items: center;
//                     font-size: 18px;
//                     padding: 10px;
//                     border-radius: 5px;
//                     transition: background-color 0.3s ease;
//                 }

//                 .sidebar-link:hover {
//                     background-color: #3498db;
//                     color: white;
//                 }

//                 .sidebar-link .icon {
//                     margin-right: 10px;
//                     font-size: 20px;
//                 }

//                 .main-content {
//                     width: calc(100% - 250px);
//                     padding: 30px;
//                     background-color: #ecf0f1;
//                     height: 100vh;
//                     overflow-y: auto;
//                 }

//                 .content-header h1 {
//                     font-size: 36px;
//                     color: #2c3e50;
//                     margin-bottom: 30px;
//                 }

//                 .content-body {
//                     margin-top: 30px;
//                 }

//                 .stats {
//                     display: flex;
//                     gap: 20px;
//                     margin-bottom: 30px;
//                     flex-wrap: wrap;
//                 }

//                 .stat-card {
//                     background-color: #fff;
//                     padding: 20px;
//                     border-radius: 10px;
//                     flex: 1 1 calc(33.333% - 20px);
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                     text-align: center;
//                 }

//                 .stat-card h3 {
//                     font-size: 24px;
//                     margin-bottom: 10px;
//                 }

//                 .stat-card p {
//                     font-size: 30px;
//                     color: #3498db;
//                 }

//                 .stat-icon {
//                     font-size: 40px;
//                     color: #3498db;
//                     margin-bottom: 10px;
//                 }

//                 .charts {
//                     margin-top: 20px;
//                 }

//                 .chart {
//                     background-color: #fff;
//                     padding: 10px;
//                     border-radius: 10px;
//                     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//                     height: 300px; /* Reduced height */
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaBriefcase, FaFileAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, PointElement } from "chart.js";

// Register Chart.js modules
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, PointElement);

const AdminDashboard = () => {
    const [totalJobseekers, setTotalJobseekers] = useState(0);
    const [totalCompanies, setTotalCompanies] = useState(0);
    const [totalInterviews, setTotalInterviews] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const jobseekersResponse = await fetch("http://localhost:8086/jobSeeker/getAllJobSeekers");
                const companiesResponse = await fetch("http://localhost:8086/company/getAllCompanies");
                const interviewsResponse = await fetch("http://localhost:8086/jobSeeker/getAllScheduledInterviews");

                const jobseekersData = await jobseekersResponse.json();
                const companiesData = await companiesResponse.json();
                const interviewsData = await interviewsResponse.json();

                setTotalJobseekers(jobseekersData.length);
                setTotalCompanies(companiesData.length);
                setTotalInterviews(interviewsData.length || 0);
            } catch (error) {
                console.error("Failed to fetch statistics:", error);
            }
        };

        fetchStats();
    }, []);

    const lineChartData = {
        labels: ["Jobseekers", "Companies", "Interviews"],
        datasets: [
            {
                label: "Counts",
                data: [totalJobseekers, totalCompanies, totalInterviews],
                borderColor: "#3498db",
                backgroundColor: "rgba(52, 152, 219, 0.2)",
                tension: 0.4,
                fill: true,
                borderWidth: 2,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: { display: true },
            title: { display: true, text: "Analytics Overview - Line Chart" },
        },
        maintainAspectRatio: false,
    };

    const pieChartData = {
        labels: ["Jobseekers", "Companies", "Interviews"],
        datasets: [
            {
                label: "Counts",
                data: [totalJobseekers, totalCompanies, totalInterviews],
                backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
                hoverOffset: 4,
            },
        ],
    };

    const pieChartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Analytics Overview - Pie Chart" },
        },
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>Admin Dashboard</h2>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/candidatecard" className="sidebar-link">
                                <FaUsers className="icon" />
                                JobSeekers
                            </Link>
                        </li>
                        <li>
                            <Link to="/allcompanies" className="sidebar-link">
                                <FaChartBar className="icon" />
                                Companies
                            </Link>
                        </li>
                        <li>
                            <Link to="/allinterviews" className="sidebar-link">
                                <FaCog className="icon" />
                                Interviews
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminlogout" className="sidebar-link">
                                <FaSignOutAlt className="icon" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-content">
                <div className="content-header">
                    <h1>Welcome Back, Admin!</h1>
                </div>
                <div className="content-body">
                    <div className="stats">
                        <div className="stat-card">
                            <FaUsers className="stat-icon" />
                            <h3>Total Jobseekers</h3>
                            <p>
                                <CountUp start={0} end={totalJobseekers} duration={2.5} />
                            </p>
                        </div>
                        <div className="stat-card">
                            <FaBriefcase className="stat-icon" />
                            <h3>Total Companies</h3>
                            <p>
                                <CountUp start={0} end={totalCompanies} duration={2.5} />
                            </p>
                        </div>
                        <div className="stat-card">
                            <FaFileAlt className="stat-icon" />
                            <h3>Total Interviews</h3>
                            <p>
                                <CountUp start={0} end={totalInterviews} duration={2.5} />
                            </p>
                        </div>
                    </div>
                    <div className="charts">
                        <h2>Analytics Overview</h2>
                        <div className="chart-container">
                            <div className="chart left">
                                <Line data={lineChartData} options={lineChartOptions} />
                            </div>
                            <div className="chart right">
                                <Pie data={pieChartData} options={pieChartOptions} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS styles */}
            <style jsx>{`
                .admin-dashboard {
                    display: flex;
                    font-family: 'Roboto', sans-serif;
                    height: 100vh;
                    background-color: #f5f5f5;
                }

                .sidebar {
                    width: 250px;
                    background-color: #2c3e50;
                    color: #fff;
                    padding: 20px;
                    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1);
                }

                .sidebar-header h2 {
                    text-align: center;
                    color: #ecf0f1;
                    font-size: 24px;
                    margin-bottom: 30px;
                    font-weight: bold;
                }

                .sidebar-menu ul {
                    list-style: none;
                    padding-left: 0;
                }

                .sidebar-menu ul li {
                    margin: 20px 0;
                }

                .sidebar-link {
                    color: #ecf0f1;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    font-size: 18px;
                    padding: 12px;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }

                .sidebar-link:hover {
                    background-color: #3498db;
                    color: white;
                }

                .sidebar-link .icon {
                    margin-right: 12px;
                    font-size: 22px;
                }

                .main-content {
                    width: calc(100% - 250px);
                    padding: 30px;
                    background-color: #ecf0f1;
                    height: 100vh;
                    overflow-y: auto;
                    box-sizing: border-box;
                }

                .content-header h1 {
                    font-size: 36px;
                    color: #2c3e50;
                    margin-bottom: 30px;
                    font-weight: bold;
                }

                .content-body {
                    margin-top: 30px;
                }

                .stats {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 30px;
                    flex-wrap: wrap;
                }

                .stat-card {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    flex: 1 1 calc(33.333% - 20px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .stat-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
                }

                .stat-card h3 {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #2c3e50;
                    font-weight: bold;
                }

                .stat-card p {
                    font-size: 30px;
                    color: #3498db;
                    font-weight: bold;
                }

                .stat-icon {
                    font-size: 45px;
                    color: #3498db;
                    margin-bottom: 12px;
                }

                .charts {
                    margin-top: 20px;
                }

                .chart-container {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                }

                .chart {
                    background-color: #fff;
                    padding: 15px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    height: 350px;
                    flex: 1;
                    transition: transform 0.3s ease;
                }

                .chart:hover {
                    transform: translateY(-5px);
                }

                .left {
                    margin-right: 10px;
                }

                .right {
                    margin-left: 10px;
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
