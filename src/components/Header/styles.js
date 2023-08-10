import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  height: 11.4rem;
  width: 100%;
  padding: 5.6rem 2.8rem 2.4rem;
  display: flex;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

`;