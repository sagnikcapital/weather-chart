import React, { useEffect } from 'react';
import PropTypes from "prop-types";

const UnAuthGuard = ({ component }) => {
  useEffect(() => {
    console.log("UnAuth Guard");
  }, []);

  return <React.Fragment>{component}</React.Fragment>;
};

UnAuthGuard.propTypes = {
  component: PropTypes.element.isRequired,
};

export default UnAuthGuard;