import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateJobPost = ({ jobPostId }) => {
    const [jobPost, setJobPost] = useState({
        title: '',
        description: '',
        responsibilities: '',
        location: '',
        salaryRange: '',
        qualifications: '',
        experienceRequired: '',
        employmentType: '',
        companyId: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch existing job post details when the component mounts
    useEffect(() => {
        const fetchJobPost = async () => {
            try {
                const response = await axios.get(`/jobPost/getPostById/${jobPostId}`);
                if (response.status === 200) {
                    setJobPost(response.data);
                }
            } catch (err) {
                console.error('Error fetching job post', err);
                setError('Error fetching job post details.');
            }
        };

        if (jobPostId) {
            fetchJobPost();
        }
    }, [jobPostId]);

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobPost({ ...jobPost, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.put(`/jobPost/updatePost/${jobPostId}`, jobPost);
            if (response.status === 200) {
                alert('Job post updated successfully');
                // Optionally, redirect or reset form here
            }
        } catch (err) {
            console.error('Error updating job post', err);
            setError('Failed to update job post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="update-job-post">
            <h2>Update Job Post</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={jobPost.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={jobPost.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Responsibilities</label>
                    <textarea
                        name="responsibilities"
                        value={jobPost.responsibilities}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={jobPost.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Salary Range</label>
                    <input
                        type="text"
                        name="salaryRange"
                        value={jobPost.salaryRange}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Qualifications</label>
                    <textarea
                        name="qualifications"
                        value={jobPost.qualifications}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Experience Required</label>
                    <input
                        type="text"
                        name="experienceRequired"
                        value={jobPost.experienceRequired}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Employment Type</label>
                    <input
                        type="text"
                        name="employmentType"
                        value={jobPost.employmentType}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Company ID</label>
                    <input
                        type="number"
                        name="companyId"
                        value={jobPost.companyId}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Job Post'}
                </button>
            </form>
        </div>
    );
};

export default UpdateJobPost;
