import "./App.css";
import Alert from "./ui/Alert";
// import About from "./ui/About";
import Navbar from "./ui/Navbar";
import Textform from "./ui/Textform";
import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Myview from "./ui/Myview";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const tmode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} tmode={tmode} />
      <Alert alert={alert} />
      <Textform
        heading="Enter your text below"
        showAlert={showAlert}
        mode={mode}
      />
    </>
    // <BrowserRouter>

    //   <div className="container my-3">
    //     <Routes>
    //       <Route
    //         path="/about"
    //         element={<About />}
    //       />
    //       <Route
    //         path="/myview"
    //         element={<Myview />}
    //       />
    //       <Route
    //         path="/"
    //         element={
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;

// for use of route :

// import { BrowserRouter,Route,Routes } from "react-router-dom";

// return{
//   <BrowserRouter>
//     <Routes>
//       <Route
//         path = "/"
//         element={<Textform/>} any page name where you want to redirect your page.
//       />
//       <Route
//         path = "/"
//         element={<Myview/>}
//       />
//     </Routes>
//   </BrowserRouter>
// }
