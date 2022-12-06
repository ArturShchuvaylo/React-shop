import React from "react";

const FormInput = ({ label, ...props }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type='text'
                required
                onChange={props.onChange}
                name={props.name}
                value={props.displayName}
            />
        </div>
    )
}

export default FormInput;