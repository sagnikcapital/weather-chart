
import PropTypes from 'prop-types';

const ChildButton = ({message, children}) => {
  return (
    <button className="child-button" onClick={() => alert(message)}>{children}</button>
  );
}


ChildButton.PropTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.component
};

export default ChildButton;