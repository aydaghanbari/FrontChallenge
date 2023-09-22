import './style.scss';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '../assets/icons/home.png';
import BookingIcon from '../assets/icons/booking.png';
import InboxIcon from '../assets/icons/inbox.png';
import ProfileIcon from '../assets/icons/profile.png';
import CalenderIcon from '../assets/icons/calender.png';
import { useState } from 'react';

export default function Layout() {
  const [selected, setselected] = useState(1);
  return (
    <div className="layout">
      {' '}
      <Outlet />
      <ul className="menu">
        <li>
          <Link
            to="/home"
            onClick={() => setselected(1)}
            className={'menu-item ' + (selected == 1 ? 'active' : '')}
          >
            <img
              src={HomeIcon}
              alt=""
            />
            <div>Home</div>
          </Link>
        </li>
        <li>
          <Link
            to="/booking"
            onClick={() => setselected(2)}
            className={'menu-item ' + (selected == 2 ? 'active' : '')}
          >
            <img
              src={BookingIcon}
              alt=""
            />
            <div>Booking</div>
          </Link>
        </li>
        <li>
          <Link
            to="/calender"
            onClick={() => setselected(3)}
            className={'menu-item ' + (selected == 3 ? 'active' : '')}
          >
            <img
              src={CalenderIcon}
              alt=""
            />
            <div>Calender</div>
          </Link>
        </li>
        <li>
          <Link
            to="/inbox"
            onClick={() => setselected(4)}
            className={'menu-item ' + (selected == 4 ? 'active' : '')}
          >
            <img
              src={InboxIcon}
              alt=""
            />
            <div>Inbox</div>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            onClick={() => setselected(5)}
            className={'menu-item ' + (selected == 5 ? 'active' : '')}
          >
            <img
              src={ProfileIcon}
              alt=""
            />
            <div>Profile</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
