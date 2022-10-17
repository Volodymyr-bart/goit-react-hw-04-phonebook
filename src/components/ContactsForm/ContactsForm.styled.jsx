import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  padding: 20px;
  width: 30%;
  gap: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  width: 90%;
  background-color: antiquewhite;
`;
export const Error = styled(ErrorMessage)``;

export const AddButton = styled.button`
  width: 150px;
  background-color: #6262d8;
  cursor: pointer;
`;
