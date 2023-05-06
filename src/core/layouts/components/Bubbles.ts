import styled from 'styled-components';

interface BubblesProps {
  schema?: 'blue' | 'red'
}

export const Bubbles = styled.div<BubblesProps>(({ theme, schema = 'blue' }) => `
  --color: ${schema === 'blue' ? theme.colors.blue[500] : theme.colors.red[600]};

  position: fixed;
  top: ${schema === 'blue' ? '48%' : '20%'};;
  left: ${schema === 'blue' ? '80%' : '-10%'};

  width: 35rem;
  height: 45rem;

  border-radius: 100%;

  background: var(--color);
  opacity: 0.58;
  filter: blur(45.5px);

  z-index: -2;
`);
