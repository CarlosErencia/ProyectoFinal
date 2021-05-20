import React from "react";
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const history = useHistory();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return(
        <Auth0Provider
            domain = "boatking.eu.auth0.com"
            clientId = "OTpdgWjiRK4iYmfypJ6z9m2aK9mRoBWR"
            redirectUri = {window.location.origin}
            onRedirectCallback= {onRedirectCallback}    
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;