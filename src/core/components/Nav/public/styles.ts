import styled, { css } from 'styled-components';

interface RouteProps {
  active: 'true' | 'false'
}

export const Container = styled.nav(({ theme }) => `
  background: ${theme.colors.bg.app};
  padding: 7.8rem 3.4rem;
  position: absolute;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 1360px) {
    max-width: 38.3rem;
    min-height: 93vh;

    right: 3rem;
    top: 5rem;

    border-radius: ${theme.rounded.medium};
  }
`);

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3.3rem;

  > button {
    background: none;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  li + li {
    margin-top: 1.6rem;
    height: max-content;
    box-sizing: content-box;
  }
`;

export const Route = styled.li<RouteProps>(({ theme, active }) => `
  font-family: ${theme.fonts.title.family};
  font-weight: ${theme.fonts.title.weight.semi};
  font-size: ${theme.fonts.sizes.large};

  color: ${theme.colors.text[600]};

  padding: 1.75rem 0;

  ${active === 'true' && css`
    color: ${theme.colors.brand[100]};
    border-left: 3px solid;
    border-color: ${theme.colors.brand[100]};
    padding-left: 1.2rem;
  `}
`);
