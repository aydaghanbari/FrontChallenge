import './style.scss';
import BackArrow from '../../assets/icons/back-arrow.png';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ children, to }) {
  return (
    <Link to={to}>
      <div className="navigation-menu">
        <img
          src={BackArrow}
          alt=""
        />

        <div>{children}</div>
      </div>
    </Link>
  );
}
