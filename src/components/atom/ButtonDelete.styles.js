import styled from 'styled-components'


export const StyledButtonDelete = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50px;
  border: none;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  margin: 5px;
  transition: all .3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 

&:hover {
  background-color: ${({ theme }) => theme.color.red};
  cursor: pointer;
}

&::after {
  content: "x";
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  
`
