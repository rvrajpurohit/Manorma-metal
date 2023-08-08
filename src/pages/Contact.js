import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    enquiry: "",
    needs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle the form submission, e.g., send data to a backend server or an API.
    console.log("Form data:", formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__container">
        {/* Left Side - Contact Form */}
        <div className="contact-card">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enquiry">Enquiry</label>
              <textarea
                id="enquiry"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="needs">What You Need</label>
              <textarea
                id="needs"
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Right Side - Company Contact Information */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <h3>Manorma Metal</h3>
          <p>Shop no. 4, Second Floor</p>
          <p>Ekta Complex, nr. Ajay Estate</p>
          <p> Rakhiyal, Ahmedabad, Gujrat(380023)</p>
          <a href="https://www.google.com/">
            <p>Email: manormametal2020@gmail.com</p>
          </a>
          <a href="tel: 07990685090">
            <p>Phone: +91-7990685090</p>
          </a>
          <h3>here is location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389.9592263378087!2d72.63073918863255!3d23.014294765002408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e866500e78f2b%3A0x48e5f29d1041fbfb!2sKeval%20Kanta%20Rd%2C%20Rakhial%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1691249246268!5m2!1sen!2sin"
            width="300"
            height="250"
            style={{border:'0'}}
            allowFullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
