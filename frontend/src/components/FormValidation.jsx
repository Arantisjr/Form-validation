import "./FormValidation.css";
import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    queryType: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),

    });
    const results = await res.json();
       console.log(results);
    setFormData(
      {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    queryType: ''
      }
    )
       
  }catch(error){
    console.error('Error submitting form', error)
  }
 }

  return (
    <div className="main_container">
      <form onSubmit={handleSubmit} method="post" >
        <div className="names_div">
          <div className="first_name">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="name_email"
              value={formData.firstName}  
              id="firstName"
              onChange={handleInputChange}
              name="firstName"
              required
            />
          </div>

          <div className="last_name">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="name_email"
              value={formData.lastName}
              id="lastName"
              onChange={handleInputChange}
              name="lastName"
              required
            />
          </div>
        </div>

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="name_email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          required
        />

        <label>Query Type</label>
        <div className="click_me">
          <div className="general">
            <input
              type="radio"
              name="queryType"
              value="general"
              onChange={handleInputChange}
              checked={formData.queryType === "general"}
              required
            />
            <span>General Enquiry</span>
          </div>
          <div className="support">
            <input
              type="radio"
              name="queryType"
              value="support"
              onChange={handleInputChange}
              checked={formData.queryType === "support"}
              required
            />
            <span>Support Request</span>
          </div>
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          className="text_area"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <div className="check_box">
          <input type="checkbox" id="consent" />
          <label className="consent" htmlFor="consent">
            I consent to being contacted by the team
          </label>
        </div>

        <input type="submit" className="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormValidation;
