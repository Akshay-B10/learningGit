import React from 'react';

import './Button.css';

const Button = props => {
  // const [isDisabled, setIsDisabled] = useState(false);

  // if (props.isDisabled) {
  //   setIsDisabled(true);
  // }

  
  const isDisabled = props.isDisabled;

  return (
    <button type={props.type} className={isDisabled ? "button-invalid" : "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
