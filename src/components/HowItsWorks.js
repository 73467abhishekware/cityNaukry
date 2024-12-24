// import React from 'react';

// const HowItWorks = () => {
//   return (
//     <section 
//       style={{
//         position: 'relative',
//         backgroundColor: 'white',
//         paddingTop: '110px',
//         paddingBottom: '110px',
//       }}
//     >
//       <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
//         <div 
//           style={{
//             textAlign: 'center',
//             marginBottom: '65px',
//             marginTop: '40px',
//           }}
//         >
//           <h2 style={{ color: 'black' }}>
//             How it’s 
//             <span 
//               style={{
//                 position: 'relative',
//               }}
//             >
//               work? 
//               <img 
//                 src="/assets/images/shape/shape_07.svg" 
//                 alt="" 
//                 style={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                 }} 
//               />
//             </span>
//           </h2>
//         </div>
//         <div 
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             flexWrap: 'wrap',
//             gap: '30px',
//           }}
//         >
//           <div 
//             style={{
//               width: '25%',
//               marginBottom: '25px',
//               textAlign: 'center',
//               animation: 'fadeInUp 1s',
//             }}
//           >
//             <div 
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: 'auto',
//                 width: '80px',  // Set a fixed width
//                 height: '80px', // Set a fixed height
//                 borderRadius: '50%', // Ensure it's circular
//                 background: 'pink',
//                 padding: '70px',
//               }}
//             >
//               <img 
//                 src="/assets/images/icon/icon_08.svg" 
//                 alt="" 
//                 style={{ maxWidth: '20px' }} 
//               />
//             </div>
//             <div 
//               style={{
//                 fontWeight: '500',
//                 color: 'black',
//                 marginTop: '15px',
//               }}
//             >
//               Create Account
//             </div>
//             <p style={{ color: 'black' }}>
//               It’s very easy to open an account and start your journey.
//             </p>
//           </div>
//           <div 
//             style={{
//               width: '25%',
//               marginBottom: '25px',
//               textAlign: 'center',
//               position: 'relative',
//               animation: 'fadeInUp 1s 0.1s',
//             }}
//           >
//             <div 
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: 'auto',
//                 width: '80px',  // Set a fixed width
//                 height: '80px', // Set a fixed height
//                 borderRadius: '50%', // Ensure it's circular
//                 background: 'pink',
//                 padding: '70px',
//               }}
//             >
//               <img 
//                 src="/assets/images/icon/icon_09.svg" 
//                 alt="" 
//                 style={{ maxWidth: '40px' }} 
//               />
//             </div>
//             <div 
//               style={{
//                 fontWeight: '500',
//                 color: 'black',
//                 marginTop: '15px',
//               }}
//             >
//               Complete your profile
//             </div>
//             <p style={{ color: 'black' }}>
//               Complete your profile with all the info to get attention of client.
//             </p>
//           </div>
//           <div 
//             style={{
//               width: '25%',
//               marginBottom: '25px',
//               textAlign: 'center',
//               animation: 'fadeInUp 1s 0.19s',
//             }}
//           >
//             <div 
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: 'auto',
//                 width: '80px',  // Set a fixed width
//                 height: '80px', // Set a fixed height
//                 borderRadius: '50%', // Ensure it's circular
//                 background: 'pink',
//                 padding: '70px',
//               }}
//             >
//               <img 
//                 src="/assets/images/icon/icon_10.svg" 
//                 alt="" 
//                 style={{ maxWidth: '40px' }} 
//               />
//             </div>
//             <div 
//               style={{
//                 fontWeight: '500',
//                 color: 'black',
//                 marginTop: '15px',
//               }}
//             >
//               Apply job or hire
//             </div>
//             <p style={{ color: 'black' }}>
//               Apply & get your preferable jobs with all the requirements and get it.
//             </p>
//           </div>
//         </div>
//         <img 
//           src="/assets/images/shape/shape_08.svg" 
//           alt="" 
//           style={{
//             position: 'absolute',
//             bottom: '0',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             maxWidth: '100%',
//             zIndex: '-1',
//           }}
//         />
//         <img 
//           src="/assets/images/shape/shape_09.svg" 
//           alt="" 
//           style={{
//             position: 'absolute',
//             bottom: '0',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             maxWidth: '100%',
//             zIndex: '-1',
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import React, { useEffect, useState } from 'react';
import { IoCreate } from "react-icons/io5";
const HowItWorks = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.4 } // Trigger when 10% of the element is visible
    );

    const sectionElement = document.querySelector('.how-it-works-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section 
      className="how-it-works-section"
      style={{
        position: 'relative',
        backgroundColor: 'white',
        paddingTop: '110px',
        paddingBottom: '110px',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '65px',
            marginTop: '40px',
          }}
        >
          <h2 style={{ color: 'black' }}>
            How it’s 
            <span 
              style={{
                position: 'relative',
              }}
            >
              work? 
              <img 
                src="/assets/images/shape/shape_07.svg" 
                alt="" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }} 
              />
            </span>
          </h2>
        </div>
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          <div 
            className={`fadeInElement ${inView ? 'in-view' : ''}`}
            style={{
              width: '25%',
              marginBottom: '25px',
              textAlign: 'center',
              animation: inView ? 'fadeInUp 1s' : 'none',
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'pink',
                padding: '70px',
              }}
            >
              <img 
                src="/assets/images/icon/icon_08.svg" 
                alt="" 
                style={{ maxWidth: '20px' }} 
              />
            </div>
            <div 
              style={{
                fontWeight: '500',
                color: 'black',
                marginTop: '15px',
              }}
            >
             <h4> Create Account</h4>
            </div>
            <p style={{ color: 'black' }}>
              It’s very easy to open an account and start your journey.
            </p>
          </div>
          <div 
            className={`fadeInElement ${inView ? 'in-view' : ''}`}
            style={{
              width: '25%',
              marginBottom: '25px',
              textAlign: 'center',
              position: 'relative',
              animation: inView ? 'fadeInUp 1s' : 'none',
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'pink',
                padding: '70px',
              }}
            >
              <IoCreate />
            </div>
            <div 
              style={{
                fontWeight: '500',
                color: 'black',
                marginTop: '15px',
              }}
            >
              <h4>Complete your profile</h4>
            </div>
            <p style={{ color: 'black' }}>
              Complete your profile with all the info to get attention of client.
            </p>
          </div>
          <div 
            className={`fadeInElement ${inView ? 'in-view' : ''}`}
            style={{
              width: '25%',
              marginBottom: '25px',
              textAlign: 'center',
              animation: inView ? 'fadeInUp 1s' : 'none',
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'pink',
                padding: '70px',
              }}
            >
              <img 
                src="/assets/images/icon/icon_10.svg" 
                alt="" 
                style={{ maxWidth: '40px' }} 
              />
            </div>
            <div 
              style={{
                fontWeight: '500',
                color: 'black',
                marginTop: '15px',
              }}
            >
             <h4> Apply job or hire</h4>
            </div>
            <p style={{ color: 'black' }}>
              Apply & get your preferable jobs with all the requirements and get it.
            </p>
          </div>
        </div>
        <img 
          src="/assets/images/shape/shape_08.svg" 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '100%',
            zIndex: '-1',
          }}
        />
        <img 
          src="/assets/images/shape/shape_09.svg" 
          alt="" 
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '100%',
            zIndex: '-1',
          }}
        />
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fadeInElement.in-view {
            animation: fadeInUp 1s forwards;
          }
        `}
      </style>
    </section>
  );
};

export default HowItWorks;
