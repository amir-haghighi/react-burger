import Classes from "./Controler.module.css";

const Controler = (props) => {
  return (
    <div className={Classes.Controler}>
      <div className={Classes.Label}>
        {props.label} : {props.ingNumber}
      </div>
      <button
        className={Classes.Less}
        onClick={props.remove}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={Classes.More} onClick={props.add}>
        More
      </button>
    </div>
  );
};
export default Controler;
