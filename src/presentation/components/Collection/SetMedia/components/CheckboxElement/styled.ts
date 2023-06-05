import styled from 'styled-components';

export const Container = styled.label<{ check: 'true' | 'false' }>(({ theme, check }) => `
  --border-color: ${check === 'false' ? theme.colors.brand[300] : 'transparent'};
  border: 1px solid;
  border-color: var(--border-color);
  cursor: pointer;
  position: relative;
  height: fit-content;
  padding: 0;
  display: block;
  border-radius: ${theme.rounded.small};

  input[type="checkbox"] {
    display: none;
    height: 0;
    width: 0;
    position: absolute;
    left: -99999;
  }
`);
