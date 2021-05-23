const formErrors = (errors, inputs) => {


    const leftErrors = {...errors};

    const formErrors = {};
    for (let name of inputs)
    {
        if (errors[name])
        {
            formErrors[name] = errors[name];
            delete leftErrors[name];
        }
    }


    return {formErrors, leftErrors}
}



export const loginFormErrors = (errors) => formErrors(errors,['username','password']);
export const addTasksFromErrors = (errors) => formErrors(errors,['username','password']);
export const editTasksFromErrors = (errors) => formErrors(errors,['status','text']);
