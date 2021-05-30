import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

// Aquest el boto per poder desloguejarte un cop has fet el login

const LogoutButton = () => {
    const {logout} = useAuth0();
    return(
        <Button
            onClick={() => logout()}
            id="qsLoginBtn"
            variant="primary"
            className="btn-margin"
        >
            Log Out
        </Button>
    );
};

export default LogoutButton;
