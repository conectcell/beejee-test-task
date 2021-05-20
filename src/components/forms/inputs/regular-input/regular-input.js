import React, {useEffect} from 'react';
import {inputValidators} from "../../../../utlis";

const RegularInput = ({name, label, placeholder, type = 'text', value, errorText, validator, changeInputValue, options = {}}) =>
{



    useEffect(() => {
        changeInput(value);
    }, [value]);

    const changeInput = (val) => {
        const validated = validate(val);
        changeInputValue(val, validated);
    };

    const validate = (val) => {

        switch (validator) {
            case 'email':
                return inputValidators.validateEmail(val);
            case 'required':
                return inputValidators.validateRequiredField(val);
            default:
                return true;

        }
    };


    const renderSelect = () => {
        return (
            <select className="form-control" id={name} aria-describedby={`${name}help`} placeholder={placeholder} onChange={e => changeInput(e.target.value)} defaultValue={value}>
                {
                    Object.keys(options).map(k => {
                        return (
                            <option value={k} >{options[k]}</option>
                        )
                    })
                }
            </select>
        )
    }


    const renderInput = () => <input type={type} className="form-control" id={name} aria-describedby={`${name}help`} placeholder={placeholder} onChange={e => changeInput(e.target.value)} value={value}/>

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {type === 'select' ? renderSelect() : renderInput()}
            <small id={`${name}help`} className="form-text text-danger">{errorText}</small>
        </div>
    );
};

export default RegularInput;
