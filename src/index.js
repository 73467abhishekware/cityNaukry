

// import React from "react";
// import ReactDOM from "react-dom";
// import { RouterProvider } from "react-router-dom";
// import customRouter from "./components/Routing";


// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={customRouter} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );




import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import customRouter from "./components/Routing";
import { SessionProvider } from "./components/SessionContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SessionProvider>
      <RouterProvider router={customRouter} />
    </SessionProvider>
  </React.StrictMode>
);



// import React from "react";
// import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
// import { RouterProvider } from "react-router-dom";
// import customRouter from "./components/Routing";

// // Create root using the new createRoot API
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Render the app using root.render() method
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={customRouter} />
//   </React.StrictMode>
// );
