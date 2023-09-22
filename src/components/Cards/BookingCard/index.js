import './style.scss';

export default function BookingCard({
  name,
  count,
  incrementHandler,
  decrementHandler,
}) {
  return (
    <div className="booking-card ">
      <div>{name}</div>
      <div className="counters">
        <div
          className="counter"
          onClick={() => decrementHandler(name)}
        >
          -
        </div>
        <div>{count}</div>
        <div
          className="counter"
          onClick={() => incrementHandler(name)}
        >
          +
        </div>
      </div>
    </div>
  );
}
