import React, { useContext, useState } from "react";
import "./login.styles.css";
import Joi from "joi";
import Users from "../../api/users";
import UserContext from "../../contexts/user/user.context";

const schema = Joi.object({
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } }),
  password: Joi.string().required().max(128).min(6),
  saveMe: Joi.boolean(),
});

interface FormProperties {
  email: string;
  password: string;
  saveMe: boolean;
}

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const { user, setCurrentUser } = useContext(UserContext);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
      saveMe: { checked: boolean };
    };

    const formData: FormProperties = {
      email: target.email.value,
      password: target.password.value,
      saveMe: target.saveMe.checked,
    };

    var { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      let emailErrors: string[] = [];
      let passwordErrors: string[] = [];

      for (let item of error.details) {
        if (item.path[0] === "email") emailErrors.push(item.message);
        else passwordErrors.push(item.message);
      }

      setEmailError(emailErrors.join(", "));
      setPasswordError(passwordErrors.join(", "));

      return;
    }

    try {
      const user = await Users.login(
        formData.email,
        formData.password,
        formData.saveMe
      );
      setCurrentUser(user);
    } catch (e) {
      setFormError(e.message);
    }
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="box col-12 col-md-6">
          <div className=" col-8">
            <div className="heading">
              <b>SocialHub</b>
            </div>
            <h3>
              Best place for sharing your thoughts with your friends and world
              around you
            </h3>
          </div>
        </div>
        <div className="box col-sm-12 col-md-6">
          <div className="card col-8">
            <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
              <div className="container">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                  ></input>
                  <p className="text-danger">{emailError}</p>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                  ></input>
                  <p className="text-danger">{passwordError}</p>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="saveMe"
                  ></input>
                  <label className="form-check-label" htmlFor="saveMe">
                    Save me
                  </label>
                </div>
                <hr></hr>
                <p className="text-danger">{formError}</p>
                <button type="submit" className="btn btn-primary btn-lg col-12">
                  <b>Log In</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
