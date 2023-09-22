import '../login-signup.scss';
import Breadcrumb from '../../../components/Breadcrumb';
import FormField from '../../../components/FormField';
import { useState } from 'react';
import EmailIcon from '../../../assets/icons/email.png';
import PasswordIcon from '../../../assets/icons/password.png';
import ButtonPrimary from '../../../components/ButtonPrimary';
import FacebookIcon from '../../../assets/icons/Facebook.svg';
import GoogleIcon from '../../../assets/icons/Google-Plus.svg';
import AppleIcon from '../../../assets/icons/Apple.svg';
import { Link, useNavigate } from 'react-router-dom';
import { axiosReq } from '../../../Api';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Cookies from 'js-cookie';

export default function Login() {
  const navigate = useNavigate();
  //context
  const { user, setUser } = useContext(AuthContext);

  // form states
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  //handlers
  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const signInHandler = async () => {
    try {
      const res = await axiosReq.post(
        '/api/authaccount/login',
        userData
      );
      Cookies.set('token', res.data.Token);
      axiosReq.defaults.headers.Authorization = `Bearer ${res.data.Token}`;
      setUser(res.data);
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-signUp">
      <Breadcrumb to="/" />
      <h1>Login to your Account</h1>
      <div>
        <FormField
          name="email"
          value={userData.email}
          changeHandler={changeHandler}
          placeholder="Email"
          icon={EmailIcon}
        />
        <FormField
          name="password"
          value={userData.password}
          changeHandler={changeHandler}
          placeholder="Password"
          icon={PasswordIcon}
        />
      </div>
      <div className="remember">
        <label className="checkbox-container">
          remember me
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <ButtonPrimary buttonClicked={signInHandler}>
        Sign up
      </ButtonPrimary>
      <div className="divider">or countinue with</div>
      <div className="link-group ">
        <Link
          to=""
          className="link"
        >
          {' '}
          <img
            src={AppleIcon}
            alt=""
          />
        </Link>
        <Link
          to=""
          className="link"
        >
          {' '}
          <img
            src={GoogleIcon}
            alt=""
          />
        </Link>
        <Link
          to=""
          className="link"
        >
          {' '}
          <img
            src={FacebookIcon}
            alt=""
          />
        </Link>
      </div>
      <div className="navigation-link">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}
