import "./input.scss";

const Input = ({ label, type, ...otherProps }) => {
  return (
    <div className="input-container">
      <label> {label} </label>
      <input required type={type} {...otherProps} />
    </div>
  );
};
export default Input;
