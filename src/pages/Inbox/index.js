import './style.scss';
import Breadcrumb from '../../components/Breadcrumb';
export default function Inbox() {
  return (
    <div className="inbox">
      <Breadcrumb to="/home">Inbox</Breadcrumb>
    </div>
  );
}
