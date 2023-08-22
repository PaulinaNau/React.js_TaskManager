import styled from 'styled-components'


export const StyledWrapper = styled.div`
width: 40vw;
height: auto;
background-color: ${({ theme, $light }) => $light ? theme.color.secondary :  theme.color.main};
flex-direction: row;
border-radius: 30px;
padding: 30px;
margin-bottom: 20px;

@media (max-width: 992px) {
    width: 80vw;
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
    background-color: ${({ theme, $isDone }) => $isDone ? theme.color.grey :  theme.color.white};
    margin: 10px;
    padding: 20px;
`
