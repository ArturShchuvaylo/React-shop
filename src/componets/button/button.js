import React from "react";
import './button.scss'

const BUTTON_TYPE_CLASSES = {
    inverted: 'inverted',
    gogle: ' google-sign-in',
}

const Button = ({ children, buttonType, ...props }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...props}
            type="submit"
        >
            {children}
        </button>
    )
}

export default Button;