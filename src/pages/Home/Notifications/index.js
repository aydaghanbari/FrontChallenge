import './style.scss';
import Breadcrumb from '../../../components/Breadcrumb';

export default function Notification() {
  return (
    <div className="notification">
      <Breadcrumb to="/home">Notifications</Breadcrumb>
    </div>
  );
}
