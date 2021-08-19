import React from "react";
import css from "./dashboard.module.css"
import { Redirect } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import AddHouse from "../addHouse/AddHouse";
const _ = require("lodash");

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.name,
            board: [],
            boardItem: "",
            toggle: false,
            submit: true,
            logout: false,
            loggedInUserObj: {},
        };
    }

    onLogoutYes = () => {
        this.setState({ submit: false });
        this.setState({ toggle: true });
        const userObj = JSON.parse(
            localStorage.getItem(_.get(this.state.loggedInUserObj, "userName", ""))
        );
        userObj.isUserLoggedIn = false;
        localStorage.setItem(
            _.get(this.state.loggedInUserObj, "userName", ""),
            JSON.stringify(userObj)
        );
    };

    onLogout = () => {
        this.setState({
            logout: !this.state.logout,
        });
    };

    componentDidMount() {
        const loggedInUserName = _.get(this.props.location, "state.userName", {});
        this.setState({
            loggedInUserObj: JSON.parse(localStorage.getItem(loggedInUserName)),
        });
    }

    render() {
        const localUname = `${_.get(
            this.state.loggedInUserObj,
            "firstName",
            ""
        )} ${_.get(this.state.loggedInUserObj, "lastName", "")}`;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li
                                    className="nav-item active text-right"
                                    onClick={this.onLogout}
                                >
                                    <button
                                        type="button"
                                        className={css.btn}
                                        onClick={this.onLogout}
                                    >
                                        LOGOUT
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <p className={css.welcome}>Добро пожаловать в личный кабинет {localUname}</p>
                </div>
                <div className="container">
                <AddHouse />
                </div>
                {!this.state.submit ? <Redirect to={`/`} /> : null}
                {this.state.logout ? (
                    <SweetAlert
                        warning
                        showCancel
                        confirmBtnText="Yes"
                        confirmBtnBsStyle="danger"
                        title="Are you sure?"
                        onConfirm={this.onLogoutYes}
                        onCancel={this.onLogout}
                        focusCancelBtn
                    >
                    </SweetAlert>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default DashBoard;