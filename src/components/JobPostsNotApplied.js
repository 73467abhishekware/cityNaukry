import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobPostsNotApplied = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with the actual job seeker ID, or pass it as a prop
    const jobSeekerId = sessionStorage.getItem("jobSeekerId");
    console.log("jobseekerid",jobSeekerId)
    // Fetch job posts not applied by the job seeker
    axios
      .get(`http://localhost:8086/jobSeeker/getPostsNotAppliedByJobSeeker?jobSeekerId=${jobSeekerId}`)
      .then(response => {
        setJobPosts(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching job posts');
        setLoading(false);
      });
  }, []);

  const applyForJob = (jobPostId) => {
    alert(`Applying for job post with ID: ${jobPostId}`);
    // You can implement the application functionality here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Job Posts Not Applied</h2>

      {loading && <p>Loading job posts...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.jobPostsList}>
        {jobPosts.length === 0 && !loading && (
          <p style={styles.noPostsMessage}>No job posts available that the job seeker has not applied to.</p>
        )}

        {jobPosts.map(post => (
          <div key={post.id} style={styles.jobPostCard}>
            <h3>{post.title}</h3>
            <p><strong>Company:</strong> {post.company}</p>
            <p><strong>Location:</strong> {post.location}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <button onClick={() => applyForJob(post.id)} style={styles.applyButton}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    margin: 0,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  jobPostsList: {
    width: '80%',
    maxWidth: '800px',
    overflowY: 'auto',
  },
  noPostsMessage: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#777',
  },
  jobPostCard: {
    backgroundColor: '#f9fafb',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  applyButton: {
    alignSelf: 'flex-end',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  applyButtonHover: {
    backgroundColor: '#0056b3',
  },
  error: {
    color: 'red',
  },
};

export default JobPostsNotApplied;
