import React from "react";
import classes from '../UI/component.css'
                                                
const Button = ({children, Func,styl, ...props}) => {
    return (
    <button className="myButton" onClick={Func} style={styl} {...props}>
       {children}
    </button>
  );
}
export default Button;
