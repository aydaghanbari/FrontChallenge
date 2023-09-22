import './style.scss';
export default function ServiceCard({ image, name }) {
  return (
    <div className="service-card">
      <div className="img-container">
        <img
          src={image}
          alt=""
        />
      </div>
      <div>{name}</div>
    </div>
  );
}
