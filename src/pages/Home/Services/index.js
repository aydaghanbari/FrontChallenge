import './style.scss';
import ServiceCard from '../../../components/Cards/ServiceCard';
import Breadcrumb from '../../../components/Breadcrumb';
import { services } from '../HomeData';
export default function Services() {
  return (
    <div className="all-services">
      <Breadcrumb to="/home">All servicess</Breadcrumb>
      <div className="service-items">
        {services.map((item, index) => (
          <ServiceCard
            key={index}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
