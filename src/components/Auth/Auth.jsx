import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Auth.css';

const Auth = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <button onClick={loginWithRedirect}>Sign In</button>
        </>
    );
}

export default Auth;