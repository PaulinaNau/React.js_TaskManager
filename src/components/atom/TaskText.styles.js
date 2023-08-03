import styled from "styled-components";

export const TaskTitle = styled.p`
  color: ${({ theme, $white }) => $white ? theme.color.white : theme.color.main};
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
  margin: 0;
`;
export const TaskDescription = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  margin: 5px 0;
`;
export const Author = styled.p`
  color: ${({ theme }) => theme.color.main};
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  font-style: italic;
  margin: 0;
  padding: 0;
`;
