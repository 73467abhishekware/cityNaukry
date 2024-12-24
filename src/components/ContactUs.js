import React from 'react';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container py-5">
                <h1 className="text-center mb-5">Get in Touch with Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Contact Information</h3>
                        <p>If you have any questions, feel free to reach out to us using the information below.</p>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                7/70 Mutha Building, Janta Rd, Ichalkaranji, Dist. Kolhapur, Maharashtra 416115
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                enquiry@hundiainfotech.com
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                +91 93257 00145
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h3>Our Location</h3>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489191.6790312911!2d74.465214!3d16.686389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e280121eadaf%3A0xc7ad7668daaeaa8b!2sHundia%20Infotech%20%2F%20Hundia%20Infosys!5e0!3m2!1sen!2sus!4v1727759420518!5m2!1sen!2sus"
                                style={{ border: 0, width: '100%', height: '400px' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-page {
                    border: 2px solid #007bff; /* Add border color and thickness */
                    border-radius: 8px; /* Optional: for rounded corners */
                    padding: 20px; /* Add some padding inside the border */
                    background-color: #f8f9fa; /* Optional: light background color */
                }
                .container {
                    max-width: 900px;
                    margin: auto;
                    padding: 20px;
                }
                h1 {
                    margin-bottom: 40px;
                    color: #007bff;
                    font-family: 'Arial', sans-serif;
                }
                h3 {
                    margin-bottom: 20px;
                    color: #343a40;
                    font-family: 'Arial', sans-serif;
                }
                .contact-info {
                    list-style: none;
                    padding: 0;
                    font-size: 1.1em;
                }
                .contact-info li {
                    margin: 15px 0;
                    display: flex;
                    align-items: center;
                }
                .contact-info li i {
                    margin-right: 10px;
                    color: #007bff;
                    font-size: 1.5em;
                }
                .map-container {
                    margin-top: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    overflow: hidden;
                }
                .illustration-container {
                    text-align: center;
                    margin-top: 40px;
                }
                .illustration-container img {
                    max-width: 80%;
                    height: auto;
                }
                @media (max-width: 767px) {
                    .container {
                        padding: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
