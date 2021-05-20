const validators = {
    validateEmail(text)
    {
        const validateEmail = (email) =>
        {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        return text.length === 0 ? false : validateEmail(text.toLowerCase());
    },
    validateRequiredField(text)
    {
        return text.length >= 3;
    },
};

export default validators;
