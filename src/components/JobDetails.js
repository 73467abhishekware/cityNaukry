
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const JobDetail = () => {
//   const { id } = useParams(); // Fetch jobPostId from the URL
//   const [job, setJob] = useState(null);
//   const [showFullDetails, setShowFullDetails] = useState(false); // State to toggle company details

//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8086/jobPost/getPostById/${id}`);
//         const data = await response.json();
//         console.log("Fetched job details data:", data);
//         setJob(data);
//       } catch (error) {
//         console.error("Error fetching job data:", error);
//       }
//     };

//     fetchJobData();
//   }, [id]);

//   if (!job) {
//     return <div>Loading...</div>;
//   }

//   const logoUrl = `http://localhost:8086${job.companyInformation.logoPath}`;

//   return (
//     <div>
//       {/* Header Section */}
//       <div className="container-xxl py-5 bg-dark page-header mb-5 text-center">
//         <div className="container my-5 pt-5 pb-4">
//           <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb justify-content-center text-uppercase">
//               <li className="breadcrumb-item"><a href="#">Home</a></li>
//               <li className="breadcrumb-item"><a href="#">Pages</a></li>
//               <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* Job Detail Section */}
//       <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div className="container">
//           <div className="row gy-5 gx-4">
//             <div className="col-lg-8">
//               {/* Job Header */}
//               <div className="d-flex align-items-center mb-5">
//                 <img
//                   className="flex-shrink-0 img-fluid border rounded"
//                   src={logoUrl} // Corrected the src here
//                   alt="Company Logo"
//                   style={{ width: '80px', height: '80px' }}
//                 />
//                 <div className="text-start ps-4">
//                   <h3 className="mb-3">{job.title}</h3>
//                   <span className="text-truncate me-3">
//                     <i className="fa fa-map-marker-alt text-primary me-2"></i>
//                     {job.location}
//                   </span>
//                   <span className="text-truncate me-3">
//                     <i className="far fa-clock text-primary me-2"></i>
//                     {job.employmentType}
//                   </span>
//                   <span className="text-truncate me-0">
//                     <i className="far fa-money-bill-alt text-primary me-2"></i>
//                     {job.salaryRange}
//                   </span>
//                 </div>
//               </div>

//               {/* Job Description */}
//               <div className="mb-5">
//                 <h4 className="mb-3">Job Description</h4>
//                 <p>{job.description}</p>
//                 <h4 className="mb-3">Responsibilities</h4>
//                 <p>{job.responsibilities}</p>
//                 <h4 className="mb-3">Qualifications</h4>
//                 <p>{job.qualifications}</p>
//               </div>

//               {/* Application Form */}
//               <div>
//                 <h4 className="mb-4">Apply For The Job</h4>
//                 <form>
//                   <div className="row g-3">
//                     <div className="col-12">
//                       <button className="btn btn-primary w-40" type="submit">Apply Now</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {/* Job Summary and Company Details */}
//             <div className="col-lg-4">
//               <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
//                 <h4 className="mb-4">Job Summary</h4>
//                 <p><i className="fa fa-angle-right text-primary me-2"></i>Location: {job.location}</p>
//                 <p><i className="fa fa-angle-right text-primary me-2"></i>Employment Type: {job.employmentType}</p>
//                 <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Salary: {job.salaryRange}</p>
//               </div>
//               <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
//                 <h4 className="mb-4">Company Detail</h4>
//                 <p className="m-0">
//                   <strong>{job.companyInformation.name}</strong>
//                 </p>
//                 <p>
//                   {showFullDetails
//                     ? job.companyInformation.description
//                     : `${job.companyInformation.description.substring(0, 100)}...`}
//                 </p>
//                 <button
//                   className="btn btn-link p-0 text-primary"
//                   onClick={() => setShowFullDetails(!showFullDetails)}
//                 >
//                   {showFullDetails ? "Show Less" : "Read More"}
//                 </button>
//                 <p className="mt-3">
//                   <a href={job.companyInformation.website} target="_blank" rel="noopener noreferrer">
//                     Visit Company Website
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams(); // Fetch jobPostId from the URL
  const [job, setJob] = useState(null);
  const [showFullDetails, setShowFullDetails] = useState(false); // State to toggle company details
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track the submission status
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages
  const [successMessage, setSuccessMessage] = useState(""); // State to hold success messages
  
  // Assuming you have a way to get the logged-in jobSeeker's id
  const jobSeekerId = sessionStorage.getItem("jobSeekerId");;  // Replace this with the actual jobSeekerId, possibly from context or redux

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://localhost:8086/jobPost/getPostById/${id}`);
        const data = await response.json();
        console.log("Fetched job details data:", data);
        setJob(data);
      } catch (error) {        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [id]);

  console.log("jobpostid", id);

  // Handle the Apply Now functionality
  const handleApplyJob = async () => {
    setIsSubmitting(true);
    setErrorMessage("");  // Reset error message
    setSuccessMessage("");  // Reset success message
  
    try {
      const response = await fetch(
        `http://localhost:8086/jobSeeker/applyForJob?jobPostId=${id}&jobSeekerId=${jobSeekerId}`, 
        {
          method: "POST",
        }
      );
  
      // Check if the response is OK (status 200)
      const responseText = await response.text();  // Read the response as text
  
      // Try to parse the response as JSON
      let data = {};
      try {
        data = JSON.parse(responseText);
      } catch (error) {
        console.error("Failed to parse response as JSON:", error);
        data = { message: responseText };  // If not JSON, use the raw response as a message
      }
  
      console.log("Response data:", data);
  
      if (response.ok) {
        // Assuming response contains a 'success' field
        if (data.success) {
          setSuccessMessage(data.message || "Application submitted successfully!");
        } else {
          setErrorMessage(data.message || "Error applying for the job.");
        }
      } else {
        // Handle errors with a fallback message
        setErrorMessage(data.message || "Error applying for the job.");
      }
    } catch (error) {
      setErrorMessage("Error applying for the job.");
      console.error("Error applying for the job:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  



  if (!job) {
    return <div>Loading...</div>;
  }

  const logoUrl = `http://localhost:8086${job.companyInformation.logoPath}`;

  return (
    <div>
      {/* Header Section */}
      <div className="container-xxl py-5 bg-dark page-header mb-5 text-center">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Job Detail</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Pages</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Job Detail</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Job Detail Section */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-8">
              {/* Job Header */}
              <div className="d-flex align-items-center mb-5">
                <img
                  className="flex-shrink-0 img-fluid border rounded"
                  src={logoUrl} // Corrected the src here
                  alt="Company Logo"
                  style={{ width: '80px', height: '80px' }}
                />
                <div className="text-start ps-4">
                  <h3 className="mb-3">{job.title}</h3>
                  <span className="text-truncate me-3">
                    <i className="fa fa-map-marker-alt text-primary me-2"></i>
                    {job.location}
                  </span>
                  <span className="text-truncate me-3">
                    <i className="far fa-clock text-primary me-2"></i>
                    {job.employmentType}
                  </span>
                  <span className="text-truncate me-0">
                    <i className="far fa-money-bill-alt text-primary me-2"></i>
                    {job.salaryRange}
                  </span>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-5">
                <h4 className="mb-3">Job Description</h4>
                <p>{job.description}</p>
                <h4 className="mb-3">Responsibilities</h4>
                <p>{job.responsibilities}</p>
                <h4 className="mb-3">Qualifications</h4>
                <p>{job.qualifications}</p>
              </div>

              {/* Application Form */}
              <div>
                <h4 className="mb-4">Apply For The Job</h4>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={(e) => { e.preventDefault(); handleApplyJob(); }}>
                  <div className="row g-3">
                    <div className="col-12">
                      <button className="btn btn-primary w-40" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Apply Now"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Job Summary and Company Details */}
            <div className="col-lg-4">
              <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                <h4 className="mb-4">Job Summary</h4>
                <p><i className="fa fa-angle-right text-primary me-2"></i>Location: {job.location}</p>
                <p><i className="fa fa-angle-right text-primary me-2"></i>Employment Type: {job.employmentType}</p>
                <p className="m-0"><i className="fa fa-angle-right text-primary me-2"></i>Salary: {job.salaryRange}</p>
              </div>
              <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                <h4 className="mb-4">Company Detail</h4>
                <p className="m-0">
                  <strong>{job.companyInformation.name}</strong>
                </p>
                <p>
                  {showFullDetails
                    ? job.companyInformation.description
                    : `${job.companyInformation.description.substring(0, 100)}...`}
                </p>
                <button
                  className="btn btn-link p-0 text-primary"
                  onClick={() => setShowFullDetails(!showFullDetails)}
                >
                  {showFullDetails ? "Show Less" : "Read More"}
                </button>
                <p className="mt-3">
                  <a href={job.companyInformation.website} target="_blank" rel="noopener noreferrer">
                    Visit Company Website
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
