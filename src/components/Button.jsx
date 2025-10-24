import './Button.css';

function Button(props) {
  return (
    <button style={{ color: props.activeColor }} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
