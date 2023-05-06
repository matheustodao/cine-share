import styled from 'styled-components';

interface BubblesProps {
  schema?: 'blue' | 'red'
}

export const Bubbles = styled.div<BubblesProps>(({ theme, schema = 'blue' }) => `
  --color: ${schema === 'blue' ? theme.colors.blue[500] : theme.colors.red[600]};

  position: absolute;
  top: ${schema === 'blue' ? '24%' : '0'};;
  left: ${schema === 'blue' ? '60%' : '0'};

  width: calc(80vw/2);
  height: calc(80vw/2);

  border-radius: 100%;

  background: var(--color);
  opacity: 0.58;
  filter: blur(45.5px);
`);
