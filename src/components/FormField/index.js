import './style.scss';

export default function FormField({
  placeholder,
  value,
  changeHandler,
  name,
  icon,
}) {
  return (
    <div className="form-field">
      <img
        src={icon}
        alt=""
      />
      <input
        onChange={changeHandler}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
