/** @format */

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  width: 100%;
  border: 0;
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  height: 35px;
  padding: 0 15px;
  font-size: 12px;
  &::placeholder {
    opacity: 0.7;
    font-weight: 400px;
  }
  &:focus {
    animation-name: focusColor;
    animation-duration: 500ms;
    box-shadow: 0px 0px 10px 1px rgba(138, 146, 230, 1);
  }
  @keyframes focusColor {
    from {
      box-shadow: 0px 0px 0px 0px rgba(138, 146, 230, 1);
    }
    to {
      box-shadow: 0px 0px 10px 1px rgba(138, 146, 230, 1);
    }
  }
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default Input;
