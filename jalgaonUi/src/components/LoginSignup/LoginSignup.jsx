import React, { useState, useContext, useEffect } from 'react';
import './LoginSignup.css';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { FormContext } from '../../context/FormContext';
import { UserContext } from '../../context/UserContext';
import { LoginContext } from '../../context/LoginContext';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({ baseURL: 'http://127.0.0.1:8000' });

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

function LoginSignup() {
  // const {  } = useContext(LoginContext);
  const { user, setUser, isLogin, setIsLogin } = useContext(UserContext);
  const { closeForm, setCloseForm } = useContext(FormContext);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isNumber, setIsNumber] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const getCsrfToken = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/app/csrf-token/');
        return response.data.csrfToken;
    } catch (error) {
        console.error('Error fetching CSRF token:', error);
        return '';
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const csrfToken = await getCsrfToken();

    try {
      const response = await axios.post('http://127.0.0.1:8000/app/register/', {
        phone_number: phoneNumber,
        password: userPassword
      });

      handleLoginSubmit(e)
    } 
    catch (error){
      console.error('Login failed', error);
    }
  
};

const handleLoginSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://127.0.0.1:8000/app/login/', {
      phone_number: phoneNumber,
      password: userPassword
    });

    const { user, token } = response.data;

    // Store the token in local storage
    setUser(user)
    setIsLogin(true)
    localStorage.setItem('token', token);
    console.log(token)
    console.log(user)
    // Optionally, you can store user info as well
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect or perform other actions after successful login
    console.log('Login successful', user);
    setCloseForm(true)
  } catch (error) {
    console.error('Login failed', error);
    // Handle login error (e.g., show an error message to the user)
  }


  try {
    const response = await axios.post('http://127.0.0.1:8000/app/tokenKey/', {
      phone_number: phoneNumber,
      password: userPassword
    });

    if (response.status === 200) {
        // Store token in localStorage
        localStorage.setItem('tokenKey', response.data.token);
        console.log('Token stored successfully:', response.data.token);
    } else {
        console.error('Error:', response.data.error);
    }
  } catch (error) {
      console.error('Error logging in:', error);
  }
};

  useEffect(() => {
    const checkUserSession = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await client.get('/app/user/');
          setUser(res.data.user);
          setIsLogin(true);
        } catch (error) {
          setUser(null);
          setIsLogin(false);
        }
      }
    };

    checkUserSession();
  }, [setUser, setIsLogin]);

  return (
    <div className={`login_signup_container ${closeForm ? "close_form" : ""}`}>
      <div className="login_form">
        <div className="close_btn">
          <i onClick={() => setCloseForm(!closeForm)} className='bx bx-x'></i>
        </div>
        <form onSubmit={handleSubmit} className={`${isNumber ? "isNumber" : "noForm"}`}>
          <h1>Welcome to Jalgaon.Com</h1>
          <p>Register to personalize your experience</p>
          <div className="hr_line"></div>

          <label htmlFor="mobile-number">Mobile Number</label>
          <div className="number_input">
            <img src={assets.flag} alt="Flag" />
            <input type="text" name='phone_number' value={phoneNumber} id='mobile-number' onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <label htmlFor="user-password">Password</label>
          <div className="number_input">
            <img src={assets.flag} alt="Flag" />
            <input type="password" name='password' value={userPassword} id='user-password' onChange={(e) => setUserPassword(e.target.value)} required />
          </div>
          <span>By Login or Signup I accept terms and conditions</span>
          {errorMessage && <p className="error_message">{errorMessage}</p>}
          <div className="submit_button">
            <button type="submit">
              <span>Continue</span>
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
          <div className="back_btn_login">
            <p onClick={() => setIsNumber(!isNumber)}>Already have an <span>account</span></p>
          </div>
        </form>
        <form onSubmit={handleLoginSubmit} className={`${!isNumber ? "" : "noForm"}`}>
          <h1>Welcome to Jalgaon.Com</h1>
          <p>Login to personalize your experience</p>
          <div className="hr_line"></div>

          <label htmlFor="mobile-number">Mobile Number</label>
          <div className="number_input">
            <img src={assets.flag} alt="Flag" />
            <input type="text" name='phone_number' value={phoneNumber} id='mobile-number' onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <label htmlFor="user-password">Password</label>
          <div className="number_input">
            <img src={assets.flag} alt="Flag" />
            <input type="password" name='password' value={userPassword} id='user-password' onChange={(e) => setUserPassword(e.target.value)} required />
          </div>
          <span>By Login or Signup I accept terms and conditions</span>
          {errorMessage && <p className="error_message">{errorMessage}</p>}
          <div className="submit_button">
            <button type="submit">
              <span>Continue</span>
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
          <div className="back_btn_login">
            <p onClick={() => setIsNumber(!isNumber)}>Create new <span>account</span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
