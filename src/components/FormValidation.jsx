import "../components/FormValidation.css";
import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firsName:'',
    lastName:'',
    email:'',
    message:''
    
  });

  function handleInputChange(event){
    const{name,value} = event.target;
    setFormData({...formData, [name]: value});

  };

  function handleSubmit(event){
    // event.preventDefault();
    console.log(formData)
  }

  return (
    <>
      <div className="main_container">
        <form onSubmit={handleSubmit}>
          <div className="names_div">
            <div className="first_name">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="name_email"
                value={formData.firsName}
                id="name"
                onChange={handleInputChange}
                name="name"
                required
              />{" "}
              <br />
            </div>
            <div className="last_name">
              <label htmlFor="lastName">Last Name </label>
              <input
                type="text"
                value={formData.lastName}
                className="name_email"
                onChange={handleInputChange}
                id="name"
                name="name"
                required
              />
            </div>
          </div>
          <label htmlFor="email"> Email Address</label>
          <input
            type="email"
            className="name_email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            required
          />{" "}
          <br />
          <label htmlFor="query type">Query Type</label>
          <div className="click_me">
            <div className="general">
              <input type="radio" /> <span>General Enquiry</span>
            </div>
            <div className="support">
              <input type="radio" required /> <span>Support Request</span>
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            className="text_area"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            id="message"
            required
          ></textarea>
          <div className="check_box">
            <input type="checkbox" />{" "}
            <label className="consent" htmlFor="checkbox">
              I consent to being contacted by the team
            </label>
          </div>
          <input type="submit" className="submit" value="submit" />
        </form>
      </div>
    </>
  );
};
export default FormValidation;
