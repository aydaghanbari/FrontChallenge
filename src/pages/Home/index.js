import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import BookmarkIcon from '../../assets/icons/bookmark.png';
import NotificationIcon from '../../assets/icons/notification.png';
import AvatarPlaceholder from '../../assets/images/profile-placeholder.png';
import SearchIcon from '../../assets/icons/search.png';
import FormField from '../../components/FormField';
import { offers, services, popularServices } from './HomeData';
import ServiceCard from '../../components/Cards/ServiceCard';
import PopularServiceCard from '../../components/Cards/PopularServiceCard';

export default function Home() {
  //context
  const { user } = useContext(AuthContext);
  //states
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategory, setFilteredCategory] = useState('all');
  //handlers
  const searchHandler = () => {
    console.log('search');
  };
  return (
    <div className="home">
      <div className="profile-section">
        <div className="user">
          <div className="avatar">
            <img
              src={
                user && user.image ? user.image : AvatarPlaceholder
              }
              alt=""
            />
          </div>
          <div className="name">
            {user && user.image ? user.name : 'User'}
          </div>
        </div>
        <div className="icon-group">
          {' '}
          <Link to="/home/notification">
            <img
              src={NotificationIcon}
              alt=""
            />
          </Link>
          <Link to="/home/bookmarks">
            <img
              src={BookmarkIcon}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div>
        <FormField
          name="search"
          value={searchTerm}
          changeHandler={searchHandler}
          placeholder="Search"
          icon={SearchIcon}
        />
      </div>
      <div className="section-title">
        <div className="title">Special offers</div>
        <Link to="/home/offers">See all</Link>
      </div>
      {offers.slice(0, 1).map((item, index) => (
        <div
          className="offers"
          key={index}
        >
          <img
            src={item}
            alt=""
          />
        </div>
      ))}
      <div className="section-title">
        <div className="title">Services</div>
        <Link to="/home/services">See all</Link>
      </div>
      <div className="services">
        {' '}
        {services.slice(0, 9).map((item, index) => (
          <ServiceCard
            key={index}
            name={item.name}
            image={item.image}
          />
        ))}
      </div>
      <div className="section-title">
        <div className="title">Most Popular Services</div>
        <Link to="/home/popular-services">See all</Link>
      </div>
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
