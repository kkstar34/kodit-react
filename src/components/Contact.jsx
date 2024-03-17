import React from 'react'

function Contact() {
  return (
    <div className='contact-form' id='contact-form'>
    <div className='container mb-3'>
        <h1 className="mb-4 text-center">Start Building</h1>
        <form>
            <div className="row mb-3">
                <div className="col">
                    <div className="form-group" controlId="formFirstName">
                        <label className="form-label">First Name *</label>
                        <input className="form-control" type="text" name="firstName" required />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group" controlId="formLastName">
                        <label className="form-label">Last Name *</label>
                        <input className="form-control" type="text" name="lastName" required />
                    </div>
                </div>
            </div>

            <div className=" row mb-3">
                <div className="col">
                    <div className="form-group" controlId="formEmail">
                        <label className="form-label">Email Address *</label>
                        <input className="form-control" type="email" name="email" required />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group" controlId="formPhone">
                        <label className="form-label">Phone Number *</label>
                        <input className="form-control" type="text" name="phone" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="form-group" controlId="formService">
                        <label className="form-label">Service *</label>
                        <select className="form-select" as="select" name="service" required>
                            <option value="">Select a service</option>
                            <option>Social Media Management</option>
                            <option>Web Development</option>
                            <option>Software Development</option>
                            <option>Branding & Design</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="form-group mb-3 " controlId="formMessage">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" name="message" placeholder="Maximum 200 characters"
                    maxLength={200}>
        </textarea>
            </div>

            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    </div>
</div>
  )
}

export default Contact