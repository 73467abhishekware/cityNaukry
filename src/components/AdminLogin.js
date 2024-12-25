import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate=useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get("http://localhost:8086/admin/login", {
                params: { email, password },
            });

            if (response.status === 200) {
                setMessage("Login successful!");
                // Redirect to admin dashboard or perform other actions
                console.log("Admin logged in successfully!");
                navigate("/admindashboard");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage("Invalid credentials. Please try again.");
            } else {
                setMessage("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div style={styles.container}>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <div style={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
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
    form: {
        display: "flex",
        flexDirection: "column",
    },
    formGroup: {
        marginBottom: "15px",
    },
    input: {
        width: "100%",
        padding: "8px",
        marginTop: "5px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    message: {
        marginTop: "15px",
        color: "#d9534f",
    },
};

export default AdminLogin;
