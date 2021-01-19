import React from "react";
import PropTypes from "prop-types";
import ButtonStyled from './ButtonStyled'

const Button = ({ onClick }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      Load more
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};