import React from "react";
import { useState } from "react";
import FormInput from "../formInput";
import Button from "../button";

import './sign-up-form.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const onChangeData = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })

    }


    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={() => { }}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={onChangeData}
                    name='displayName'
                    value={displayName} />



                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={onChangeData}
                    name='email'
                    value={email} />


                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={onChangeData}
                    name='password'
                    value={password} />


                <FormInput
                    label='ConfirmPassword'
                    type='password'
                    required
                    onChange={onChangeData}
                    name='confirmPassword'
                    value={confirmPassword} />

                <Button buttonType={'inverted'}  >Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;