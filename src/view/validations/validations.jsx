const validateName = (value, field) => {
    if (!value) {
        return "Недоступно";
    } else if (!/^[A-Za-z]+$/i.test(value)) {
        return `Неправильный ${field}`;
    }
};
const validatePassword = (value, field, passwordValue) => {
    if (!value) {
        return "Недоступно";
    } else if (value.length > 6 || value.length < 6) {
        return "Только 6 символов";
    } else if (field === "cpassword" && value !== passwordValue) {
        return "Пароли не совпадают";
    }
};

export default validateName;

export { validateName, validatePassword };
