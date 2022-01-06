import { useState } from "react";
import "./App.css";


function App() {

    
const intializeValues = {
  name: "",
  email: "",
  mobile: "",
  country: "",
  city: "",
  state: "",
  message: ""
}
  const errorValue = {
    nameErr: null,
    emailErr: null,
    mobileErr: null,
    cityErr: null,
    msgErr: null
  }



  const [values, setValues] = useState(intializeValues);
  const [errors, setErrors] = useState(errorValue); 
  const [isValid, setIsValid] = useState(false) 

  const handleInputChange = (e) => { 
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
 
  };

  const validate = () => {
    let nameErr = "";
    let cityErr = "";
    let mobileErr = "";
    let emailErr = "";
    let msgErr = "";
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mobileReg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
     
    if (!values.name) {
      nameErr = "Name field is required";
    }
    if (!values.city) {
      cityErr = "City field is required";
    }
    if (!values.message) {
      msgErr = "Message field is required";
    }
    if (!values.email || emailReg.test(values.email) === false) {
      emailErr = "Email Field is Invalid ";
    }
    if (!values.mobile || mobileReg.test(values.mobile) === false) {
      mobileErr = "Mobile Number Invalid";
    } 
    if (nameErr || emailErr || mobileErr || msgErr || cityErr) {
      setErrors({ nameErr, emailErr, mobileErr, cityErr, msgErr });  
      setIsValid(false);  
      return false
    } 
    setErrors(errorValue);   
    return true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
   
    if (validate()) {
      setIsValid(true);
      setValues(intializeValues);
    }
  }

  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-4 left__section">
          <div className="contact-info">
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h2>Get In Touch</h2>
            <h4>We would love to hear from you !</h4>
          </div>
        </div>
        <div className="col-md-8 right__section">
          <div className="contact-form">
          <form>
            <div className="form-group">
              <label className="control-label col-sm-2">Name *</label>
              <div className="col-sm-12">
                <input
                  type="text"
                  className={`form-control ${errors?.nameErr?.length && 'error'}`}
                    placeholder="Enter First Name"
                    name="name" 
                  value={values.name}
                  onChange={handleInputChange}
                  />
                   <span className="text-danger">{errors?.nameErr}</span>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2">Email * </label>
              <div className="col-sm-12">
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    className={`form-control ${errors?.emailErr?.length && 'error'}`}
                  placeholder="Enter email"
                  onChange={handleInputChange}
                  /> 
                      <span className="text-danger">{errors?.emailErr}</span>  
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2">Mobile *</label>
              <div className="col-sm-12">
                <input
                    type="number"
                    name="mobile"
                    value={values.mobile}
                    className={`form-control ${errors?.mobileErr?.length && 'error'}`}
                  placeholder="Enter Mobile"
                  onChange={handleInputChange}
                />
              <span className="text-danger">{errors?.mobileErr}</span>  
              </div>
            </div>
            <div className="row form-group">
              <div className="col">
                <label className="control-label col-sm-2">City:</label>
                <input
                    type="text"
                    name="city"
                    value={values.city}
                    className={`form-control ${errors?.cityErr?.length && 'error'}`}    
                  placeholder="Enter City"
                  onChange={handleInputChange}
                  />
                     <span className="text-danger">{errors.cityErr}</span>  
              </div>
              <div className="col">
                <label className="control-label col-sm-2">Country</label>
                <input
                    type="text"
                    name="country"
                    value={values.country}
                  className="form-control"
                  placeholder="Enter Country"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label className="control-label col-sm-2">State:</label>
                <input
                    type="text"
                    name="state"
                    value={values.state}
                  className="form-control"
                  placeholder="Enter State"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2">Message*</label>
              <div className="col-sm-12">
                <textarea
                    className={`form-control ${errors?.msgErr?.length && 'error'}`}    
                    name="message"
                    value={values.message}
                  rows={3}
                  onChange={handleInputChange}
                  />
                     <span className="text-danger">{errors.msgErr}</span>  
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-12">
                <button type="button" onClick={submitHandler} className="btn btn-default">
                  Submit
                </button>
              </div>
              </div>
              {
                isValid && (
                  <div className="alert alert-success fade show" role="alert">
                    <strong>Form Submitted</strong> Successfully. 
                </div>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
