import React, {useEffect, useState} from 'react';
import RegularInput from "../inputs/regular-input";
import Spinner from "../../spinner";
import {connect} from "react-redux";


const Form = ({
                  inputs,
                  action,
                  initialState,
                  header,
                  buttonText,
                  errors,
                  loading
              }) =>
{

    const [state, setState] = useState(initialState);


    useEffect(() =>
    {
        const newState = {...state};
        for (let k of Object.keys(newState.errorMessages))
        {
            if (errors[k])
            {
                newState.errorMessages[k] = errors[k];
            }
        }
        setState(newState);
    }, [errors])

    const changeInputValue = (name, value, validated) =>
    {
        setState((state) =>
        {
            const validatedFields = {...state.validatedFields, [name]: validated};
            const validatedCount = Object.keys(validatedFields).filter(
                (i) => validatedFields[i],
            ).length;

            const newState = {
                ...state,
                [name]: value || '',
                validatedFields: validatedFields,
                validated: validatedCount === Object.keys(validatedFields).length,
            };

            newState.errorMessages[name] = '';
            return newState;
        });
    };

    const renderInputs = inputs.map((input) =>
    {
        const {name, type} = input;
        return (
            <RegularInput
                key={`${name}-${type}`}
                value={state[name]}
                errorText={state.errorMessages[name]}
                changeInputValue={(value, validated) =>
                {
                    changeInputValue(name, value, validated);
                }}
                {...input}
            />
        );
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        action(state)
    }


    return (
        <div>
            {header && <h3>{header}</h3>}
            <form onSubmit={handleSubmit}>
                {renderInputs}
                {loading ? <Spinner/> : <input
                    className="btn btn-primary float-right"
                    disabled={!state.validated}
                    type="submit"
                    value={buttonText}
                />}
            </form>

        </div>
    );
};

const mapStateToProps = state => ({loading: state.common.formLoading});

export default connect(mapStateToProps, null)(Form);
