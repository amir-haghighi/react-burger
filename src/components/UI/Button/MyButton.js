import Classes from "./MyButton.module.css";

const MyButton = (props) => (
  <button
    onClick={props.onClick}
    className={`${Classes.Button} ${Classes[props.type]}`}
  >
    {props.children}
  </button>
);
export default MyButton;
