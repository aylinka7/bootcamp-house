import React from 'react';
import { useState } from "react";
import axios from "axios";

import { mockServer } from "../../../api/mock-server";


export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(null);
    const [error, setError] = useState(null);

    const login = async () => {
        try {
            setIsLoading(true);
            const res = await axios.post(`/api/account/${username}/authenticate`, {
                password
            });
            if (res.status >= 200 && res.status < 300) {
                setLoggedIn(username);
            }
            setUsername("");
            setPassword("");
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Войдите в свою учетную запись</h1>
            <div>
                <input
                    type="text"
                    placeholder="Имя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={login} disabled={!username || !password}>
                Войти
            </button>
            <div>
                <h4>
                    {loggedIn
                        ? `Welcome ${loggedIn}!`
                        : error
                            ? "Failed! Please try again"
                            : "Please Login"}
                </h4>
                {isLoading && <h3>Loading...</h3>}
            </div>
        </div>
    );
}