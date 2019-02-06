import styled, { createGlobalStyle, css } from 'styled-components';

// BREAKPOINTS
const sizes = {
  desktop: 1000,
  tablet: 768,
  phone: 576,
};

const defaults = {
  width: 100,
  fontSize: 16, 
};

// MEDIA QUERIES
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc;
}, {})

// GLOBAL
export const GlobalStyle = createGlobalStyle`
  .main-content {
    padding: 0 2rem;
  }
`;

export const MAIN = styled.main`
  max-width: ${sizes.desktop}px;
  margin: 0 auto;
`;

export const UL = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LI = styled.li`
  padding: 10px 0;
`;

export const H1 = styled.h1`
  font-size: calc(${defaults.fontSize}px * 2);
  margin: 0 0 10px 0;
`;

export const H2 = styled.h2`
 font-size: calc(${defaults.fontSize}px * 1.75);
`;

export const P = styled.p`
  margin: 0 0 10px 0;
`;

export const SPAN = styled.span``;

export const I = styled.i``;
