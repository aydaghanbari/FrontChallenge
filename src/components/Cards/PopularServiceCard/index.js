import './style.scss';
export default function PopularServiceCard({
  image,
  price,
  title,
  user,
}) {
  return (
    <div className="popular-service">
      <div className="img">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="card-body">
        <div className="user">{user}</div>
        <div className="title">{title}</div>
        <div className="price">$ {price}</div>
      </div>
    </div>
  );
}
