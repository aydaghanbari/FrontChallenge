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
import { Link } from 'react-router-dom';
import { axiosReq } from '../../../Api';
export default function SignUp() {
  //states
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    name: 'developer',
  });
  //handlers
  const changeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const signUpHandler = async () => {
    try {
      const req = await axiosReq.post(
        '/api/authaccount/registration',
        newUser
      );
      console.log(req, 'req');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="login-signUp">
      <Breadcrumb to="/" />
      <h1>Create Your Account</h1>
      <div>
        <FormField
          name="email"
          value={newUser.email}
          changeHandler={changeHandler}
          placeholder="Email"
          icon={EmailIcon}
        />
        <FormField
          name="password"
          value={newUser.password}
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
      <ButtonPrimary buttonClicked={signUpHandler}>
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
        Don't have an account? <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
}
