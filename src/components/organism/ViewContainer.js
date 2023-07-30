import styled from 'styled-components'


export const ViewContainer = styled.div`
width: 60vw;
height: auto;
background-color: ${({ theme, isLight }) => isLight ? theme.color.secondary :  theme.color.main};
color: $black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column; 
border-radius: 30px;
padding: 30px;
margin-bottom: 20px;

@media (max-width: 768px) {
    width: 90vw;
    height: auto;
    padding: 10px;
  }
`
