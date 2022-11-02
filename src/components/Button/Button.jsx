import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ caption, handleClick }) => {
  return (
    <ButtonStyled type="button" onClick={handleClick}>
      {caption}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {  
    caption: PropTypes.string.isRequired,      
    handleClick: PropTypes.func.isRequired,
};