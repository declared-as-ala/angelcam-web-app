// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNotExist from "./PageNotExist";
import { UserProvider } from "./context.jsx";
import { useUser } from "./context.jsx";
import "./index.css";
const Root = () => {
  const { user } = useUser();

  return (
    <React.StrictMode>
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route path="*" element={<Navigate to="/page-not-exist" replace />} />
          {user ? (
            <>
              <Route path="/" element={<App />} />
              <Route path="/page-not-exist" element={<PageNotExist />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/page-not-exist" element={<PageNotExist />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <Root />
  </UserProvider>
);
