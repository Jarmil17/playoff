import React from 'react';

const LoginPage = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="login-email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="login-email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="login-password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="login-password"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
