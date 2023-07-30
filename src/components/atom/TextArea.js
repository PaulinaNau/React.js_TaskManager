import styled from 'styled-components'


export const TextArea = styled.textarea`
    width: 80%;
    height: 100px;
    text-align: center;
    border-radius: 20px;
    border: none;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.main};
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 400;
    margin: 10px;
    padding: 0;
  
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.grey};
    outline: none;
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.main};
    outline: none;
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.color.main};
    outline: none;
  }
  
  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 300;
    color: ${({ theme }) => theme.color.grey};
  }
  
`
