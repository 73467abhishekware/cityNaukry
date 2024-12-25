import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear any session or authentication data when the user logs out.
        // For example, if you're using localStorage to store the admin's token:
        localStorage.removeItem("authToken"); // Remove the stored token
        sessionStorage.removeItem("authToken"); // If you are using sessionStorage

        // Optionally, clear any other admin-related session data
        localStorage.removeItem("adminEmail");
        sessionStorage.removeItem("adminEmail");

        // Redirect to the login page
        navigate("/adminlogin");
    }, [navigate]);

    return (
        <div style={styles.container}>
            <h2>You have been logged out successfully.</h2>
            <p>Redirecting to login page...</p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        textAlign: "center",
    },
};

export default AdminLogout;
