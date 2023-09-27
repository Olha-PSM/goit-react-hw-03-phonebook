import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  width: 350px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  padding: 5px;
`;

export const Button = styled.button`
  margin: 0 auto;
  display: block;
  font-size: 18px;
  height: 50px;
  background-color: #ee82ee;
  border: 1px solid white;
`;
export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
