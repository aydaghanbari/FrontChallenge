import './style.scss';
import { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import { popularServices } from '../HomeData';
import PopularServiceCard from '../../../components/Cards/PopularServiceCard';
export default function PopularServices() {
  //states
  const [filteredCategory, setFilteredCategory] = useState('all');
  return (
    <div className="popular-service-all">
      <Breadcrumb to="/home">Most Popular Services</Breadcrumb>
      <div className="slider">
        <button
          className="scroll-btn"
          onClick={() => setFilteredCategory('all')}
        >
          All
        </button>
        <button
          className="scroll-btn"
          onClick={() => setFilteredCategory('cleaning')}
        >
          Cleaning
        </button>
        <button
          className="scroll-btn"
          onClick={() => setFilteredCategory('painting')}
        >
          Painting
        </button>
        <button
          className="scroll-btn"
          onClick={() => setFilteredCategory('repairing')}
        >
          Repairing
        </button>
        <button
          className="scroll-btn"
          onClick={() => setFilteredCategory('plumbing')}
        >
          Plumbing
        </button>
        <button
          className="scroll-btn"
          onClick={() => setFilteredCategory('laundry')}
        >
          Laundry
        </button>
        <button
          className="scroll-btn"
          onClick={() => setFilteredCategory('shifting')}
        >
          Shifting
        </button>
      </div>
      {filteredCategory == 'all'
        ? popularServices.map((item, index) => (
            <PopularServiceCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              user={item.user}
              category={item.category}
            />
          ))
        : popularServices
            .filter((item) => item.category == filteredCategory)
            .map((item, index) => (
              <PopularServiceCard
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
                user={item.user}
                category={item.category}
              />
            ))}
    </div>
  );
}
