import React from "react";
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition,
} from "react-toasts";
import {Redirect, Link} from "react-router-dom";
import {Formik} from "formik";
import base64 from "react-native-base64";
import {validateName, validatePassword} from "../../validations/validations";
import css from "./login.module.css"

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
        };
    }

    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        userName: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        errors.userName = validateName(values.userName, "Username") || null;
                        errors.password = validatePassword(values.password) || null;

                        for (var key in errors) {
                            if (errors[key] !== null) return errors;
                        }
                        return true;
                    }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                        let userObj = localStorage.getItem(values.userName);
                        if (!userObj) {
                            ToastsStore.error("Неправильный логин/пароль пользователя");
                        } else {
                            userObj = JSON.parse(userObj);
                            const localUname = (userObj && userObj.userName) || null;
                            const localUpwd =
                                (userObj && base64.decode(userObj.password)) || null;

                            if (
                                values.userName === localUname &&
                                values.password === localUpwd
                            ) {
                                userObj.isUserLoggedIn = true;
                                localStorage.setItem(values.userName, JSON.stringify(userObj));
                                this.setState({submit: true});
                            } else {
                                ToastsStore.error("Неправильный логин/пароль пользователя");
                            }
                        }
                    }}
                >
                    {(props) => (
                        <div className={css.login}>
                            <div className={css.login__inner}>
                                <h1>
                                    Войти
                                </h1>
                                <div>
                                    <div>
                                        <div>
                                            <form onSubmit={props.handleSubmit}>
                                                <div>
                                                    <label className={css.label__login}>
                                                        Имя пользователя<span className={css.login__danger}>*</span>
                                                        <span className={css.error__message}>
                              {props.errors.userName &&
                              props.touched.userName &&
                              props.errors.userName}
                            </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className={css.input__login}
                                                        placeholder="Логин"
                                                        name="userName"
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        value={props.values.userName}
                                                    />
                                                </div>
                                                <div>
                                                    <label className={css.label__login}>
                                                        Пароль<span className={css.login__danger}>*</span>
                                                        <span className={css.error__message}>
                              {props.errors.password &&
                              props.touched.password &&
                              props.errors.password}
                            </span>
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className={css.input__login}
                                                        placeholder="***********"
                                                        name="password"
                                                        onChange={props.handleChange}
                                                        onBlur={props.handleBlur}
                                                        value={props.values.password}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        className={css.input__submit}
                                                        type="submit"
                                                        value="Войти"
                                                    />
                                                </div>
                                            </form>
                                            {localStorage.getItem(props.values.userName) &&
                                            JSON.parse(localStorage.getItem(props.values.userName))
                                                .isUserLoggedIn ? (
                                                <Redirect
                                                    to={{
                                                        pathname: "/dashboard",
                                                        state: {userName: props.values.userName},
                                                    }}
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </div>

                            </div>
                                    <div className={css.overlay}>
                                        <h6>Привет, Друг!</h6>
                                        <p>Создай аккаунт для добавления своей квартиры!</p>
                                        {" "}
                                        <Link to={"/register"}><button className={css.ghost}>Создать аккаунт</button></Link>{" "}
                                    </div>
                            <ToastsContainer
                                store={ToastsStore}
                                position={ToastsContainerPosition.TOP_RIGHT}
                            />
                        </div>
                    )}
                </Formik>
            </div>
        );
    }
}

export default LogIn;
