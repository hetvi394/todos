// InputField.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputField = React.forwardRef(({ icon, type, id, placeholder }, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        <FontAwesomeIcon icon={icon} />
      </label>
      <input
        type={type}
        id={id}
        ref={ref}
        className="form-input"
        placeholder={placeholder}
      />
    </div>
  );
});

export default InputField;
