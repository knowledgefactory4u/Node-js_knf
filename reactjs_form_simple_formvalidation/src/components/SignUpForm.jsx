import React from 'react';
import './style.css';


class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
  };
  onChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  submitRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      fields["confirmPassword"] = "";
      this.setState({ fields: fields });
      alert("Ready to call server API")
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }
    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }
    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }
    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }
    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^[A-Z]*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Please enter your password.";
    }
    if (fields["confirmPassword"]!=fields["password"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Password Mismatch";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>SingUp Form</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.submitRegistrationForm} >
            <label>Name</label>
            <input type="text" name="username" value={this.state.fields.username} onChange={this.onChange} />
            <div className="errorMsg">{this.state.errors.username}</div>
            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.onChange} />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            <label>Mobile No:</label>
            <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.onChange} />
            <div className="errorMsg">{this.state.errors.mobileno}</div>
            <label>Password</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.onChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={this.state.fields.confirmPassword} onChange={this.onChange} />
            <div className="errorMsg">{this.state.errors.confirmPassword}</div>
            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>

    );
  }
}
export default SignUpForm;