import styles from "./button.module.css";

const Button = ({ className, onClick, children }) => {
  return (
    <button
      type="click"
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
