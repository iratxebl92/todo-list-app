import PropTypes from 'prop-types'
import '../styles/styles.css'

export const CustomButton = ({ value, className, onClick, disabled }) => {
 
  return (
  
      <button 
        onClick={onClick}
        className={`${className} button`}
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
    disabled: PropTypes.any
   
}