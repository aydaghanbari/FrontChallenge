import './style.scss';
import Logo from '../../assets/images/create.png';
import FacebookIcon from '../../assets/icons/Facebook.svg';
import GoogleIcon from '../../assets/icons/Google-Plus.svg';
import AppleIcon from '../../assets/icons/Apple.svg';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function MainPage() {
  //handlers
  const signInHandler = () => {
    console.log('clicked');
  };
  return (
    <div className="main_page-container">
      <div className="img">
        <img
          src={Logo}
          alt=""
        />
      </div>
      <h1>Lets you in</h1>
      <div>
        <Link
          to="#"
          className="login-link"
        >
          <div>
            <img
              src={FacebookIcon}
              alt=""
            />
          </div>
          <div>continue with Facebook</div>
        </Link>
        <Link
          to="#"
          className="login-link"
        >
          <div>
            <img
              src={GoogleIcon}
              alt=""
            />
          </div>
          <div>continue with Google</div>
        </Link>
        <Link
          to="#"
          className="login-link"
        >
          <div>
            <img
              src={AppleIcon}
              alt=""
            />
          </div>
          <div>continue with Apple</div>
        </Link>
      </div>
      <div className="divider">or</div>
      <ButtonPrimary buttonClicked={signInHandler}>
        Sign in with password
      </ButtonPrimary>
      <div className="navigation-link">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
}
