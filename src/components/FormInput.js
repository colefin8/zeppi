import React, { useState} from 'react';
import InlineCaption from './InlineCaption';

const FormInput = (props) => {
    const {
        styling, 
        hide, 
        inputInvalid, 
        inputId, 
        name,
        value, 
        type, 
        placeholder, 
        required, 
        label,
        validationMessage
    } = props;

    const [inputInitiated, setInputInitiated] = useState(false);

    return (
        <div className={`FormInput ${inputInitiated && inputInvalid ? 'invalid' : ''} ${inputInitiated && !inputInvalid ? 'valid' : ''} container__row m-t-25`}>
            <label htmlFor={name} className={`label ${inputInitiated && inputInvalid ? 'invalid' : ''} ${inputInitiated && !inputInvalid ? 'valid' : ''}`}>{label}</label>
            <input 
                className={`
                    container__col-24
                    ${styling} 
                    ${hide ? "hidden" : ""} 
                    ${inputInitiated && inputInvalid ? 'invalid' : ''} ${inputInitiated && !inputInvalid ? 'valid' : ''}
                    `} 
                id={inputId}
                name={name} 
                value={value} 
                type={type}
                placeholder={placeholder} 
                required={required}
                onChange={event => {
                    props.handleClick(event);
                    event.target.value === '' ? setInputInitiated(false) : setInputInitiated(true);
                }}
            />
            <InlineCaption
            message={validationMessage}
            messageColor={inputInitiated && inputInvalid ? 'inlineCaption-error' : 'inlineCaption-error hidden-trans'}
            useIcon={false}
            inline={true}
            />
        </div>
    );
};
  
export default FormInput;