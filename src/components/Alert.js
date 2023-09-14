import React from "react";

const Alert = (props) => {
  // const [display, setDisplay] = useState("block");
  return (
    <div
      className={`alert alert-success`}
      role="alert"
      // style={{ display: display }}
    >
      {props.message}
    </div>
  );
};

export default Alert;
