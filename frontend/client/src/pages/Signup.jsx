// import { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
const API = import.meta.env.VITE_API_URL;

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (toast) {
      const timerId = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${API}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setToast({ message: "Signup successfully", type: "success" });

      setTimeout(() => {
        (navigate("/login"), 2000);
      });
    } catch (err) {
      setToast({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center  my-20">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">New Here!? Register Yourself</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder="Enter your name here"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label" htmlFor="name">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="input"
                placeholder="Enter your email here"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label" htmlFor="name">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Enter your password here"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </fieldset>

            <div className="card-actions justify-center mt-5 ">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Taking you there..." : "Sign up"}
              </button>
            </div>

            <div className="text-center mt-4 text-sm">
              <span className="text-gray-500">Already have an account? </span>
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {toast && (
        <div className="toast toast-end">
          <div
            className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
