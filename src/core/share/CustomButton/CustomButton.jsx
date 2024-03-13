
import PropTypes from 'prop-types'

import './styles.css'


export const CustomButton = ({ value, className, onClick, disabled }) => {
 
  return (
  
      <button 
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
          {value}
      </button>
   
  );
};

CustomButton.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.func
   
}