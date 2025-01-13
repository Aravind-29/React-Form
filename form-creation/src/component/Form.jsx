import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone } = formData;

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    setError("");
    setSubmittedData({ firstName, lastName, phone });
    setFormData({ firstName: "", lastName: "", phone: "" });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="title">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="title">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }} className="submitdetails">
          <h3>Submitted Details</h3>
          <p>
            <strong>First Name:</strong> {submittedData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {submittedData.lastName}
          </p>
          <p>
            <strong>Phone Number:</strong> {submittedData.phone}
          </p>
        </div>
      )}
    </div>
  );
};
export default Form;
