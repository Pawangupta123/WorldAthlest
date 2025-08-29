import React from "react";

function Contect() {
  const handleFormSubmit = (formData) => {
    console.log(formData.entries());
    const res = Object.fromEntries(formData.entries());
    console.log(res);
  };
  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact us</h2>
        <div className="contact-wrapper">
          <form action={handleFormSubmit}>
            <input
              type="text"
              required
              autoComplete="false"
              placeholder="Enter your Name "
              name="username"
            />
            <input
              type="email"
              className="form-control"
              required
              autoComplete="false"
              placeholder="Enter your email "
              name="email"
            />
            <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="false"
            />
            <button type="submit" value="send">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contect;
