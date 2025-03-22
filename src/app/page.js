"use client"
import React, { useState } from "react";
import "./globals.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h2 className="title">Create your PopX account</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number*"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address*"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
            className="input"
          />
          <div className="radio-group">
            <span>Are you an Agency?*</span>
            <label>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
