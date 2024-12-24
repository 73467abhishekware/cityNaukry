

import { createBrowserRouter } from "react-router-dom";
// Adjust paths if components are in different folders
import SignIn from "./SignIn";
import JobSeekerSignUpPage from "./JobSeekerSignUp";
import CompanySignUp from "./CompanySignUp";

import CompanyProfile from "./CompanyProfile";
import JobList from "./JobList";
import JobDetail from "./JobDetails";
import ContactUs from "./ContactUs";
import Home from "./Home";
import App from "./App";
import JobseekerProfile from "./JobseekerProfile";
import Dashboard from "./Dashboard";
import PostedJobs from "./PostedJobs";
import JobPostingForm from "./Jobpost";
import CandidateCard from "./CandidateCard";
import DashAsideCompany from "./DashAsideCompany";
import CompanyDashboard from "./CompanyDashboard";
import ScheduledInterviews from "./ScheduledInterviews";
import CompanyJobdetail from "./CompanyJobdetail";
import UpdateJobPost from "./UpdateJobPost ";
import JobApplicants from "./JobApplicants";
import InterviewDetails from "./InterviewDetails";
import CompanyInterview from "./CompanyInterview";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AdminLogout from "./AdminLogout";
import CandidateDetail from "./CandidateDetail";
import AllCompanies from "./AllCompanies";
import CompanyDetails from "./CompanyDetails";
import JobPosts from "./JobPosts";
import AllInterviews from "./AllInterviews";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default route for "/"
        element: <Home />,
      },
      {
        path: "home", 
        element: <Home />,
      },
      {
        path: "jobseekersignup", 
        element: <JobSeekerSignUpPage />,
      },
      {
        path: "companysignup", 
        element: <CompanySignUp />,
      },
      {
        path: "jobseekerprofile", 
        element: <JobseekerProfile />,
      },
      {
        path: "companyprofile", 
        element: <CompanyProfile />,
      },
      {
        path: "joblist", 
        element: <JobList />,
      },
      {
        path: "job/:id", 
        element: <JobDetail/>,
      },
      {
        path: "contactus", 
        element: <ContactUs/>,
      },
      {
        path: "signin", 
        element: <SignIn/>,
      },
      {
        path: "dashboard", 
        element: <Dashboard/>,
      },
      {
        path: "postedjobs", 
        element: <PostedJobs/>,
      },
      {
        path: "jobpost", 
        element: <JobPostingForm/>,
      },
      {
        path: "companydashboard", 
        element: <CompanyDashboard/>,
      },
      {
        path: "scheduledinterview", 
        element: <ScheduledInterviews/>,
      },
      {
        path: "/companyJobDetail/:id", 
        element: <CompanyJobdetail/>,
      },
      {
        path: "updatedjobpost", 
        element: <UpdateJobPost/>,
      },
 
      {
        path: "/job-applicants/:jobId", 
        element: <JobApplicants/>,
      },
      {
        path: "/interview/:id", 
        element: <InterviewDetails/>,
      },
      {
        path: "/companyinterview", 
        element: <CompanyInterview/>,
      },
      {
        path: "/adminlogin", 
        element: <AdminLogin/>,
      },
      {
        path: "/admindashboard", 
        element: <AdminDashboard/>,
      },
      {
        path: "/adminlogout", 
        element: <AdminLogout/>,
      },
      {
        path: "/candidate/:jobSeekerId", 
        element: <CandidateDetail/>,
      },
      {
        path: "candidatecard", 
        element: <CandidateCard/>,
      },
      {
        path: "/allcompanies", 
        element: <AllCompanies/>,
      },
      {
        path: "/company/:companyId", 
        element: <CompanyDetails/>,
      },
      {
        path: "/company/:companyId/posts", 
        element: <JobPosts/>,
      },
      {
        path: "/allinterviews", 
        element: <AllInterviews/>,
      }, 
    ],  
  },
]);

export default customRouter;
