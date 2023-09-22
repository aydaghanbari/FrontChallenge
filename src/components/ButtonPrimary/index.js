import './style.scss';

export default function ButtonPrimary({ children, buttonClicked }) {
  return (
    <button
      className="btn-primary"
      onClick={buttonClicked}
    >
      {children}
    </button>
  );
}
