import './style.scss';
import Breadcrumb from '../../components/Breadcrumb';
import Avatar from '../../assets/images/profile-placeholder.png';
import TickIcon from '../../assets/icons/tick.png';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/icons/back-arrow.png';
export default function Profile() {
  return (
    <div className="profile">
      <Breadcrumb to="/home">Profile</Breadcrumb>
      <div className="avatar">
        <img
          src={Avatar}
          alt=""
        />
        <div className="tick">
          <img
            src={TickIcon}
            alt=""
          />
        </div>
      </div>
      <div className="name">User</div>
      <hr />
      <Link
        to="/profile/profile-edit"
        className="link"
      >
        <div>Edit Profile</div>
        <div>
          {' '}
          <img
            src={Arrow}
            alt=""
          />
        </div>
      </Link>
      <Link
        to="/profile/notification"
        className="link"
      >
        <div>Notification</div>
        <div>
          {' '}
          <img
            src={Arrow}
            alt=""
          />
        </div>
      </Link>
      <Link
        to="/profile/notification"
        className="link logout"
      >
        <div>Logout</div>
        <div></div>
      </Link>
    </div>
  );
}
