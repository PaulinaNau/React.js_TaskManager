import styled from "styled-components";

export const StyledInput = styled.input`
  width: 80%;
  height: auto;
  text-align: center;
  border-radius: 40px;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.main};
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  margin: 10px;
  padding: 5px 10px;
  outline: none;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 300;
    color: ${({ theme }) => theme.color.grey};
  }
`;
