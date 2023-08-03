import styled from 'styled-components';

export const StyledHeader = styled.h1`
font-family: 'Raleway', sans-serif;
color: ${({ theme, $white }) => $white ? theme.color.white :  theme.color.main};
font-size: ${({ theme }) => theme.fontSize.xl};
text-align: center;
font-weight: 400;

@media (max-width: 768px) {
  font-size: ${({ theme }) => theme.fontSize.l};

}
  
`