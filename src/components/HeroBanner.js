// import React from "react";

// const HeroBanner = () => {
//   const styles = {
//     banner: {
//       backgroundColor: "#244034",
//       color: "white",
//       position: "relative",
//       zIndex: 9,
//       padding: "50px 0",
//       width: "100%", // Full width of the screen
//     },
//     container: {
//       maxWidth: "1200px", // Keeps content within bounds
//       margin: "0 auto",
//       padding: "0 15px",
//     },
//     header: {
//       fontSize: "2.5rem",
//       fontWeight: "bold",
//       lineHeight: 1.2,
//     },
//     highlight: {
//       color: "#ffc107",
//     },
//     description: {
//       fontSize: "1.2rem",
//       color: "#ffffffb3",
//       marginTop: "40px",
//       marginBottom: "50px",
//     },
//     inputBox: {
//       position: "relative",
//       marginBottom: "15px",
//     },
//     label: {
//       fontSize: "0.9rem",
//       marginBottom: "5px",
//       display: "block",
//       color: "white",
//     },
//     select: {
//       width: "100%",
//       padding: "10px",
//       background: "#ffffff",
//       border: "none",
//       borderRadius: "5px",
//       fontSize: "1rem",
//     },
//     searchBtn: {
//       backgroundColor: "#ffc107",
//       color: "#244034",
//       border: "none",
//       borderRadius: "5px",
//       padding: "10px 20px",
//       fontWeight: "bold",
//       cursor: "pointer",
//       height: "100%",
//       textTransform: "uppercase",
//       transition: "all 0.3s",
//     },
//     searchBtnHover: {
//       backgroundColor: "#e0a800",
//     },
//     tags: {
//       display: "flex",
//       flexWrap: "wrap",
//       listStyle: "none",
//       marginTop: "20px",
//       padding: 0,
//     },
//     tagItem: {
//       marginRight: "10px",
//     },
//     tagLink: {
//       color: "#ffc107",
//       textDecoration: "none",
//     },
//     tagLinkHover: {
//       textDecoration: "underline",
//     },
//     imageBox: {
//       marginTop: "30px",
//       position: "relative",
//     },
//     shapes: {
//       position: "absolute",
//       top: "0",
//       left: "0",
//     },
//     img: {
//       width: "100%", // Image spans full width of the container
//       borderRadius: "8px",
//     },
//   };

//   return (
//     <div style={styles.banner}>
//       <div style={styles.container}>
//         <div className="position-relative pt-200 md-pt-150 pb-150 xl-pb-120 md-pb-80">
//           <div className="row">
//             <div className="col-lg-6">
//               <h1 style={styles.header}>
//                 Find & Hire <span style={styles.highlight}>Connecting Talent with Opportunity – Find Your Perfect Job or Ideal Candidate Today!.</span>
//               </h1>
//               <p style={styles.description}>
//                 We deliver blazing fast & striking work solutions.
//               </p>
//             </div>
//           </div>

//           <div className="position-relative">
//             <div className="row">
//               <div className="col-xl-9 col-lg-8">
//                 <div className="job-search-one position-relative me-xl-5">
//                   <form action="/job-grid-v1">
//                     <div className="row">
//                       <div className="col-md-5">
//                         <div style={styles.inputBox}>
//                           <label style={styles.label}>What are you looking for?</label>
//                           <select style={styles.select}>
//                             <option value="1">UI Designer</option>
//                             <option value="2">Content Creator</option>
//                             <option value="3">Web Developer</option>
//                             <option value="4">SEO Guru</option>
//                             <option value="5">Digital Marketer</option>
//                           </select>
//                         </div>
//                       </div>

//                       <div className="col-md-4">
//                         <div style={styles.inputBox}>
//                           <label style={styles.label}>Category</label>
//                           <select style={styles.select}>
//                             <option value="1">Web Design</option>
//                             <option value="2">Design & Creative</option>
//                             <option value="3">IT & Development</option>
//                             <option value="4">Web & Mobile Dev</option>
//                             <option value="5">Writing</option>
//                             <option value="6">Sales & Marketing</option>
//                             <option value="7">Music & Audio</option>
//                           </select>
//                         </div>
//                       </div>

//                       <div className="col-md-3">
//                         <button
//                           style={styles.searchBtn}
//                           onMouseOver={(e) => (e.target.style.backgroundColor = "#e0a800")}
//                           onMouseOut={(e) => (e.target.style.backgroundColor = "#ffc107")}
//                         >
//                           Search
//                         </button>
//                       </div>
//                     </div>
//                   </form>

//                   <ul style={styles.tags}>
//                     <li style={styles.tagItem}>
//                       <strong style={{ color: "white" }}>Popular:</strong>
//                     </li>
//                     <li style={styles.tagItem}>
//                       <a
//                         href="#!"
//                         style={styles.tagLink}
//                         onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//                         onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//                       >
//                         Design
//                       </a>
//                     </li>
//                     <li style={styles.tagItem}>
//                       <a
//                         href="#!"
//                         style={styles.tagLink}
//                         onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//                         onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//                       >
//                         Art
//                       </a>
//                     </li>
//                     <li style={styles.tagItem}>
//                       <a
//                         href="#!"
//                         style={styles.tagLink}
//                         onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//                         onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//                       >
//                         Business
//                       </a>
//                     </li>
//                     <li style={styles.tagItem}>
//                       <a
//                         href="#!"
//                         style={styles.tagLink}
//                         onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
//                         onMouseOut={(e) => (e.target.style.textDecoration = "none")}
//                       >
//                         Video Editing
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div style={styles.imageBox}>
//             <img
//               src="https://media.istockphoto.com/id/1206393963/photo/close-up-of-unrecognizable-person-opening-office-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=KoZz-GMQ3Inu85OMwgWJPcnstDlGz9kFgdYkPJK8yec="
//               alt="Background Shape"
//               style={styles.shapes}
//             />
//             <img
//               src="https://media.istockphoto.com/id/1686497935/photo/business-man-running-on-arrow-shaped-bridge-to-the-light.jpg?s=612x612&w=0&k=20&c=vaKIx8gelKmSGvWIAgTCH_2XjU5vSJkTsvFwObWJcVw="
//               alt="Hero Image"
//               style={styles.img}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;

import React from "react";

const HeroBanner = () => {
  const styles = {
    banner: {
      backgroundColor: "#244034",
      color: "white",
      position: "relative",
      zIndex: 9,
      padding: "50px 0",
      width: "100%", // Full width of the screen
    },
    container: {
      maxWidth: "1200px", // Keeps content within bounds
      margin: "0 auto",
      padding: "0 15px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr", // Two columns: text and image
      gap: "20px",
      alignItems: "center",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    header: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      lineHeight: 1.2,
    },
    highlight: {
      color: "#d2f34c",
    },
    description: {
      fontSize: "1.2rem",
      color: "#ffffffb3",
      marginTop: "20px",
      marginBottom: "30px",
    },
    inputBox: {
      position: "relative",
      marginBottom: "15px",
    },
    label: {
      fontSize: "0.9rem",
      marginBottom: "5px",
      display: "block",
      color: "grey",
    },
    select: {
      width: "100%",
      padding: "10px",
      background: "#ffffff",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
    },
    searchBtn: {
      backgroundColor: "#ffc107",
      color: "#244034",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      fontWeight: "bold",
      cursor: "pointer",
      height: "70%",
      textTransform: "uppercase",
      transition: "all 0.3s",
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      marginTop: "20px",
      padding: 0,
    },
    tagItem: {
      marginRight: "10px",
    },
    tagLink: {
      color: "#ffc107",
      textDecoration: "none",
    },
    imageBox: {
      position: "relative",
      textAlign: "center",
    },
    img: {
      width: "100%",
      borderRadius: "8px",
    },
  };

  return (
    <div style={styles.banner}>
      <div style={styles.container}>
        {/* Left Column: Text and Search */}
        <div style={styles.textContainer}>
          <h1 style={styles.header}>
            Find & Hire{" "}
            <span style={styles.highlight}>
              Connecting Talent with Opportunity – Find Your Perfect Job or Ideal Candidate Today!
            </span>
          </h1>
          <p style={styles.description}>
            We deliver blazing fast & striking work solutions.
          </p>

          <div className="job-search-one">
            <form action="/job-grid-v1">
              <div className="row">
              <div style={{ display: "flex", gap: "20px", alignItems: "center", }}>
  {/* First Search Bar */}
  <div style={{ flex: "1" }}>
    <div style={styles.inputBox}>
      <label style={styles.label}>What are you looking for?</label>
      <select style={styles.select}>
        <option value="1">UI Designer</option>
        <option value="2">Content Creator</option>
        <option value="3">Web Developer</option>
        <option value="4">SEO Guru</option>
        <option value="5">Digital Marketer</option>
      </select>
    </div>
  </div>

  {/* Second Search Bar */}
  <div style={{ flex: "1" }}>
    <div style={styles.inputBox}>
      <label style={styles.label}>Category</label>
      <select style={styles.select}>
        <option value="1">Web Design</option>
        <option value="2">Design & Creative</option>
        <option value="3">IT & Development</option>
        <option value="4">Web & Mobile Dev</option>
        <option value="5">Writing</option>
        <option value="6">Sales & Marketing</option>
        <option value="7">Music & Audio</option>
      </select>
    </div>
  </div>

  {/* Search Button */}
  <div>
    <button
      style={styles.searchBtn}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#e0a800")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#d2f34c")}
    >
      Search
    </button>
  </div>
</div>
              </div>
            </form>

          </div>
        </div>

        {/* Right Column: Image */}
        <div style={styles.imageBox}>
          <img
            src="https://media.istockphoto.com/id/1472359066/photo/survey-form-check-marks-on-checklist-filling-online-form-and-answering-questions-concept.jpg?s=1024x1024&w=is&k=20&c=Sffn9LQq2qK4tQm0APuanrUb0alk7DZy_KNDlduruQg="
            alt="Hero Image"
            style={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
