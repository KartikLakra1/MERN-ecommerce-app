import React, { useState, useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setcount] = useState(5);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prevValue) => --prevValue);
    }, 1000);

    count === 0 && navigate("/login" , {
        state : location.pathname,
    });
    return () => clearInterval(interval);
  }, [count, navigate , location]);

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}>
        <h1 className="text-center">Redirecting to you in {count} seconds</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
