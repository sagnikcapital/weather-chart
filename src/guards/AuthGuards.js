import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthGuard = ({component}) => {
    useEffect(() => {
        console.log("Auth Guard");
    }, []);

    return <React.Fragment>{component}</React.Fragment>
}

AuthGuard.propTypes = {
    component: PropTypes.element.isRequired
}

export default AuthGuard;