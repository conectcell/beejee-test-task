const validateEmail = (email) =>
{
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default {
    validateEmail(text)
    {
        return text.length === 0 ? false : validateEmail(text.toLowerCase());
    },
    validateRequiredField(text)
    {
        return text.length >= 3;
    },
};
