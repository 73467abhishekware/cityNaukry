// import React from "react";

// const Categories = () => {
//   const categories = [
//     { title: "UI/UX Design", jobs: "12k+", icon: "icon_01.svg" },
//     { title: "Development", jobs: "8k+", icon: "icon_02.svg" },
//     { title: "Marketing", jobs: "10k+", icon: "icon_03.svg" },
//     { title: "Telemarketing", jobs: "6k+", icon: "icon_04.svg" },
//     { title: "Editing", jobs: "7k+", icon: "icon_05.svg" },
//     { title: "Accounting", jobs: "17k+", icon: "icon_06.svg" },
//   ];

//   const styles = {
//     section: {
//       padding: "80px 20px",
//       backgroundColor: "#f2f9d8",
//       textAlign: "center",
//     },
//     container: {
//       maxWidth: "1200px",
//       margin: "0 auto",
//     },
//     header: {
//       marginBottom: "40px",
//     },
//     title: {
//       fontSize: "2.5rem",
//       marginBottom: "10px",
//       color: "#333",
//     },
//     highlight: {
//       color: "#198754",
//     },
//     paragraph: {
//       fontSize: "1.1rem",
//       color: "#666",
//     },
//     cardContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "20px",
//     },
//     card: {
//       background: "white",
//       borderRadius: "16px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       padding: "20px",
//       width: "200px",
//       textAlign: "center",
//        height: "300px",
//       transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     },
//     cardHover: {
//       transform: "translateY(-10px)",
//       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
//     },
//     icon: {
//       marginBottom: "10px",
//     },
//     iconImage: {
//       width: "50px",
//       height: "50px",
//     },
//     cardTitle: {
//       fontSize: "1.2rem",
//       fontWeight: "500",
//       color: "#333",
//       marginBottom: "5px",
//     },
//     cardJobs: {
//       fontSize: "1rem",
//       color: "#666",
//     },
//     cta: {
//       marginTop: "40px",
//     },
//     button: {
//       display: "inline-block",
//       padding: "10px 20px",
//       backgroundColor: "#198754",
//       color: "white",
//       textDecoration: "none",
//       borderRadius: "5px",
//       transition: "background-color 0.3s ease",
//     },
//     buttonHover: {
//       backgroundColor: "#145c42",
//     },
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <div style={styles.header}>
//           <h2 style={styles.title}>
//             Most <span style={styles.highlight}>Demanding Categories</span>.
//           </h2>
//           <p style={styles.paragraph}>
//             Together with useful notifications, collaboration, insights, and
//             improvement tips.
//           </p>
//         </div>
//         <div style={styles.cardContainer}>
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               style={styles.card}
//               onMouseOver={(e) => {
//                 Object.assign(e.currentTarget.style, styles.cardHover);
//               }}
//               onMouseOut={(e) => {
//                 Object.assign(e.currentTarget.style, styles.card);
//               }}
//             >
//               <div style={styles.icon}>
//                 <img
//                   src={`/assets/images/icon/${category.icon}`}
//                   alt={category.title}
//                   style={styles.iconImage}
//                 />
//               </div>
//               <div style={styles.cardTitle}>{category.title}</div>
//               <div style={styles.cardJobs}>{category.jobs} Jobs</div>
//             </div>
//           ))}
//         </div>
//         <div style={styles.cta}>
//           <a
//             href="/job-grid-v1"
//             style={styles.button}
//             onMouseOver={(e) => {
//               e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
//             }}
//             onMouseOut={(e) => {
//               e.target.style.backgroundColor = styles.button.backgroundColor;
//             }}
//           >
//             Explore all fields
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;

import React from "react";
import { FaPaintBrush, FaCode, FaBullhorn, FaPhoneAlt, FaEdit, FaCalculator } from "react-icons/fa";

const Categories = () => {
  const categories = [
    { title: "UI/UX Design", jobs: "12k+", icon: <FaPaintBrush size={50} color="#198754" /> },
    { title: "Development", jobs: "8k+", icon: <FaCode size={50} color="#198754" /> },
    { title: "Marketing", jobs: "10k+", icon: <FaBullhorn size={50} color="#198754" /> },
    { title: "Telemarketing", jobs: "6k+", icon: <FaPhoneAlt size={50} color="#198754" /> },
    { title: "Editing", jobs: "7k+", icon: <FaEdit size={50} color="#198754" /> },
    { title: "Accounting", jobs: "17k+", icon: <FaCalculator size={50} color="#198754" /> },
  ];

  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#f2f9d8",
      textAlign: "center",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      marginBottom: "40px",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "10px",
      color: "#333",
    },
    highlight: {
      color: "#198754",
    },
    paragraph: {
      fontSize: "1.1rem",
      color: "#666",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "nowrap", // This ensures the cards stay in one row
      overflowX: "auto", // Adds horizontal scrolling if the cards overflow
    },
    card: {
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "50px",
      width: "200px",
      textAlign: "center",
      height: "300px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "translateY(-10px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
    icon: {
      marginBottom: "20px",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "#333",
      marginBottom: "10px",
    },
    cardJobs: {
      fontSize: "1rem",
      color: "#666",
    },
    cta: {
      marginTop: "40px",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#198754",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#145c42",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            Most <span style={styles.highlight}>Demanding Categories</span>.
          </h2>
          <p style={styles.paragraph}>
            Together with useful notifications, collaboration, insights, and
            improvement tips.
          </p>
        </div>
        <div style={styles.cardContainer}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseOver={(e) => {
                Object.assign(e.currentTarget.style, styles.cardHover);
              }}
              onMouseOut={(e) => {
                Object.assign(e.currentTarget.style, styles.card);
              }}
            >
              <div style={styles.icon}>
                {category.icon}
              </div>
              <div style={styles.cardTitle}>{category.title}</div>
              <div style={styles.cardJobs}>{category.jobs} Jobs</div>
            </div>
          ))}
        </div>
        <div style={styles.cta}>
          <a
            href="/job-grid-v1"
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
            }}
          >
            Explore all fields
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
