// src/PageNotExist.js
import React from "react";

const PageNotExist = () => {
  return (
    <main className="login-section">
      <div className="login-form">
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <a href="/" className="btn">
          Go to Homepage
        </a>
      </div>
    </main>
  );
};

export default PageNotExist;
