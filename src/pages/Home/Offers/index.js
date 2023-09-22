import './style.scss';
import Breadcrumb from '../../../components/Breadcrumb';
import { offers } from '../HomeData';

export default function Offers() {
  return (
    <div className="all-offers">
      <Breadcrumb to="/home">Special Offers</Breadcrumb>
      {offers.map((item, index) => (
        <div className="offer-item">
          {' '}
          <img
            src={item}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
