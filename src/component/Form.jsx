import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    role: "",
    company: "",
    experience: "",
    skills: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // ✅ fixed
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please accept terms and conditions ✅");
      return;
    }

    setSubmitted(true);
    console.log("Submitted Data:", formData);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Registration Form</h2>
        <p style={styles.subHeading}>Fill your form carefully</p>

        {submitted && (
          <div style={styles.successBox}>Form submitted successfully ✅</div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputBox}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Job Role</label>
            <input
              type="text"
              name="role"
              placeholder="Frontend Developer"
              value={formData.role}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Experience (Years)</label>
            <input
              type="number"
              name="experience"
              placeholder="0"
              value={formData.experience}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="React, JS, HTML, CSS..."
              value={formData.skills}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Country</label>
            <input
              type="text"
              name="country"
              placeholder="India"
              value={formData.country}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>State</label>
            <input
              type="text"
              name="state"
              placeholder="Telangana"
              value={formData.state}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>City</label>
            <input
              type="text"
              name="city"
              placeholder="Hyderabad"
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.fullWidth}>
            <label style={styles.label}>Address</label>
            <textarea
              name="address"
              placeholder="Enter full address"
              value={formData.address}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <div style={styles.inputBox}>
            <label style={styles.label}>Zip Code</label>
            <input
              type="text"
              name="zip"
              placeholder="500001"
              value={formData.zip}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.checkboxBox}>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              style={styles.checkbox}
            />
            <span style={styles.checkboxText}>
              I agree to the Terms & Conditions
            </span>
          </div>

          <button type="submit" style={styles.button}>
            Submit Form 
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "850px",
    background: "white",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "6px",
    color: "#333",
  },
  subHeading: {
    textAlign: "center",
    fontSize: "14px",
    marginBottom: "20px",
    color: "#666",
  },
  successBox: {
    background: "#d4edda",
    color: "#155724",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "6px",
    color: "#444",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
    minHeight: "90px",
    resize: "none",
  },
  fullWidth: {
    gridColumn: "1 / span 2",
    display: "flex",
    flexDirection: "column",
  },
  checkboxBox: {
    gridColumn: "1 / span 2",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "8px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
  },
  checkboxText: {
    fontSize: "14px",
    color: "#333",
  },
  button: {
    gridColumn: "1 / span 2",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
};

   