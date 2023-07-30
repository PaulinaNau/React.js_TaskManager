import styled from 'styled-components'


export const Button = styled.button`
  width: 200px;
  height: 40px;
  text-align: center;
  border-radius: 40px;
  border: none;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  margin: 10px;
  transition: all .3s ease-in-out;

&:hover {
  background-color: ${({ theme }) => theme.color.additional};
  cursor: pointer;
}
  
`
