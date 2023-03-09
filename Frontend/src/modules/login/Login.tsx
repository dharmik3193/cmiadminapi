import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { setWindowClass } from '@app/utils/helpers';
import { PfButton, PfCheckbox } from '@profabric/react-components';
import * as Yup from 'yup';
import { Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [isAuthLoading, setAuthLoading] = useState(false);

  const [t] = useTranslation();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    axios.post('http://localhost:8000/login', {
      email: email,
      password: password
    })
      .then(function (res) {
        console.log(res);
        if(res.data.isloggedin)
        {
          toast.success("Login Successfull")
          navigate('/');
          sessionStorage.setItem("user_name",res.data.user_name)
          sessionStorage.setItem("isLoggedin",true)
        }else{
          toast.error("Please Enter Valid Credentials")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  const { handleChange, values, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required')
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
      console.log(values.email, values.password);

    }
  });

  setWindowClass('hold-transition login-page');

  return (
    <div className="login-box">
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <Link to="/" className="h1">
            {/* <b>CMI</b>
            <span>Management</span> */}
            CMI Management
          </Link>
        </div>
        <div className="card-body">
          <p className="login-box-msg">{t<string>('login.label.signIn')}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                />
                {touched.email && errors.email ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                ) : (
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <i className="fas fa-envelope" />
                    </InputGroup.Text>
                  </InputGroup.Append>
                )}
              </InputGroup>
            </div>
            <div className="mb-3">
              <InputGroup className="mb-3">
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  isValid={touched.password && !errors.password}
                  isInvalid={touched.password && !!errors.password}
                />
                {touched.password && errors.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : (
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <i className="fas fa-lock" />
                    </InputGroup.Text>
                  </InputGroup.Append>
                )}
              </InputGroup>
            </div>

            <div className="row">
              <div className="col-8">
                <PfCheckbox checked={false}>
                  {t<string>('login.label.rememberMe')}
                </PfCheckbox>
              </div>
              <div className="col-4">
                <PfButton
                  block
                  type="submit"
                  loading={isAuthLoading}
                // disabled={isFacebookAuthLoading || isGoogleAuthLoading}
                >
                  {t<string>('login.button.signIn.label')}
                </PfButton>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mt-2 mb-3">
            {/* <PfButton
              block
              className="mb-2"
              onClick={loginByFacebook}
              loading={isFacebookAuthLoading}
              disabled={isAuthLoading || isGoogleAuthLoading}
            >
              <i className="fab fa-facebook mr-2" />
              {t<string>('login.button.signIn.social', {
                what: 'Facebook'
              })}
            </PfButton> */}
            {/* <PfButton
              block
              theme="danger"
              onClick={loginByGoogle}
              loading={isGoogleAuthLoading}
              disabled={isAuthLoading || isFacebookAuthLoading}
            >
              <i className="fab fa-google mr-2" />
              {t<string>('login.button.signIn.social', {what: 'Google'})}
            </PfButton> */}
          </div>
          {/* <p className="mb-1">
            <Link to="/forgot-password">
              {t<string>('login.label.forgotPass')}
            </Link>
          </p>
          <p className="mb-0">
            <Link to="/register" className="text-center">
              {t<string>('login.label.registerNew')}
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
