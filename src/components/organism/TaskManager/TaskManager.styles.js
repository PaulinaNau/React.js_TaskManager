import styled from 'styled-components'


export const StyledWrapper = styled.div`
width: 60vw;
height: auto;
background-color: ${({ theme, $light }) => $light ? theme.color.secondary :  theme.color.main};
flex-direction: row;
border-radius: 30px;
padding: 30px;
margin-bottom: 20px;

@media (max-width: 768px) {
    width: 90vw;
    height: auto;
    padding: 10px;
  }
`

export const StyledContainer = styled.div`
    width: 80%;
    height: auto;
    text-align: left;
    border-radius: 20px;
    border: none;
    background-color: ${({ theme }) => theme.color.white};
    margin: 10px;
    padding: 20px;
`
