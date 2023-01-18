import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;

  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
`;

export const Input = styled(Field)`
  font-size: 16px;
  line-height: 1.4;

  padding: 4px;
  border: 1px solid #cccaca;
  border-radius: 5px;
`;

export const Error = styled(ErrorMessage)`
  font-size: 11px;
  font-weight: 400;

  color: #f28d7c;
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 16px;

  border: 1px solid #b5b5b5;
  border-radius: 5px;
  background-color: #d5e3e1;
  transition: var(--animation-global);

  &:hover,
  &:focus,
  &:active {
    background-color: #f3f5ce;
  }
`;
