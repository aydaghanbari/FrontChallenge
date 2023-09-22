import './style.scss';
import Breadcrumb from '../../components/Breadcrumb';
import BookingCard from '../../components/Cards/BookingCard';
import { BookingcardData } from './BookinData';
import { useState } from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';
export default function Booking() {
  //states
  const [cardData, setCardData] = useState(BookingcardData);

  //handlers
  const incrementHandler = (i) => {
    const cloneCardDAta = [...cardData];
    const el = cardData.findIndex((item) => item.name == i);
    const newCount = cloneCardDAta[el].count + 1;
    cloneCardDAta[el].count = newCount;
    setCardData(cloneCardDAta);
  };
  const decrementHandler = (i) => {
    const cloneCardDAta = [...cardData];
    const el = cardData.findIndex((item) => item.name == i);
    const newCount = cloneCardDAta[el].count - 1;
    if (cloneCardDAta[el].count < 1) {
      cloneCardDAta[el].count = cloneCardDAta[el].count;
    } else {
      cloneCardDAta[el].count = newCount;
    }

    setCardData(cloneCardDAta);
  };

  return (
    <div className="booking">
      <Breadcrumb to="/home">Booking</Breadcrumb>
      <div className="title">
        Enter the number of terms to be cleaned
      </div>
      {cardData.map((item, index) => (
        <BookingCard
          key={index}
          name={item.name}
          count={item.count}
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
        />
      ))}
      <div className="update-btn">
        <ButtonPrimary>Countinue</ButtonPrimary>
      </div>
    </div>
  );
}
