// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaBuilding, FaLocationArrow, FaMoneyBillAlt, FaBook, FaUsers } from 'react-icons/fa';

// export default function JobPostingForm() {
//     const navigate = useNavigate();

//     const [jobPost, setJobPost] = useState({
//         title: "",
//         description: "",
//         responsibilities: "",
//         companyName: "",
//         location: "",
//         salaryRange: "",
//         qualifications: "",
//         experienceRequired: "",
//         employmentType: "",
//     });

//     const [userName, setUserName] = useState("");
//     const [error, setError] = useState(null);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setJobPost({ ...jobPost, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Send the data to the API endpoint
//         fetch("http://localhost:8086/jobPost/addPost", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(jobPost),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to post job.");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             // Handle the success response from the server
//             console.log("Job Post Created:", data);
//             navigate("/seejobpost", { state: { jobPost, userName } });
//         })
//         .catch((error) => {
//             // Handle errors
//             console.error("Error posting job:", error);
//             setError("Failed to create job post. Please try again.");
//         });
//     };

//     return (
//         <div className="container mt-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
//             <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333", fontSize: "32px" }}>
//                 Post a Job
//             </h2>
//             {error && <div className="alert alert-danger">{error}</div>} {/* Error Message */}
//             <form
//                 onSubmit={handleSubmit}
//                 style={{
//                     backgroundColor: "#ffffff",
//                     borderRadius: "15px",
//                     padding: "40px 30px",
//                     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
//                     transition: "transform 0.3s ease",
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "30px",
//                     maxWidth: "100%",
//                 }}
//                 className="form-elegant"
//             >
//                 {/* Job Details Section */}
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
//                     {/* Left Column (Job Details) */}
//                     <div>
//                         {/* Job Title */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Job Title
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="title"
//                                 value={jobPost.title}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="Enter job title"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     transition: "all 0.3s ease",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             />
//                         </div>

//                         {/* Job Description */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Job Description
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 name="description"
//                                 value={jobPost.description}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="Describe the job role"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     height: "120px",
//                                     transition: "all 0.3s ease",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             ></textarea>
//                         </div>

//                         {/* Responsibilities */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Responsibilities
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 name="responsibilities"
//                                 value={jobPost.responsibilities}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="List the responsibilities"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     height: "120px",
//                                     transition: "all 0.3s ease",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             ></textarea>
//                         </div>

//                         {/* Qualifications */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Qualifications
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 name="qualifications"
//                                 value={jobPost.qualifications}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="Required qualifications"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     height: "120px",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             ></textarea>
//                         </div>

//                         {/* Experience Required */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Experience Required (in years)
//                             </label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 name="experienceRequired"
//                                 value={jobPost.experienceRequired}
//                                 onChange={handleInputChange}
//                                 required
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Right Column (Company Details) */}
//                     <div>
//                         {/* Company Name */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Company Name
//                             </label>
//                             <div className="input-group">
//                                 <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
//                                     <FaBuilding style={{ color: "#007BFF" }} />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="companyName"
//                                     value={jobPost.companyName}
//                                     onChange={handleInputChange}
//                                     required
//                                     placeholder="Enter company name"
//                                     style={{
//                                         borderRadius: "0 10px 10px 0",
//                                         border: "1px solid #e0e0e0",
//                                         padding: "15px",
//                                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Location */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Location
//                             </label>
//                             <div className="input-group">
//                                 <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
//                                     <FaLocationArrow style={{ color: "#007BFF" }} />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="location"
//                                     value={jobPost.location}
//                                     onChange={handleInputChange}
//                                     required
//                                     placeholder="Enter job location"
//                                     style={{
//                                         borderRadius: "0 10px 10px 0",
//                                         border: "1px solid #e0e0e0",
//                                         padding: "15px",
//                                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Salary Range */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Salary Range
//                             </label>
//                             <div className="input-group">
//                                 <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
//                                     <FaMoneyBillAlt style={{ color: "#007BFF" }} />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="salaryRange"
//                                     value={jobPost.salaryRange}
//                                     onChange={handleInputChange}
//                                     required
//                                     placeholder="Enter salary range"
//                                     style={{
//                                         borderRadius: "0 10px 10px 0",
//                                         border: "1px solid #e0e0e0",
//                                         padding: "15px",
//                                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Employment Type */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Employment Type
//                             </label>
//                             <select
//                                 className="form-control"
//                                 name="employmentType"
//                                 value={jobPost.employmentType}
//                                 onChange={handleInputChange}
//                                 required
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             >
//                                  <option value="Full-time">select</option>
//                                 <option value="Part-time">Part-time</option>
//                                 <option value="Contract">Full-time</option>
//                                 <option value="Full-time">Full-time</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="btn btn-primary w-100 py-3"
//                     style={{
//                         backgroundColor: "#007bff",
//                         borderRadius: "10px",
//                         border: "none",
//                         color: "white",
//                         fontSize: "16px",
//                         transition: "background-color 0.3s ease",
//                         cursor: "pointer",
//                     }}
//                 >
//                     Post Job
//                 </button>
//             </form>
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaLocationArrow, FaMoneyBillAlt, FaBook, FaUsers } from 'react-icons/fa';

export default function JobPostingForm() {
    const navigate = useNavigate();

    const [jobPost, setJobPost] = useState({
        title: "",
        description: "",
        responsibilities: "",
        companyName: "",
        location: "",
        salaryRange: "",
        qualifications: "",
        experienceRequired: "",
        employmentType: "",
    });

    const [companyId, setCompanyId] = useState(null);  
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedCompanyId = sessionStorage.getItem("companyId");
        console.log("stored companyid from session:", storedCompanyId);

        if (storedCompanyId) {
            setCompanyId(parseInt(storedCompanyId, 10));
        } else {
            setError("Company not logged in");
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobPost({ ...jobPost, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!companyId) {
            setError("Company ID is missing. Please log in.");
            return;
        }

        const jobPostWithCompanyId = { ...jobPost, companyId };
        console.log("Job Post with Company ID:", jobPostWithCompanyId);

        // Corrected URL with template literals
        fetch(`http://localhost:8086/jobPost/addPost?companyId=${companyId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jobPostWithCompanyId),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to post job.");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Job Post Created:", data);
            navigate("/home", { state: { jobPost, companyId } });
        })
        .catch((error) => {
            console.error("Error posting job:", error);
            setError("Failed to create job post. Please try again.");
        });
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333", fontSize: "32px" }}>
                Post a Job
            </h2>
            {error && <div className="alert alert-danger">{error}</div>} {/* Error Message */}
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    maxWidth: "100%",
                }}
                className="form-elegant"
            >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
                    {/* Left Column (Job Details) */}
                    <div>
                        {/* Job Title */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Job Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={jobPost.title}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter job title"
                                style={{
                                    borderRadius: "10px",
                                    border: "1px solid #e0e0e0",
                                    padding: "15px",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                }}
                            />
                        </div>

                        {/* Job Description */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Job Description
                            </label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={jobPost.description}
                                onChange={handleInputChange}
                                required
                                placeholder="Describe the job role"
                                style={{
                                    borderRadius: "10px",
                                    border: "1px solid #e0e0e0",
                                    padding: "15px",
                                    height: "120px",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                }}
                            ></textarea>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Responsibilities
                            </label>
                            <textarea
                                className="form-control"
                                name="responsibilities"
                                value={jobPost.responsibilities}
                                onChange={handleInputChange}
                                required
                                placeholder="List the responsibilities"
                                style={{
                                    borderRadius: "10px",
                                    border: "1px solid #e0e0e0",
                                    padding: "15px",
                                    height: "120px",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                }}
                            ></textarea>
                        </div>

                        {/* Qualifications */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Qualifications
                            </label>
                            <textarea
                                className="form-control"
                                name="qualifications"
                                value={jobPost.qualifications}
                                onChange={handleInputChange}
                                required
                                placeholder="Required qualifications"
                                style={{
                                    borderRadius: "10px",
                                    border: "1px solid #e0e0e0",
                                    padding: "15px",
                                    height: "120px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                }}
                            ></textarea>
                        </div>

                        {/* Experience Required */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Experience Required (in years)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                name="experienceRequired"
                                value={jobPost.experienceRequired}
                                onChange={handleInputChange}
                                required
                                style={{
                                    borderRadius: "10px",
                                    border: "1px solid #e0e0e0",
                                    padding: "15px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column (Company Details) */}
                    <div>
                        {/* Company Name */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Company Name
                            </label>
                            <div className="input-group">
                                <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
                                    <FaBuilding style={{ color: "#007BFF" }} />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyName"
                                    value={jobPost.companyName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter company name"
                                    style={{
                                        borderRadius: "0 10px 10px 0",
                                        padding: "15px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Location
                            </label>
                            <div className="input-group">
                                <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
                                    <FaLocationArrow style={{ color: "#007BFF" }} />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="location"
                                    value={jobPost.location}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter job location"
                                    style={{
                                        borderRadius: "0 10px 10px 0",
                                        padding: "15px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Salary Range */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Salary Range
                            </label>
                            <div className="input-group">
                                <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
                                    <FaMoneyBillAlt style={{ color: "#007BFF" }} />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="salaryRange"
                                    value={jobPost.salaryRange}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter salary range"
                                    style={{
                                        borderRadius: "0 10px 10px 0",
                                        padding: "15px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Employment Type */}
                        <div className="mb-4">
                            <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
                                Employment Type
                            </label>
                            <select
                                className="form-control"
                                name="employmentType"
                                value={jobPost.employmentType}
                                onChange={handleInputChange}
                                required
                                style={{
                                    borderRadius: "10px",
                                    border: "1px solid #e0e0e0",
                                    padding: "15px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
                                }}
                            >
                                <option value="">Select Employment Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                style={{
                                    padding: "15px 40px",
                                    borderRadius: "10px",
                                    fontSize: "18px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                                }}
                            >
                                Post Job
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaBuilding, FaLocationArrow, FaMoneyBillAlt, FaBook, FaUsers } from 'react-icons/fa';

// export default function JobPostingForm() {
//     const navigate = useNavigate();

//     const [jobPost, setJobPost] = useState({
//         title: "",
//         description: "",
//         responsibilities: "",
//         companyName: "",
//         location: "",
//         salaryRange: "",
//         qualifications: "",
//         experienceRequired: "",
//         employmentType: "",
//     });

//     const [companyId, setCompanyId] = useState(null);  // state for companyId
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Retrieve the companyId from sessionStorage
//         const storedUser = sessionStorage.getItem("user");
//         console.log("stored companyId from session:", storedUser);

//         if (storedUser) {
//             try {
//                 const user = JSON.parse(storedUser); // Parse if it's a JSON object
//                 setCompanyId(user.companyId); // assuming companyId is a part of the user object
//             } catch (error) {
//                 console.error("Error parsing user data:", error);
//                 setError("Failed to retrieve company ID.");
//             }
//         }
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setJobPost({ ...jobPost, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!companyId) {
//             setError("Company ID is missing. Please log in.");
//             return;
//         }

//         // Add companyId to the jobPost data
//         const jobPostWithCompanyId = { ...jobPost, companyId };

//         // Send the data to the API endpoint
//         fetch("http://localhost:8086/jobPost/addPost", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(jobPostWithCompanyId),
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to post job.");
//             }
//             return response.json();
//         })
//         .then((data) => {
//             // Handle the success response from the server
//             console.log("Job Post Created:", data);
//             navigate("/home", { state: { jobPost, companyId } });
//         })
//         .catch((error) => {
//             // Handle errors
//             console.error("Error posting job:", error);
//             setError("Failed to create job post. Please try again.");
//         });
//     };

//     return (
//         <div className="container mt-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
//             <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333", fontSize: "32px" }}>
//                 Post a Job
//             </h2>
//             {error && <div className="alert alert-danger">{error}</div>} {/* Error Message */}
//             <form
//                 onSubmit={handleSubmit}
//                 style={{
//                     backgroundColor: "#ffffff",
//                     borderRadius: "15px",
//                     padding: "40px 30px",
//                     boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
//                     transition: "transform 0.3s ease",
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "30px",
//                     maxWidth: "100%",
//                 }}
//                 className="form-elegant"
//             >
//                 {/* Job Details Section */}
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
//                     {/* Left Column (Job Details) */}
//                     <div>
//                         {/* Job Title */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Job Title
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 name="title"
//                                 value={jobPost.title}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="Enter job title"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     transition: "all 0.3s ease",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             />
//                         </div>

//                         {/* Job Description */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Job Description
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 name="description"
//                                 value={jobPost.description}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="Describe the job role"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     height: "120px",
//                                     transition: "all 0.3s ease",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             ></textarea>
//                         </div>

//                         {/* Responsibilities */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Responsibilities
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 name="responsibilities"
//                                 value={jobPost.responsibilities}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="List the responsibilities"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     height: "120px",
//                                     transition: "all 0.3s ease",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             ></textarea>
//                         </div>

//                         {/* Qualifications */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Qualifications
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 name="qualifications"
//                                 value={jobPost.qualifications}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder="Required qualifications"
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     height: "120px",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             ></textarea>
//                         </div>

//                         {/* Experience Required */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Experience Required (in years)
//                             </label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 name="experienceRequired"
//                                 value={jobPost.experienceRequired}
//                                 onChange={handleInputChange}
//                                 required
//                                 style={{
//                                     borderRadius: "10px",
//                                     border: "1px solid #e0e0e0",
//                                     padding: "15px",
//                                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                 }}
//                             />
//                         </div>
//                     </div>

//                     {/* Right Column (Company Details) */}
//                     <div>
//                         {/* Company Name */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Company Name
//                             </label>
//                             <div className="input-group">
//                                 <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
//                                     <FaBuilding style={{ color: "#007BFF" }} />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="companyName"
//                                     value={jobPost.companyName}
//                                     onChange={handleInputChange}
//                                     required
//                                     style={{
//                                         borderRadius: "0 10px 10px 0",
//                                         border: "1px solid #e0e0e0",
//                                         padding: "15px",
//                                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Location */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Location
//                             </label>
//                             <div className="input-group">
//                                 <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
//                                     <FaLocationArrow style={{ color: "#007BFF" }} />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="location"
//                                     value={jobPost.location}
//                                     onChange={handleInputChange}
//                                     required
//                                     style={{
//                                         borderRadius: "0 10px 10px 0",
//                                         border: "1px solid #e0e0e0",
//                                         padding: "15px",
//                                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Salary Range */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Salary Range
//                             </label>
//                             <div className="input-group">
//                                 <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
//                                     <FaMoneyBillAlt style={{ color: "#007BFF" }} />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="salaryRange"
//                                     value={jobPost.salaryRange}
//                                     onChange={handleInputChange}
//                                     required
//                                     style={{
//                                         borderRadius: "0 10px 10px 0",
//                                         border: "1px solid #e0e0e0",
//                                         padding: "15px",
//                                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                     }}
//                                 />
//                             </div>
//                         </div>

//                         {/* Employment Type */}
//                         <div className="mb-4">
//                             <label className="form-label" style={{ fontWeight: "600", color: "#333", fontSize: "18px" }}>
//                                 Employment Type
//                             </label>
//                             <div className="input-group">
//                                 <span className="input-group-text" style={{ borderRadius: "10px 0 0 10px", backgroundColor: "#f0f0f0" }}>
//                                     <FaUsers style={{ color: "#007BFF" }} />
//                                 </span>
//                                 <select
//                                     className="form-select"
//                                     name="employmentType"
//                                     value={jobPost.employmentType}
//                                     onChange={handleInputChange}
//                                     required
//                                     style={{
//                                         borderRadius: "0 10px 10px 0",
//                                         border: "1px solid #e0e0e0",
//                                         padding: "15px",
//                                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)"
//                                     }}
//                                 >
//                                     <option value="">Select employment type</option>
//                                     <option value="Full-time">Full-time</option>
//                                     <option value="Part-time">Part-time</option>
//                                     <option value="Internship">Internship</option>
//                                     <option value="Contract">Contract</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="text-center">
//                     <button
//                         type="submit"
//                         className="btn btn-primary btn-lg"
//                         style={{
//                             padding: "12px 20px",
//                             fontSize: "18px",
//                             borderRadius: "10px",
//                             backgroundColor: "#007BFF",
//                             color: "#fff",
//                             border: "none",
//                             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                         }}
//                     >
//                         Post Job
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

